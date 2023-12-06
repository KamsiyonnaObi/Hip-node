"use client";

import { ImageFallback as Image } from "@/components/shared/ImageFallback";
import OutlineIcon from "@/components/icons/OutlineIcon";
import OtherUserMesssage from "./OtherUserMessage";
import MyMessage from "./MyMessage";
import ChatInput from "./ChatInput";

const ChatPopup = () => {
  return (
    <main className="flex h-[400px] w-[335px] flex-col gap-[15px] rounded-2xl bg-background dark:bg-dark4 md:h-[450px] md:w-[450px]">
      <section className="flex w-full items-center justify-between px-5 pt-5 md:pt-[16px]">
        <div className="flex gap-2.5">
          <Image
            src="/ExampleAvatar2.png"
            alt="avatar"
            width={20}
            height={20}
            className="relative h-7 w-7 rounded-full md:h-10 md:w-10"
          />
          <div className="flex flex-col items-start justify-start">
            <h3 className="md:h3-semibold body-semibold text-secondary2 dark:text-background2">
              Jonathan Swift
            </h3>
            <p className="text-xs-semibold text-green">Online</p>
          </div>
        </div>
        <div className="flex gap-5">
          <OutlineIcon.Expand className="h-5 w-5 fill-secondary2 dark:fill-background2" />
          <OutlineIcon.DownArrow2 className="h-5 w-5 stroke-secondary2 dark:stroke-background2" />
        </div>
      </section>
      <hr className="mx-5 border-t border-t-secondary6 dark:border-t-secondary2" />
      <section className="flex h-full flex-col gap-5 p-5">
        <div className="flex-start">
          <OtherUserMesssage />
        </div>
        <div className="flex-end">
          <MyMessage />
        </div>
        <div className="mt-auto">
          <ChatInput />
        </div>
      </section>
    </main>
  );
};

export default ChatPopup;
