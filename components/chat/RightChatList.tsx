"use client";
import { useRef, useState, useEffect } from "react";

import { IMessage } from "@/models/message.model";
import MyMessage from "./MyMessage";
import OtherUserMesssage from "./OtherUserMessage";
import { useSocketContext } from "@/providers/SocketProvider";
import { IUser } from "@/types/mongoose";

const RightChatList = ({ currentUserId }: { currentUserId: string }) => {
  const { messages, currentPartner } = useSocketContext();
  const [partner, setPartner] = useState<IUser | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (partner !== currentPartner) {
      setPartner(currentPartner);
      messagesEndRef.current?.scrollIntoView({ behavior: "instant" });
    }
  }, [currentPartner, partner]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "instant" });
  }, [messages]);

  return (
    <section className="flex h-[350px] flex-col md:h-[calc(100vh-170px)] md:w-full">
      <div className="flex flex-1 flex-col gap-4 overflow-y-scroll bg-background px-8 pb-8 pt-[21px] dark:bg-dark2 md:pb-[130px] md:dark:bg-dark4">
        {messages.map((message: IMessage) => {
          if (
            message.userIdFrom._id.toString() === currentPartner?._id.toString()
          ) {
            return (
              <div className="flex self-start" key={message._id}>
                <OtherUserMesssage
                  currentPartner={JSON.stringify(message.userIdFrom)}
                  createdAt={message.createdAt}
                  text={message.text}
                />
              </div>
            );
          } else {
            if (
              message.userIdTo._id.toString() ===
                currentPartner?._id.toString() &&
              message.userIdFrom._id.toString() === currentUserId
            ) {
              return (
                <div className="flex self-end" key={message._id}>
                  <MyMessage
                    createdAt={message.createdAt}
                    text={message.text}
                  />
                </div>
              );
            }
          }
          return null;
        })}
        <div ref={messagesEndRef} />
      </div>
    </section>
  );
};

export default RightChatList;
