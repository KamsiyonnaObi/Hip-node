"use client";
import { ImageFallback as Image } from "@/components/shared/ImageFallback";

const ChatCard = ({
  user,
  lastMessage,
}: {
  user: string;
  lastMessage: string;
}) => {
  const userObj = JSON.parse(user);
  return (
    <main className="border-b-solid flex w-full flex-col gap-3 border-b border-b-secondary6 bg-background p-4 dark:border-b-dark4 dark:bg-dark2">
      <section className="flex justify-between">
        <div className="flex items-center gap-3">
          <span className="h-2 w-2 rounded bg-red" />
          <div className="flex items-center gap-3">
            <div className="relative flex items-center gap-3">
              <Image
                src={userObj.profileImage}
                alt="avatar"
                width={20}
                height={20}
                className="h-7 w-7 shrink-0 rounded-full md:h-10 md:w-10"
              />
              <span className="absolute left-[20%] top-3/4 h-2.5 w-2.5 rounded border border-white bg-success500" />
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
          5min ago
        </p>
      </section>
      <p className="body-regular ml-5 text-secondary4 dark:text-background2">
        {lastMessage}
      </p>
    </main>
  );
};

export default ChatCard;
