"use client";

import { useState } from "react";
import ChatDropDown from "./ChatDropDown";
import ChatList from "./ChatList";
import SearchInput from "./SearchInput";

const LeftChatList = ({ currentUserId }: { currentUserId: string }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };
  return (
    <section className="flex w-full flex-col md:col-span-3">
      <div className="flex items-center justify-start gap-2 p-6">
        <h2 className="h2-bold text-secondary2 dark:text-background">
          Messages
        </h2>
        <div className="flex h-5 w-6 items-center justify-center rounded-full bg-red10">
          <p className="caption-regular text-red90">2</p>
        </div>
      </div>
      <div className="px-4 pb-3">
        <SearchInput onSearch={handleSearch} />
      </div>
      <section className="">
        {currentUserId && (
          <ChatDropDown
            currentUserId={currentUserId?.toString()}
            searchQuery={searchQuery}
          />
        )}
        <div className="hidden md:flex">
          {currentUserId && <ChatList searchQuery={searchQuery} />}
        </div>
      </section>
    </section>
  );
};

export default LeftChatList;
