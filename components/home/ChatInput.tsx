"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

import { profileData } from "@/constants/dummy";
import FillIcon from "../icons/FillIcon";

const ChatInput = () => {
  const [inputValue, setInputValue] = useState("");
  const [showPicker, setShowPicker] = useState(false);
  const { theme } = useTheme();

  // function handleEmojiSelect(emoji) {
  //   setInputValue((prev) => prev + emoji);
  // }
  // console.log(inputValue);

  useEffect(() => {
    function handleClickOutside(event: Event) {
      const targetEl = event.target as Element;
      if (showPicker && !targetEl.closest(".emoji-picker")) {
        setShowPicker(false);
      }
    }

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [showPicker]);

  return (
    <section className="flex gap-5 items-center">
      <div className="relative h-9 w-9 shrink-0 rounded-full bg-yellow30 md:h-11 md:w-11">
        <Image
          className="absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 md:h-10 md:w-10"
          src={profileData.imgUrl}
          alt="profile"
          width="80"
          height="80"
        />
      </div>
      <section className="relative flex flex-1 ">
        <div className="flex flex-1 gap-2.5 items-center">
          <div
            className={
              "relative flex items-center flex-1 justify-between rounded-3xl border border-secondary5 gap-[15px] bg-background px-[15px] py-2.5 text-contents dark:bg-dark3"
            }
          >
            <input
              className="md:display-regular flex-1 body-regular items-center justify-start rounded-lg bg-background text-secondary3 placeholder:text-secondary5 focus:outline-none dark:bg-dark3"
              placeholder="Say something..."
              // onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={() => setShowPicker((prev) => !prev)}>
              <FillIcon.Emoji className="h-6 w-6 shrink-0 md:h-8 md:w-8" />
            </button>
          </div>
          <button className="relative h-8 w-8 shrink-0 rounded-full text-secondary2 dark:text-background md:hidden">
            <FillIcon.Send className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 fill-secondary3" />
          </button>
        </div>
        {showPicker && (
          <div className="absolute bottom-[-440px] right-0 z-10">
            <Picker
              data={data}
              // onEmojiSelect={handleEmojiSelect}
              theme={theme === "dark" ? "dark" : "light"}
            />
          </div>
        )}
      </section>
    </section>
  );
};

export default ChatInput;
