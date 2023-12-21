"use client";

import io, { Socket } from "socket.io-client";
import { useEffect, useState } from "react";

import { INotif } from "@/models/notification.model";
import { IChatList, IMessage } from "@/models/message.model";
import { IUser } from "@/types/mongoose";

const useSockets = () => {
  const [socket, setSocket] = useState<Socket>();
  const [notifications, setNotifications] = useState<INotif[]>([]);
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [chatList, setChatList] = useState<IChatList[]>([]);
  const [users, setUsers] = useState<IUser[]>([]);
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const [activeUserList, setActiveUserList] = useState<string[]>([]);

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
    socket.on("set-messages", (message: IMessage[]) => {
      setMessages(message);
    });
    socket.on("message", (message: IMessage) => {
      setMessages((prev) => [...prev, message]);
    });
    socket.on("set-users", (message: IUser[]) => {
      setUsers(message);
    });
    socket.on("users", (message: IUser) => {
      setUsers((prev) => [...prev, message]);
    });
    socket.on("set-chatList", (message: IChatList[]) => {
      setChatList(message);
    });
    socket.on("chatList", (message: IChatList) => {
      setChatList((prev) => [...prev, message]);
    });
    socket.on("set-active-users", (message: string[]) => {
      setActiveUserList(message);
    });
  }, [socket]);

  return {
    isConnected,
    notifications,
    messages,
    chatList,
    users,
    activeUserList,
  };
};

export default useSockets;
