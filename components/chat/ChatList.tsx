"use client";

import { IUser } from "@/types/mongoose";
import ChatCard from "./ChatCard";
import { useSocketContext } from "@/providers/SocketProvider";
import { updateReadBy } from "@/utils/actions/message.action";

const ChatList = ({
  onClick,
  searchQuery,
}: {
  onClick?: (e: boolean) => void;
  searchQuery?: string;
}) => {
  const { chatList, setCurrentPartner } = useSocketContext();
  const handleChatClick = async (partner: IUser) => {
    const partnerId = partner._id.toString();
    setCurrentPartner(partner);
    await updateReadBy({ partnerId });
    onClick && onClick(true);
  };

  const filteredChatList = chatList.filter((chat) => {
    const userFullName = chat?.user?.fullName?.toLowerCase();
    const userName = chat?.user?.username?.toLowerCase();
    const searchLower = searchQuery?.toLowerCase();

    if (!searchLower) {
      return true;
    }

    if (!chat?.user) {
      return false;
    }

    return (
      (searchLower && userFullName?.includes(searchLower)) ||
      (searchLower && userName?.includes(searchLower))
    );
  });

  return (
    <section className="w-full max-sm:h-screen">
      {filteredChatList.map((chat) => (
        <ChatCard
          key={chat.user._id.toString()}
          user={JSON.stringify(chat.user)}
          lastCreatedAt={chat.lastCreatedAt}
          lastMessage={chat.lastMessage}
          isRead={chat.isRead}
          onClick={() => handleChatClick(chat.user)}
          userIdFrom={chat?.userIdFrom?.toString()}
        />
      ))}
    </section>
  );
};

export default ChatList;
