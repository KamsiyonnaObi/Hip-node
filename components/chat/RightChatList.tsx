"use client";

import { IMessage } from "@/models/message.model";
import MyMessage from "./MyMessage";
import OtherUserMesssage from "./OtherUserMessage";
import { useSocketContext } from "@/providers/SocketProvider";

const RightChatList = ({ currentUserId }: { currentUserId: string }) => {
  const { messages, currentPartner } = useSocketContext();
  return (
    <section className="flex w-full flex-col">
      <div className="flex flex-1 flex-col gap-4 overflow-y-scroll bg-background px-8 pb-8 pt-[21px] dark:bg-dark4">
        {messages.map((message: IMessage) => {
          console.log("from", message.userIdFrom._id.toString());
          console.log("curr", currentUserId);
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
      </div>
    </section>
  );
};

export default RightChatList;
