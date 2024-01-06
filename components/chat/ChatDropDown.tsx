"use client";

import React, { useState } from "react";

import OutlineIcon from "@/components/icons/OutlineIcon";
import TopCard from "./TopCard";
import RightChatList from "./RightChatList";
import ChatList from "./ChatList";
import ChatInput from "./ChatInput";
import SearchInput from "./SearchInput";
import SearchResults from "./SearchResults";
import { useSocketContext } from "@/providers/SocketProvider";
import { IUser } from "@/types/mongoose";
import { useOutsideClick } from "@/hooks/useOutsideClick";

const ChatDropDown = ({
  currentUserId,
  searchQuery,
  setSearchQuery,
}: {
  currentUserId: string;
  searchQuery: string;
  setSearchQuery: (e: string) => void;
}) => {
  const { setCurrentPartner } = useSocketContext();
  const { isOpen: searchIsOpen, toggleOpen: toggle, ref } = useOutsideClick();
  const [isOpen, setIsOpen] = useState(false);
  const [showResults, setShowResults] = useState(false);

  // set chat partner to display in the chatlist
  const handleUserClick = (user: IUser) => {
    setCurrentPartner(user);
    setIsOpen((prev) => !prev);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setShowResults(true);
    if (!searchIsOpen) {
      toggle();
    }
  };

  return (
    <section>
      {!isOpen && (
        <div className="md:hidden">
          <div className="flex items-center justify-start gap-2 p-6">
            <h2 className="h2-bold text-secondary2 dark:text-background">
              Messages
            </h2>
            <div className="flex h-5 w-6 items-center justify-center rounded-full bg-red10">
              <p className="caption-regular text-red90">2</p>
            </div>
          </div>

          <div className="px-4 pb-3" ref={ref}>
            <SearchInput onSearch={handleSearch} />
            {showResults && searchQuery && searchIsOpen && (
              <SearchResults
                searchQuery={searchQuery}
                onUserClick={handleUserClick}
              />
            )}
          </div>
        </div>
      )}
      <div className="max-md:hidden">
        <div className="flex items-center justify-start gap-2 p-6">
          <h2 className="h2-bold text-secondary2 dark:text-background">
            Messages
          </h2>
          <div className="flex h-5 w-6 items-center justify-center rounded-full bg-red10">
            <p className="caption-regular text-red90">2</p>
          </div>
        </div>

        <div className="px-4 pb-3" ref={ref}>
          <SearchInput onSearch={handleSearch} />
          {showResults && searchQuery && searchIsOpen && (
            <SearchResults
              searchQuery={searchQuery}
              onUserClick={handleUserClick}
            />
          )}
        </div>
      </div>
      <div className="w-full">
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="md:hidden"
        >
          {isOpen && (
            <div className="absolute ml-5 mr-4 mt-[20px] h-7 w-7 items-center justify-center rounded-lg bg-background p-2 dark:bg-dark4 md:hidden">
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
            <ChatList onClick={setIsOpen} />
          </div>
        )}
      </div>
    </section>
  );
};

export default ChatDropDown;
