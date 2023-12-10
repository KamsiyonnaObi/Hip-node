"use client";

import { IMessage } from "@/models/message.model";
import MyMessage from "./MyMessage";
import OtherUserMesssage from "./OtherUserMessage";
// import { useSocketContext } from "@/providers/SocketProvider";

const RightChatList = ({ messages }: { messages: string }) => {
  // const { messages } = useSocketContext();

  // All message properties are string
  const objMessages = JSON.parse(messages) as IMessage[];
  const currentUserId = "6546f04496a572e837bd18e3";

  // Delete later
  // console.log("objMessages:", objMessages);
  // console.log("type of createdAt:", typeof objMessages[0].createdAt);

  return (
    <section className="flex w-full flex-col">
      <div className="flex flex-1 flex-col gap-4 overflow-y-scroll bg-background px-8 pb-8 pt-[21px] dark:bg-dark4">
        {objMessages.map((message: IMessage) => {
          if (message.userIdFrom._id === currentUserId.toString()) {
            return (
              <div className="flex self-end" key={message._id}>
                <MyMessage createdAt={message.createdAt} text={message.text} />
              </div>
            );
          } else {
            return (
              <div className="flex self-start" key={message._id}>
                <OtherUserMesssage
                  currentPartner={JSON.stringify(message.userIdFrom)}
                  createdAt={message.createdAt}
                  text={message.text}
                />
              </div>
            );
          }
        })}
      </div>
    </section>
  );
};

export default RightChatList;
