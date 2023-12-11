"use client";

import io, { Socket } from "socket.io-client";
import { useEffect, useState } from "react";

import { INotif } from "@/models/notification.model";

const useSockets = () => {
  const [socket, setSocket] = useState<Socket>();
  const [notifications, setNotifications] = useState<INotif[]>([]);
  const [isConnected, setIsConnected] = useState<boolean>(false);

  useEffect(() => {
    const socketInitializer = async () => {
      await fetch("/api/socket_io");
      const socketConnection = io();
      setSocket(socketConnection);
    };
    socketInitializer();
  }, []);

  useEffect(() => {
    if (!socket) return;
    socket.on("connect", () => {
      setIsConnected(true);
    });
    socket.on("disconnect", () => {
      setIsConnected(false);
    });
    socket.on("set-notifications", (message: INotif[]) => {
      setNotifications(message);
    });
    socket.on("notification", (message: INotif) => {
      setNotifications((prev) => [message, ...prev]);
    });
  }, [socket]);

  return {
    isConnected,
    notifications,
  };
};

export default useSockets;
