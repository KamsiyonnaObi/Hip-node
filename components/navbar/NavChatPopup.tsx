import ChatInput from "../chat/ChatInput";
import NavChatList from "./NavChatList";
import NavTopCard from "../home/NavTopCard";
import { useState } from "react";
import clsx from "clsx";

const NavChatPopup = ({ currentUserId }: { currentUserId: string }) => {
  const [isNavChatListOpen, setIsNavChatListOpen] = useState(true);
  const handleDownArrowClick = () => {
    setIsNavChatListOpen(false);
  };
  const handleExpandClick = () => {
    setIsNavChatListOpen(true);
  };
  return (
    <main
      className={clsx(
        "fixed bottom-5 right-5 z-10 flex h-96 w-80 flex-col rounded-2xl bg-background px-5 shadow-lg dark:bg-dark4 md:bottom-[30px] md:right-10 md:w-96",
        {
          "h-96": isNavChatListOpen,
          "h-[90px]": !isNavChatListOpen,
        }
      )}
    >
      <div className="w-full pt-5 md:pt-4">
        <NavTopCard
          onDownArrowClick={handleDownArrowClick}
          onExpandClick={handleExpandClick}
          isNavChatListOpen={isNavChatListOpen}
        />
      </div>
      {isNavChatListOpen && (
        <>
          <NavChatList currentUserId={currentUserId || ""} />
          <div className="pb-5">
            <ChatInput />
          </div>
        </>
      )}
    </main>
  );
};

export default NavChatPopup;
