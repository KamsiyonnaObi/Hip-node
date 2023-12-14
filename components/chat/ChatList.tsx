"use client";

import { IUser } from "@/types/mongoose";
import ChatCard from "./ChatCard";
import { useSocketContext } from "@/providers/SocketProvider";

const ChatList = () => {
  const { chatList, setCurrentPartner } = useSocketContext();
  const handleChatClick = (partner: IUser) => {
    setCurrentPartner(partner);
  };

  return (
    <section>
      {chatList.map((chat) => (
        <ChatCard
          key={chat.user._id.toString()}
          user={JSON.stringify(chat.user)}
          lastCreatedAt={chat.lastCreatedAt}
          lastMessage={chat.lastMessage}
          onClick={() => handleChatClick(chat.user)}
        />
      ))}
    </section>
  );
};

export default ChatList;
