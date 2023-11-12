"use server";
import { ConnectOptions } from "mongoose";

import dbConnect from "@/utils/mongooseConnect";
import Comment from "@/models/comment.model";
import { getServerSession } from "next-auth";

const { UserModel } = require("@/models/User");
const { GroupModel } = require("@/models/group.model");

export async function getCommentById(postId: string) {
  try {
    await dbConnect();
    const comments = await Comment.find({ postId }).populate("userId");

    if (comments) {
      return { success: true, data: comments };
    } else {
      throw new Error("comment not found.");
    }
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "An error occurred while retrieving the comment.",
    };
  }
}

export async function createComment({
  text,
  postId,
}: {
  text: string;
  postId: string;
}) {
  try {
    await dbConnect();
    // get the current user
    const currentUser: any = await getServerSession();
    const { email } = currentUser?.user;
    const User = await UserModel.findOne({ email });

    const comment = await Comment.create({
      text,
      postId,
      userId: User?._id,
      // createddAt: new Date(),
    });
    if (comment) {
      return JSON.stringify({
        success: true,
        message: "Comment created successfully!",
        id: comment._id,
      });
    } else {
      throw new Error("Failed to create a comment.");
    }
  } catch (error) {
    console.log(error);
    return JSON.stringify({
      success: false,
      message: "An error occurred while creating the comment.",
    });
  }
}
