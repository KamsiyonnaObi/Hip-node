import Link from "next/link";

import { useSocketContext } from "@/providers/SocketProvider";
import { updateReadBy } from "@/utils/actions/message.action";
import { IUser } from "@/types/mongoose";
import NavChatCard from "./NavChatCard";

const MessageList = ({
  onClick,
  toggleMessage,
}: {
  onClick?: (e: boolean) => void;
  toggleMessage: () => void;
}) => {
  const { chatList, setCurrentPartner, setIsChatPopUpOpen } =
    useSocketContext();
  const handleChatClick = async (partner: IUser) => {
    const partnerId = partner._id.toString();
    setCurrentPartner(partner);
    await updateReadBy({ partnerId });
    onClick && onClick(true);
    setIsChatPopUpOpen(true);
  };
  return (
    <>
      <div className="relative w-5 translate-x-[50%] overflow-hidden max-md:hidden">
        <div className=" h-3 w-3 origin-bottom-left rotate-45 rounded-md bg-background dark:bg-dark4  "></div>
      </div>
      <article className="fixed flex h-fit w-[336px] flex-col rounded-[8px] bg-background dark:bg-dark4 max-md:left-[50%] max-md:top-[3.5rem] max-md:translate-x-[-50%] md:translate-x-[-80%] ">
        <div className="mt-2.5 gap-2.5 rounded-[8px] bg-background p-5 text-secondary2 dark:bg-dark4 dark:text-background2">
          <div className="flex flex-col gap-5">
            <ul className="flex flex-col gap-5">
              <li className="h3-semibold flex justify-start">Messages</li>
              {chatList.slice(0, 5).map((chat) => (
                <NavChatCard
                  key={chat.user._id.toString()}
                  user={JSON.stringify(chat.user)}
                  lastCreatedAt={chat.lastCreatedAt}
                  lastMessage={chat.lastMessage}
                  isRead={chat.isRead}
                  onClick={() => {
                    handleChatClick(chat.user);
                    toggleMessage();
                  }}
                  userIdFrom={chat?.userIdFrom?.toString()}
                />
              ))}
            </ul>
            <Link
              className="body-semibold flex justify-center text-blue"
              href="/chat"
            >
              See all in Messenger
            </Link>
          </div>
        </div>
      </article>
    </>
  );
};

export default MessageList;
