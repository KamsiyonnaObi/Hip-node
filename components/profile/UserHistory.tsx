import React from "react";
import UserHistoryCard from "./UserHistoryCard";
import { getUserHistory } from "@/utils/actions/notification.action";

type Props = { userId?: string };
const UserHistory = async ({ userId }: Props) => {
  const notifications = await getUserHistory(userId);

  return (
    <>
      <section className="flex flex-col gap-2.5">
        {notifications.length
          ? notifications.map((notification) => (
              <div
                key={notification.title}
                className=" gap-[10px] rounded-[16px] bg-background p-[14px] dark:bg-dark3 md:gap-[20px] md:p-[20px]"
              >
                <UserHistoryCard
                  username={notification.userTo.username}
                  type={notification.type}
                  postedAt={notification.createdAt}
                />
              </div>
            ))
          : "no recent activity"}
      </section>
    </>
  );
};

export default UserHistory;
