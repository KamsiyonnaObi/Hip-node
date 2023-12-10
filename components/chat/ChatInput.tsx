"use client";

import React, { useState } from "react";
import FillIcon from "../icons/FillIcon";
import OutlineIcon from "../icons/OutlineIcon";
import { createMessage } from "@/utils/actions/message.action";

const ChatInput = ({ userIdTo }: { userIdTo: string }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = async () => {
    console.log(inputValue);
    if (inputValue.trim() === "") {
      return;
    }
    await createMessage({
      userIdTo,
      text: inputValue,
    });
    setInputValue("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  // const handleVoice = (transcript:string) => {
  //   setInputValue((prev) => prev + transcript);
  // };

  return (
    <section className="flex h-16 items-center gap-5">
      <section className="relative flex flex-1 ">
        <div className="flex flex-1 items-center gap-2.5">
          <div
            className={
              "relative flex flex-1 flex-wrap items-center justify-between gap-[15px] rounded-2xl border border-secondary5 bg-secondary6 px-[15px] py-2.5 text-contents dark:border-secondary2 dark:bg-secondary2 md:w-5"
            }
          >
            <div className="flex items-center">
              <button>
                <OutlineIcon.LinkIcon className="w-6- h-6 stroke-secondary4" />
              </button>
            </div>
            <input
              className="md:display-regular caption-regular h-[18px] flex-1 resize-none items-center justify-start bg-secondary6 text-secondary4 placeholder:text-secondary4 focus:outline-none dark:bg-secondary2 md:h-[22px]"
              placeholder="Type here your message..."
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
            />

            <div className=" flex items-center">
              <button>
                <OutlineIcon.Voice className="h-6 w-6 fill-none stroke-secondary4" />
              </button>
            </div>
          </div>
          <button
            className="relative h-8 w-8 shrink-0 rounded-full text-secondary2 dark:text-background"
            onClick={handleSubmit}
          >
            <FillIcon.Send className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 fill-secondary2 dark:fill-background2" />
          </button>
        </div>
      </section>
    </section>
  );
};

export default ChatInput;
