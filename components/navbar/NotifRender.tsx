import { getAllNotification } from "@/utils/actions/notification.action";
import { getCurrentUser } from "@/utils/actions/user.action";
import React from "react";

const NotifRender = async ({ type }: { type: string }) => {
  const currentUser = await getCurrentUser();
  const currentUserId = currentUser?._id.toString() || "unknown";
  const result = await getAllNotification({
    userId: currentUserId,
    type,
  });
  return (
    <>
      {result.notifications && result.notifications.length > 0
        ? result.notifications.slice(0, 3).map(
            (notif: any) => notif.type
            // <NotifCard
            //   key={notif._id}
            //   type={notif.type}
            //   avatar={notif.userIdfrom.profileImage || "/Avatar.png"}
            //   name={notif.userIdfrom.username || "unknown"}
            //   title={notif.title}
            //   postedAt={notif.createdAt}
            // />
          )
        : "No Notifications!"}
    </>
  );
};

export default NotifRender;
