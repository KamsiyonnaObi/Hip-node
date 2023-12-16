"use server";
import mongoose from "mongoose";

import UserModel from "@/models/User";
import Message, { IReadBy } from "@/models/message.model";
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
      readBy: [
        { user: userIdFrom, read: true },
        { user: objuserIdTo, read: false },
      ],
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

export async function getChatList(userId: string) {
  await dbConnect();

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
        lastCreatedAt: msg.createdAt,
        lastMessage: msg.text,
      };

      // Add to map
      chatMap.set(otherUser._id.toString(), chat);
    } else {
      // If chat exists, just update last message
      chat.lastCreatedAt = msg.createdAt;
      chat.lastMessage = msg.text;
    }
  });

  // Get chats from map values
  const chatList = [...chatMap.values()];

  return chatList;
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

    // Find messages that match the current user and partner
    const messagesToUpdate = await Message.find({
      $or: [
        { userIdFrom: userIdFrom._id, userIdTo: partnerId },
        { userIdFrom: partnerId, userIdTo: userIdFrom._id },
      ],
    });

    // Update the readBy field for the current user in each message
    const updatedMessages = await Promise.all(
      messagesToUpdate.map(async (message) => {
        // Check if readBy array is empty, and add a new entry for the current user
        if (!message.readBy || message.readBy.length === 0) {
          message.readBy = [{ user: userIdFrom._id, read: true }];
        } else {
          // Update the readBy array for the current user
          message.readBy.forEach((readBy: IReadBy) => {
            if (readBy.user.toString() === userIdFrom._id.toString()) {
              readBy.read = true;
            }
          });
        }

        // Save the updated message
        return message.save();
      })
    );

    return updatedMessages;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
