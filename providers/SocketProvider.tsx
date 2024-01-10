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
  activeUserList: string[];
  isChatPopUpOpen: boolean;
  setIsChatPopUpOpen: any;
}

const SocketContext = createContext<SocketContextType>({} as SocketContextType);

export function SocketProvider({ children }: { children: React.ReactNode }) {
  const {
    notifications,
    messages,
    chatList,
    users,
    isConnected,
    activeUserList,
  } = useSockets();
  const [currentPartner, setCurrentPartner] = useState<IUser | null>(null);
  const [isChatPopUpOpen, setIsChatPopUpOpen] = useState<boolean>(false);

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
        activeUserList,
        isChatPopUpOpen,
        setIsChatPopUpOpen,
      }}
    >
      {children}
    </SocketContext.Provider>
  );
}

export function useSocketContext() {
  return useContext(SocketContext);
}
