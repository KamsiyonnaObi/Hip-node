"use server";

import UserModel from "@/models/User";
import Message from "@/models/message.model";
import dbConnect from "@/utils/mongooseConnect";
import { getServerSession } from "next-auth";

export async function createMessage({
  userIdTo,
  text,
}: {
  userIdTo: string;
  text: string;
}) {
  try {
    await dbConnect();
    const currentUser: any = await getServerSession();
    const { email } = currentUser?.user;
    const userIdFrom = await UserModel.findOne({ email });

    if (!userIdTo) {
      throw new Error("Invalid userIdTo");
    }

    await Message.create({
      userIdFrom,
      userIdTo,
      text,
      read: false,
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getMessage(messageId: string) {
  try {
    await dbConnect();
    const message = await Message.findById(messageId).populate("userId");
    return message;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getAllMessages() {
  try {
    await dbConnect();
    const currentUser: any = await getServerSession();
    const { email } = currentUser?.user;
    const User = await UserModel.findOne({ email });
    const currentUserId = User?._id;

    const query = {
      $or: [{ userIdFrom: currentUserId }, { userIdTo: currentUserId }],
    };

    const messages = await Message.find(query)
      .populate("userIdFrom")
      .populate("userIdTo")
      .sort({ createdAt: 1 })
      .lean();
    return JSON.stringify(messages);
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getChatPartners() {
  await dbConnect();
  const currentUser: any = await getServerSession();
  const { email } = currentUser?.user;
  const User = await UserModel.findOne({ email });
  const currentUserId = User?._id;

  // Get distinct user ids in one pipeline
  const partners = await Message.aggregate([
    // Filter messages to current user
    {
      $match: {
        $or: [{ userIdFrom: currentUserId }, { userIdTo: currentUserId }],
      },
    },

    // Get distinct userIds
    {
      $group: {
        _id: null,
        userIds: {
          $addToSet: {
            $cond: [
              { $ne: ["$userIdFrom", currentUserId] },
              "$userIdFrom",
              "$userIdTo",
            ],
          },
        },
      },
    },
  ]);

  // Return just the array of ids
  return partners[0].userIds;
}

export async function updateReadBy({ partnerId }: { partnerId: string }) {
  try {
    await dbConnect();
    const currentUser: any = await getServerSession();
    const { email } = currentUser?.user;
    const userIdFrom = await UserModel.findOne({ email });

    if (!userIdFrom) {
      throw new Error("Invalid userIdFrom");
    }

    await Message.updateMany(
      {
        userIdFrom: partnerId,
        userIdTo: userIdFrom._id,
      },
      {
        $set: { read: true },
      }
    );
  } catch (error) {
    console.log(error);
    throw error;
  }
}
