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
    // Global State

    console.log("Socket is initializing");
    const io = new Server(res.socket.server, { addTrailingSlash: false });
    res.socket.server.io = io;

    const userMap = new Map();

    // User State
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

      socket.emit("set-messages", messages);

      // Active Users
      userMap.set(userId, [...userMap.keys()]);

      // Emit initial active users list
      socket.emit("set-active-users", [...userMap.keys()]);

      const intervalId = setInterval(() => {
        const currentList = [...userMap.keys()];
        const lastList = userMap.get(userId) || [];
        if (
          currentList.length !== lastList.length ||
          currentList.some((userId) => !lastList.includes(userId))
        ) {
          socket.emit("set-active-users", currentList);
          userMap.set(userId, currentList);
        }
      }, 1000);

      // Handle disconnect event
      socket.on("disconnect", () => {
        userMap.delete(userId);
        clearInterval(intervalId);
      });

      // Create a chat list
      const chatMap = new Map();
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
