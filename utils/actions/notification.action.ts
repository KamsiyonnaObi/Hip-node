"use server";

import UserModel from "@/models/User";
import Notification, { INotif } from "@/models/notification.model";
import dbConnect from "@/utils/mongooseConnect";
import { getServerSession } from "next-auth";

export async function createNotification(params: Partial<INotif>) {
  try {
    await dbConnect();
    const currentUser: any = await getServerSession();
    const { email } = currentUser?.user;
    const User = await UserModel.findOne({ email });
    const userIdfrom = User?._id;
    const { title, type, userIdto, comment } = params;

    const notif = await Notification.create({
      title,
      type,
      userIdfrom,
      userIdto,
      comment,
    });

    return notif;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getNotification(notificationId: string) {
  try {
    await dbConnect();
    const notification =
      await Notification.findById(notificationId).populate("userId");
    return notification;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getAllNotification(params: {
  userId: any;
  type: string;
}) {
  const { type, userId } = params;
  try {
    await dbConnect();
    let notification = await Notification.find({ userIdto: userId });
    if (type === "all") {
      return notification;
    }
    notification = await Notification.find({ type });
    return notification;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
