"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import useSockets from "@/hooks/useSockets";

import { INotif } from "@/models/notification.model";
import { IChatList, IMessage } from "@/models/message.model";
import { IUser } from "@/types/mongoose";

interface SocketContextType {
  notifications: INotif[];
  messages: IMessage[];
  chatList: IChatList[];
  users: IUser[];
  isConnected: boolean;
  currentPartner: IUser | null;
  setCurrentPartner: any;
}

const SocketContext = createContext<SocketContextType>({} as SocketContextType);

export function SocketProvider({ children }: { children: React.ReactNode }) {
  const { notifications, messages, chatList, users, isConnected } =
    useSockets();
  const [currentPartner, setCurrentPartner] = useState<IUser | null>(null);

  useEffect(() => {
    if (chatList.length > 0) {
      setCurrentPartner(chatList[0].user);
    }
  }, [chatList]);

  return (
    <SocketContext.Provider
      value={{
        isConnected,
        notifications,
        messages,
        chatList,
        users,
        currentPartner,
        setCurrentPartner,
      }}
    >
      {children}
    </SocketContext.Provider>
  );
}

export function useSocketContext() {
  return useContext(SocketContext);
}
