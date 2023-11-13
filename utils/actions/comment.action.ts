"use server";
import mongoose, { ConnectOptions } from "mongoose";

import dbConnect from "@/utils/mongooseConnect";
import Comment from "@/models/comment.model";
import { getServerSession } from "next-auth";

import UserModel from "@/models/User";

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
    const { ObjectId } = mongoose.Types;
    const ObjPostid = new ObjectId(postId);

    if (!User) {
      throw new Error("User not found");
    }

    const comment = await Comment.create({
      _id: new mongoose.Types.ObjectId(),
      text,
      postId: ObjPostid,
      userId: User?._id,
      createdAt: new Date(),
    });

    return JSON.stringify({
      success: true,
      message: "Comment created successfully!",
      id: comment._id,
    });
  } catch (error) {
    console.log(error);
    return JSON.stringify({
      success: false,
      message: "An error occurred while creating the comment.",
    });
  }
}

export async function likeComment({
  commentId,
  hasLiked,
}: {
  commentId: string;
  hasLiked: boolean;
}) {
  try {
    dbConnect();
    const currentUser: any = await getServerSession();
    const { email } = currentUser?.user;
    const User = await UserModel.findOne({ email });
    const { ObjectId } = mongoose.Types;
    const id = new ObjectId(commentId);
    let updateQuery = {};
    // Remove like if it is already liked
    if (hasLiked) {
      updateQuery = { $pull: { likes: User?._id } };
    } else {
      updateQuery = { $addToSet: { likes: User?._id } };
    }

    const comment = await Comment.findByIdAndUpdate(id, updateQuery, {
      new: true,
    });
    const likedStatus = comment.likes.includes(User?._id);
    if (!comment) {
      throw new Error("Comment not found");
    }
    return { status: likedStatus };
  } catch (error) {
    console.log(error);
    throw error;
  }
}

// TODO Implement reply function later
// export async function replyToComment({
//   commentId,
//   hasReplied,
// }: {
//   commentId: string;
//   hasReplied: boolean;
// }) {
//   try {
//     dbConnect();
//     const currentUser: any = await getServerSession();
//     const { email } = currentUser?.user;
//     const User = await UserModel.findOne({ email });
//     const { ObjectId } = mongoose.Types;
//     const id = new ObjectId(commentId);
//     let updateQuery = {};
//     // Remove like if it is already liked
//     if (hasReplied) {
//       updateQuery = { $pull: { replies: User?._id } };
//     } else {
//       updateQuery = { $addToSet: { replies: User?._id } };
//     }

//     const comment = await Comment.findByIdAndUpdate(id, updateQuery, {
//       new: true,
//     });
//     const repliedStatus = comment.replies?.includes(User?._id) || false;
//     if (!comment) {
//       throw new Error("Comment not found");
//     }
//     return { status: repliedStatus };
//   } catch (error) {
//     console.log(error);
//     throw error;
//   }
// }
