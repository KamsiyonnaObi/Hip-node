"use client";
import { formatDistanceToNow } from "date-fns";
import { ImageFallback as Image } from "@/components/shared/ImageFallback";
import { useSocketContext } from "@/providers/SocketProvider";

const ChatCard = ({
  user,
  lastCreatedAt,
  lastMessage,
  isRead,
  onClick,
  userIdFrom,
}: {
  user: string;
  lastCreatedAt?: Date;
  lastMessage: string;
  isRead: boolean;
  onClick: () => void;
  userIdFrom: string;
}) => {
  const { activeUserList } = useSocketContext();
  const userObj = JSON.parse(user);
  const dateCreatedAt = lastCreatedAt?.toString()
    ? formatDistanceToNow(new Date(lastCreatedAt?.toString()), {
        addSuffix: true,
      })
    : "";
  return (
    <main
      className="border-b-solid flex w-full cursor-pointer flex-col gap-3 border-b border-b-secondary6 bg-background p-4 dark:border-b-dark4 dark:bg-dark2"
      onClick={onClick}
    >
      <section className="flex justify-between">
        <div className="flex items-center gap-3">
          {!isRead && userIdFrom === userObj._id && (
            <span className="h-2 w-2 rounded bg-red" />
          )}
          <div className="flex items-center gap-3">
            <div className="relative flex items-center gap-3">
              <Image
                src={userObj.profileImage}
                alt="avatar"
                width={20}
                height={20}
                className="h-10 w-10 shrink-0 rounded-full"
              />
              {activeUserList.includes(userObj?._id.toString()!) && (
                <span className="absolute left-[20%] top-3/4 h-2.5 w-2.5 rounded border border-white bg-success500" />
              )}
              <div className="flex flex-col">
                <p className="body-bold text-secondary2 dark:text-background">
                  {userObj.fullName}
                </p>
                <p className="body-regular text-secondary4 dark:text-background2">
                  @{userObj.username}
                </p>
              </div>
            </div>
          </div>
        </div>
        <p className="body-regular text-secondary4 dark:text-background2">
          {dateCreatedAt}
        </p>
      </section>
      <p className="body-regular ml-5 text-secondary4 dark:text-background2">
        {lastMessage}
      </p>
    </main>
  );
};

export default ChatCard;
