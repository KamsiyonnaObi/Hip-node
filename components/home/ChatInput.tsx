import Image from "next/image";

import { profileData } from "@/constants/dummy";
import FillIcon from "../icons/FillIcon";

const ChatInput = () => {
  return (
    <section className="flex gap-5">
      <div className="relative h-9 w-9 rounded-full bg-yellow30 md:h-11 md:w-11">
        <Image
          className="absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 md:h-10 md:w-10"
          src={profileData.imgUrl}
          alt="profile"
          width="80"
          height="80"
        />
      </div>
      <div
        className={
          "flex grow items-center justify-between rounded-3xl border border-secondary5 bg-background px-[15px] py-2.5 text-contents dark:bg-dark3"
        }
      >
        <input
          className="md:display-regular body-regular w-full items-center justify-start rounded-lg bg-background text-secondary3 placeholder:text-secondary5 focus:outline-none dark:bg-dark3"
          placeholder="Say something..."
        />
        <FillIcon.Emoji className="h-6 w-6 shrink-0 md:h-8 md:w-8" />
      </div>
    </section>
  );
};

export default ChatInput;
