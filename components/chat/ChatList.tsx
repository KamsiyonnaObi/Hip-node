"use client";

import ChatCard from "./ChatCard";
import { useSocketContext } from "@/providers/SocketProvider";

const ChatList = () => {
  const { chatList, setCurrentPartnerId } = useSocketContext();
  setCurrentPartnerId("aaa");
  return (
    <section>
      {chatList.map((chat) => (
        <ChatCard
          key={chat.user._id.toString()}
          user={JSON.stringify(chat.user)}
          lastMessage={chat.lastMessage}
        />
      ))}
    </section>
  );
};

export default ChatList;
