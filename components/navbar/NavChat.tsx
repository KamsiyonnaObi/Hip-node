import React from "react";
import { ImageFallback as Image } from "@/components/shared/ImageFallback";

interface Props {
  avatar: string;
  name: string;
  sentAt: string;
  message: string;
  count: number;
}

const NavChat = ({ avatar, name, sentAt, message, count }: Props) => {
  return (
    <div className="flex flex-row gap-2.5">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary6 dark:bg-background">
        <Image src={avatar} alt="avatar" width={28} height={32} />
      </div>
      <div className="flex flex-row items-center gap-[50px]">
        <div className="flex w-[178px] flex-col">
          <p className="display-semibold">
            {name}
            <span className="caption-regular text-secondary3">{sentAt}</span>
          </p>
          <p className="caption-regular text-secondary3">{message}</p>
        </div>
        {count > 0 && (
          <div className="flex h-[18px] w-[18px] items-center justify-center gap-2.5 rounded-full bg-primary p-[2px] text-background">
            <p className="body-semibold">{count}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavChat;
