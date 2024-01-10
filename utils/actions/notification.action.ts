"use server";

import UserModel from "@/models/User";
import Notification, { INotif } from "@/models/notification.model";
import dbConnect from "@/utils/mongooseConnect";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";

export async function createNotification(params: Partial<INotif>) {
  try {
    await dbConnect();
    const currentUser: any = await getServerSession();
    const { email } = currentUser?.user;
    const userIdfrom = await UserModel.findOne({ email });

    const { title, type, userTo, comment, link } = params;

    const notif = await Notification.create({
      title,
      type,
      userIdfrom,
      userTo,
      comment,
      link,
      username: userIdfrom?.username,
      image: userIdfrom?.profileImage,
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

export async function getAllNotification({
  userId,
  type,
}: {
  userId: string;
  type: string;
}) {
  try {
    await dbConnect();

    const query: Partial<{ userTo: string; type: string }> = { userTo: userId };
    if (type !== "all") {
      query.type = type;
    }

    const notifications = await Notification.find(query)
      .populate("userIdfrom")
      .sort({ createdAt: -1 })
      .lean();
    return notifications;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getUserHistory(userId: string | undefined) {
  try {
    await dbConnect();

    const query: { userIdfrom?: string } = { userIdfrom: userId };
    const notifications = await Notification.find(query)
      .populate("userTo", "username")
      .sort({ createdAt: -1 })
      .lean();
    revalidatePath("/profile");
    return notifications;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function readPost(notifId: string) {
  try {
    await dbConnect();
    const notification = await Notification.findById(notifId);
    notification.read = true;
    await notification.save();
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function readAllNotifications(userId: string) {
  try {
    await dbConnect();

    // Find all unread notifications for a specific user
    const unreadNotifications = await Notification.find({
      userTo: userId,
      read: false,
    });

    // Mark all unread notifications as read
    await Promise.all(
      unreadNotifications.map(async (notification) => {
        notification.read = true;
        await notification.save();
      })
    );
  } catch (error) {
    console.error("Error marking notifications as read:", error);
    throw error;
  }
}
