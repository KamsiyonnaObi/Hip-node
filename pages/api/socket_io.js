import { Server } from "socket.io";
import { getSession } from "next-auth/react";
import Notification from "@/models/notification.model";
import { getAllNotification } from "@/utils/actions/notification.action";
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
