import { Server } from "socket.io";
import { getSession } from "next-auth/react";
import Notification from "@/models/notification.model";
import { getAllNotification } from "@/utils/actions/notification.action";
import Message from "@/models/message.model";
import UserModel from "@/models/User";

export default function SocketHandler(req, res) {
  if (res.socket.server.io) {
    console.log("Socket is already running");
  } else {
    console.log("Socket is initializing");
    const io = new Server(res.socket.server, { addTrailingSlash: false });
    res.socket.server.io = io;

    io.on("connection", async (socket) => {
      const session = await getSession({ req: socket.request });
      const user = await UserModel.findOne({ email: session.user.email });
      const userId = user._id.toString();
      const allNotif = await getAllNotification({ userId, type: "all" });
      socket.emit("set-notifications", allNotif);
      const query = {
        $or: [{ userIdFrom: user._id }, { userIdTo: user._id }],
      };
      const messages = await Message.find(query)
        .populate("userIdFrom")
        .populate("userIdTo")
        .sort({ createdAt: 1 })
        .lean();
      const chatMap = new Map();

      socket.emit("set-messages", messages);

      // Active Users
      if (res.socket.server.io) {
        console.log("Socket is already running");
      } else {
        console.log("Socket is initializing");
        const io = new Server(res.socket.server, { addTrailingSlash: false });
        res.socket.server.io = io;
        const userMap = new Map();
        io.on("connection", async (socket) => {
          const session = await getSession({ req: socket.request });
          const user = await UserModel.findOne({ email: session.user.email });
          const userId = user._id.toString();
          userMap.set(userId, {
            socketId: socket.id,
            lastActivity: Date.now(),
          });

          // Emit initial active users list
          socket.emit("set-active-users", [...userMap.keys()]);
          socket.broadcast.emit("set-active-users", [...userMap.keys()]);

          // Handle user activity (update timestamp)
          socket.on("user-activity", () => {
            userMap.set(userId, {
              socketId: socket.id,
              lastActivity: Date.now(),
            });
          });

          // Handle disconnect with inactivity timeout
          const inactivityTimeout = 30 * 60 * 1000; // 30 minutes

          const disconnectIfInactive = () => {
            const userData = userMap.get(userId);
            if (
              userData &&
              Date.now() - userData.lastActivity > inactivityTimeout
            ) {
              userMap.delete(userId);
              socket.disconnect(true); // Disconnect the socket
              socket.broadcast.emit("set-active-users", [...userMap.keys()]);
            }
          };

          // Set up a periodic check for inactivity
          const inactivityCheckInterval = 5 * 60 * 1000; // Check every 5 minutes
          const inactivityCheckTimer = setInterval(
            disconnectIfInactive,
            inactivityCheckInterval
          );

          // Handle disconnect event
          socket.on("disconnect", () => {
            userMap.delete(userId);
            clearInterval(inactivityCheckTimer); // Clear the inactivity check timer
            socket.broadcast.emit("set-active-users", [...userMap.keys()]);
          });
        });
      }

      // Create a chat list
      messages.forEach((msg) => {
        // Get the other user that is not the current user
        const otherUser = msg.userIdFrom._id.equals(userId)
          ? msg.userIdTo
          : msg.userIdFrom;

        // Check if chat exists
        let chat = chatMap.get(otherUser._id);

        if (!chat) {
          // If not, create it
          chat = {
            user: otherUser,
            lastCreatedAt: msg.createdAt,
            lastMessage: msg.text,
            isRead: msg.read,
            userIdFrom: msg.userIdFrom._id,
          };
          // Add to map
          chatMap.set(otherUser._id.toString(), chat);
        } else {
          // If chat exists, just update last message
          chat.lastCreatedAt = msg.createdAt;
          chat.lastMessage = msg.text;
          chat.isRead = msg.read;
          chat.userIdFrom = msg.userIdFrom._id;
        }
      });

      // Get chats from map values
      const chatList = [...chatMap.values()];
      socket.emit("set-chatList", chatList);
      const subscriber = Notification.watch([
        {
          $match: {
            operationType: "insert",
            "fullDocument.userTo": userId,
          },
        },
      ]);
      subscriber.on("change", (change) => {
        socket.emit("notification", change.fullDocument);
      });
      const chatSubscriber = Message.watch([
        {
          $match: {
            operationType: "insert",
            $or: [
              { "fullDocument.userIdFrom": user._id },
              { "fullDocument.userIdTo": user._id },
            ],
          },
        },
      ]);

      chatSubscriber.on("change", async (change) => {
        // get the full chat:
        const fullChat = await Message.findOne({
          _id: change.fullDocument._id,
        })
          .populate("userIdFrom")
          .populate("userIdTo")
          .lean();
        socket.emit("message", fullChat);
      });
    });
  }
  res.end();
}
