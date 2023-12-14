import { getUserHistory } from "@/utils/actions/notification.action";
import React from "react";

type Props = { userId?: string };
const UserHistory = async ({ userId }: Props) => {
  const notification = await getUserHistory(userId);
  console.log(notification);
  return <div>UserHistory</div>;
};

export default UserHistory;
