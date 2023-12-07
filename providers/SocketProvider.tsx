"use client";
import React, { createContext, useContext } from "react";
import useSockets from "@/hooks/useSockets";

import { INotif } from "@/models/notification.model";

interface SocketContextType {
  notifications: INotif[];
  isConnected: boolean;
}

const SocketContext = createContext<SocketContextType>({} as SocketContextType);

export function SocketProvider({ children }: { children: React.ReactNode }) {
  const { notifications, isConnected } = useSockets();

  return (
    <SocketContext.Provider value={{ isConnected, notifications }}>
      {children}
    </SocketContext.Provider>
  );
}

export function useSocketContext() {
  return useContext(SocketContext);
}
