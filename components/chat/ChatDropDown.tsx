"use client";

import React, { useState } from "react";

import OutlineIcon from "@/components/icons/OutlineIcon";
import TopCard from "./TopCard";
import RightChatList from "./RightChatList";
import ChatList from "./ChatList";
import ChatInput from "./ChatInput";

const ChatDropDown = ({
  currentUserId,
  searchQuery,
}: {
  currentUserId: string;
  searchQuery: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full">
      <button onClick={() => setIsOpen((prev) => !prev)} className="md:hidden">
        {isOpen && (
          <div className="relative ml-5 mr-4 h-7 w-7 items-center justify-center rounded-lg bg-background p-2 dark:bg-dark4 md:hidden">
            <OutlineIcon.Arrow className="absolute left-1/2 top-1/2 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rotate-180 stroke-secondary4" />
          </div>
        )}
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="md:hidden">
          <TopCard />
          <RightChatList currentUserId={currentUserId} />
          <div className="bg-background px-5 pb-9 dark:bg-dark2 ">
            <ChatInput />
          </div>
        </div>
      )}
      {!isOpen && (
        <div className="md:hidden">
          <ChatList
            onClick={setIsOpen}
            currentUserId={currentUserId?.toString()}
            searchQuery={searchQuery}
          />
        </div>
      )}
    </div>
  );
};

export default ChatDropDown;
