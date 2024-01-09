import { ImageFallback as Image } from "@/components/shared/ImageFallback";

import { useSocketContext } from "@/providers/SocketProvider";
import { formatDistanceToNow } from "date-fns";

const NavChatCard = ({
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
      className="flex w-full cursor-pointer flex-col gap-5 bg-background dark:bg-dark4"
      onClick={onClick}
    >
      <section className="flex justify-start">
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
                <div className="flex items-end gap-3">
                  <p className="display-semibold text-secondary2 dark:text-background2">
                    {userObj.fullName}
                  </p>
                  <p className="caption-regular text-secondary3">
                    {dateCreatedAt}
                  </p>
                </div>
                <p className="caption-regular line-clamp-1 text-secondary3">
                  {lastMessage}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default NavChatCard;
