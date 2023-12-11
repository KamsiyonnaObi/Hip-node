"use server";
import mongoose from "mongoose";

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
    const { ObjectId } = mongoose.Types;
    const objuserIdTo = new ObjectId(userIdTo);

    const message = await Message.create({
      userIdFrom,
      userIdTo: objuserIdTo,
      text,
    });

    return message;
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

    return messages;
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

export async function getChatList() {
  await dbConnect();
  const currentUser: any = await getServerSession();
  const { email } = currentUser?.user;
  const User = await UserModel.findOne({ email });
  const userId = User?._id;

  // Get all messages
  const messages = await getAllMessages();

  // Create a Map to store unique users
  const chatMap = new Map();

  messages.forEach((msg) => {
    // Get the other user that is not the current user
    const otherUser = msg.userIdFrom._id.equals(userId)
      ? msg.userIdTo
      : msg.userIdFrom;

    // Check if chat exists
    let chat = chatMap.get(otherUser._id);

    if (!chat) {
      // If not, create it
      chat = {
        user: otherUser,
        lastMessage: msg.text,
      };

      // Add to map
      chatMap.set(otherUser._id, chat);
    } else {
      // If chat exists, just update last message
      chat.lastMessage = msg.text;
    }
  });

  // Get chats from map values
  const chatList = [...chatMap.values()];

  return chatList;
}

export async function readMessage(messageId: string) {
  try {
    await dbConnect();
    const message = await Message.findById(messageId);
    message.read = true;
    await message.save();
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function readAllMessages(userId: string) {
  try {
    await dbConnect();

    // Find all unread messages for a specific user
    const unreadmessages = await Message.find({
      userTo: userId,
      read: false,
    });

    // Mark all unread messages as read
    await Promise.all(
      unreadmessages.map(async (message) => {
        message.read = true;
        await message.save();
      })
    );
  } catch (error) {
    console.error("Error marking messages as read:", error);
    throw error;
  }
}
