"use client";

import React, { useState } from "react";
import { useTheme } from "next-themes";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

import { ImageFallback as Image } from "@/components/shared/ImageFallback";
import FillIcon from "../icons/FillIcon";
import { addComments } from "@/utils/actions/post.action";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import { createNotification } from "@/utils/actions/notification.action";
import { usePathname } from "next/navigation";
import { toast } from "../ui/use-toast";

const CommentInput = ({
  postId,
  commentId,
  parentId,
  currentUserImage,
  userId,
  content,
  setShowInput = () => {},
}: {
  postId: string;
  commentId?: string;
  parentId?: string;
  currentUserImage?: string;
  userId?: string;
  content: string;
  setShowInput?: (state: boolean) => void;
}) => {
  const [inputValue, setInputValue] = useState("");
  const { theme } = useTheme();

  const { ref, isOpen, toggleOpen } = useOutsideClick();

  const pathname = usePathname();

  const handleSubmit = async () => {
    if (inputValue.trim() === "") {
      return;
    }
    await addComments({
      text: inputValue,
      postId,
      commentId,
      parentId,
    });
    await createNotification({
      comment: inputValue,
      title: content,
      type: "comment",
      userTo: userId || "unknown",
      link: pathname || "/",
    });

    setInputValue("");
    setTimeout(() => setShowInput(false), 500);
    return toast({
      title: "Comment Added",
      variant: "default",
    });
  };
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const handleEmoji = (emoji: any) => {
    setInputValue((prev) => prev + emoji.native);
    toggleOpen();
  };

  return (
    <section className="flex items-center gap-5">
      <div className="relative h-9 w-9 shrink-0 rounded-full bg-yellow30 md:h-11 md:w-11">
        <Image
          className="absolute left-1/2 top-1/2 h-9 w-9 -translate-x-1/2 -translate-y-1/2 rounded-full md:h-11 md:w-11"
          src={currentUserImage}
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
              onKeyDown={handleKeyDown}
            />

            <div ref={ref} className=" flex items-center">
              <button onClick={toggleOpen}>
                <FillIcon.Emoji className="h-6 w-6 shrink-0 md:h-8 md:w-8" />
              </button>
              <div className="absolute bottom-[-440px] right-0 z-10">
                {isOpen && (
                  <Picker
                    data={data}
                    onEmojiSelect={handleEmoji}
                    theme={theme === "dark" ? "dark" : "light"}
                  />
                )}
              </div>
            </div>
          </div>
          <button
            className="relative h-8 w-8 shrink-0 rounded-full text-secondary2 dark:text-background md:hidden"
            onClick={handleSubmit}
          >
            <FillIcon.Send className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 fill-secondary3" />
          </button>
        </div>
      </section>
    </section>
  );
};

export default CommentInput;
