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
          };
          // Add to map
          chatMap.set(otherUser._id.toString(), chat);
        } else {
          // If chat exists, just update last message
          chat.lastCreatedAt = msg.createdAt;
          chat.lastMessage = msg.text;
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
    });
  }
  res.end();
}
