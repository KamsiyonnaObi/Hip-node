"use client";

import { useState } from "react";
import ChatDropDown from "./ChatDropDown";
import ChatList from "./ChatList";

const LeftChatList = ({ currentUserId }: { currentUserId: string }) => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <section className="flex w-full flex-col md:col-span-3">
      <section className="">
        {currentUserId && (
          <ChatDropDown
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            currentUserId={currentUserId?.toString()}
          />
        )}
        <div className="hidden md:flex">{currentUserId && <ChatList />}</div>
      </section>
    </section>
  );
};

export default LeftChatList;
