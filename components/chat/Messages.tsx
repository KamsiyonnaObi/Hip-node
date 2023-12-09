import React from "react";
import { ImageFallback as Image } from "@/components/shared/ImageFallback";
import OutlineIcon from "../icons/OutlineIcon";
import { Input } from "../form/Input";

interface Props {
  avatar: string;
  name: string;
  isOnline: boolean;
  messages: Array<{ message: string; sent: boolean; yourAvatar: string }>;
}

const MessagePopup = ({ avatar, name, isOnline, messages }: Props) => {
  return (
    <article className="flex h-[402px] w-[335px] flex-col rounded-[16px] bg-background dark:bg-dark4 md:h-[450px] md:w-[450px]">
      <section className="mx-5 mt-5 flex flex-col gap-[15px]">
        <div className="flex flex-row justify-between">
          <section className="flex flex-row gap-2.5">
            <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-secondary6 md:h-10 md:w-10">
              <Image
                src={avatar}
                alt="avatar"
                width={20}
                height={20}
                className="h-6 w-6 md:h-8 md:w-8"
              />
            </div>
            <div className="flex flex-col">
              <p className="body-semibold md:h3-semibold dark:text-background2">
                {name}
              </p>
              {isOnline ? (
                <p className="text-sm-semibold text-green">Online</p>
              ) : (
                <p className="text-sm-semibold text-red">Offline</p>
              )}
            </div>
          </section>
          <section className="flex flex-row gap-5">
            <OutlineIcon.Expand className="dark:stroke-background2" />
            <OutlineIcon.DownArrow className="fill-background stroke-dark4 dark:fill-dark4 dark:stroke-background2" />
          </section>
        </div>
        <hr className=" border-secondary6 dark:border-secondary2" />
      </section>
      {messages.map((message, index) =>
        message.sent ? (
          <div key={index} className="mx-5 mt-5 flex flex-row gap-2.5">
            <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-secondary6 md:h-10 md:w-10">
              <Image
                src={avatar}
                alt="avatar"
                width={20}
                height={20}
                className="h-6 w-6 md:h-8 md:w-8"
              />
            </div>
            <div className="body-semibold md:display-semibold  gap-2.5 rounded-[8px] rounded-tl-[2px] bg-red10 p-2.5 text-red80">
              {message.message}
            </div>
          </div>
        ) : (
          <div
            key={index}
            className="mx-5 mt-5 flex flex-row justify-end gap-2.5"
          >
            <div className="body-semibold md:display-semibold gap-2.5 rounded-[8px] rounded-tr-[2px] bg-red80 p-2.5 text-background">
              {message.message}
            </div>
            <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-secondary6 md:h-10 md:w-10">
              <Image
                src={message.yourAvatar}
                alt="avatar"
                width={20}
                height={20}
                className="h-6 w-6 md:h-8 md:w-8"
              />
            </div>
          </div>
        )
      )}
      <section className="mx-5 mt-5 flex flex-row gap-5">
        <Input
          divClassName="flex flex-row rounded-[10px] border-[1px] border-secondary5 dark:border-secondary2 p-2.5 md:rounded-[16px] md:p-[14px]"
          className="caption-regular md:body-regular dark:bg-dark4"
          placeholder="Type here your message..."
          frontChildren={
            <div className="px-1">
              <OutlineIcon.LinkIcon className="stroke-secondary4" />
            </div>
          }
        >
          <div className="ml-10 flex justify-end px-1 md:ml-[130px]">
            <OutlineIcon.Voice className="fill-background stroke-secondary4 dark:fill-dark4" />
          </div>
        </Input>
        <div className="flex items-center justify-center">
          <OutlineIcon.Send className="dark:fill-background2 dark:stroke-background2" />
        </div>
      </section>
    </article>
  );
};

export default MessagePopup;
