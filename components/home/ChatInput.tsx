"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

import { profileData } from "@/constants/dummy";
import FillIcon from "../icons/FillIcon";
// import { createComment } from "@/utils/actions/clientComment.action";

import { createComment } from "@/utils/actions/comment.action";
import { addComments } from "@/utils/actions/post.action";

const ChatInput = ({
  postId,
  commentId,
}: {
  postId: string;
  commentId: string | null;
}) => {
  const [inputValue, setInputValue] = useState("");
  const [showPicker, setShowPicker] = useState(false);
  const { theme } = useTheme();

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

  const handleSubmit = async (e) => {
    console.log(inputValue);
    if (e.key === "Enter") {
      e.preventDefault();
      await addComments({
        text: inputValue,
        postId,
        commentId,
      });
      setInputValue("");

      console.log("Comment created");
    }
  };

  return (
    <section className="flex items-center gap-5">
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
        <div className="flex flex-1 items-center gap-2.5">
          <div
            className={
              "relative flex flex-1 flex-wrap items-center justify-between gap-[15px] rounded-3xl border border-secondary5 bg-background px-[15px] py-2.5 text-contents dark:bg-dark3 md:w-5"
            }
          >
            <textarea
              className="md:display-regular body-regular h-[22px] flex-1 resize-none items-center justify-start rounded-lg bg-background text-secondary3 placeholder:text-secondary5 focus:outline-none dark:bg-dark3 md:h-[24px]"
              placeholder="Say something..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleSubmit}
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
              onEmojiSelect={(emoji: any) =>
                setInputValue((prev) => prev + emoji.native)
              }
              theme={theme === "dark" ? "dark" : "light"}
            />
          </div>
        )}
      </section>
    </section>
  );
};

export default ChatInput;
