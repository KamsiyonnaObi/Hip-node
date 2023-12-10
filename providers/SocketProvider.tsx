"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import useSockets from "@/hooks/useSockets";

import { INotif } from "@/models/notification.model";
import { IChat, IMessage } from "@/models/message.model";
import { IUser } from "@/types/mongoose";

interface SocketContextType {
  notifications: INotif[];
  messages: IMessage[];
  chatList: IChat[];
  users: IUser[];
  isConnected: boolean;
  currentPartnerId: string;
  setCurrentPartnerId: any;
}

const SocketContext = createContext<SocketContextType>({} as SocketContextType);

export function SocketProvider({ children }: { children: React.ReactNode }) {
  const { notifications, messages, chatList, users, isConnected } =
    useSockets();
  const [currentPartnerId, setCurrentPartnerId] = useState("");
  useEffect(() => {
    // update chatlist
    console.log("currentPartnerId", currentPartnerId);
    console.log("messages:", messages);
  }, [currentPartnerId, messages]);

  return (
    <SocketContext.Provider
      value={{
        isConnected,
        notifications,
        messages,
        chatList,
        users,
        currentPartnerId,
        setCurrentPartnerId,
      }}
    >
      {children}
    </SocketContext.Provider>
  );
}

export function useSocketContext() {
  return useContext(SocketContext);
}
