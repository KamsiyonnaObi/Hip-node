"use server";

import mongoose, { ObjectId } from "mongoose";

import Post, { IPost } from "@/models/post.model";
import dbConnect from "@/utils/mongooseConnect";
import { getServerSession } from "next-auth";

const { UserModel } = require("@/models/User");

export async function createPost(params: any) {
  try {
    await dbConnect();
    // get the userID from the session
    const currentUser: any = await getServerSession();
    const { email } = currentUser?.user;
    const User = await UserModel.findOne({ email });
    const userId = User?._id;

    const { title, content, image, tags, avatar } = params;

    const post = await Post.create({
      title,
      content,
      image,
      tags,
      userId,
      avatar,
    });

    // return the postID, not the entire Post
    return post._id.toString();
  } catch (error) {
    console.log(error);
    throw new Error("Failed to create a post.");
  }
}

export async function getPostById(postId: string) {
  try {
    await dbConnect();
    const post = await Post.findById(postId)
      .populate("userId")
      .populate("groupId");
    if (post) {
      return { success: true, data: post };
    } else {
      throw new Error("post not found.");
    }
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "An error occurred while retrieving the post.",
    };
  }
}

export async function getPostsByUserId(
  userId: ObjectId,
  excludedPostId: ObjectId
) {
  try {
    await dbConnect();
    const posts = await Post.find({
      userId,
      _id: { $ne: excludedPostId },
    }).populate("tags");

    if (posts.length > 0) {
      return { success: true, data: posts };
    } else {
      throw new Error("post not found.");
    }
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "An error occurred while retrieving the posts.",
    };
  }
}

// TODO, might not be needed (no edit functionality in figma)
export async function updatePost(params: Partial<IPost>) {
  try {
    await dbConnect();
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function deletePost(postId: number) {
  try {
    await dbConnect();
    const deletedPost = await Post.findByIdAndDelete(postId);
    return deletedPost;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getAllPosts(params: any) {
  try {
    await dbConnect();

    const posts = await Post.find({})
      .populate("userId")
      .sort({ createdAt: -1 });
    return { posts };
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function likePost({
  postId,
  userId,
  hasLiked,
}: {
  postId: string;
  userId: string;
  hasLiked: boolean | null;
}) {
  try {
    dbConnect();
    const { ObjectId } = mongoose.Types;
    const id = new ObjectId(postId);
    let updateQuery = {};
    // Remove like if it is already liked
    if (hasLiked) {
      updateQuery = { $pull: { likes: userId } };
    } else {
      updateQuery = { $addToSet: { likes: userId } };
    }

    const post = await Post.findByIdAndUpdate(id, updateQuery, {
      new: true,
    });
    const likedStatus = post.likes.includes(userId);

    if (!post) {
      throw new Error("Post not found");
    }
    return { status: likedStatus, number: post.likes.length };
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function commentPost({
  postId,
  userId,
  hasCommented,
}: {
  postId: string;
  userId: string;
  hasCommented: boolean | null;
}) {
  try {
    dbConnect();
    const { ObjectId } = mongoose.Types;
    const id = new ObjectId(postId);
    let updateQuery = {};
    // Remove like if it is already liked
    if (hasCommented) {
      updateQuery = { $pull: { comments: userId } };
    } else {
      updateQuery = { $addToSet: { comments: userId } };
    }

    const post = await Post.findByIdAndUpdate(id, updateQuery, {
      new: true,
    });
    if (!post) {
      throw new Error("Post not found");
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function sharePost({
  postId,
  userId,
  hasShared,
}: {
  postId: string;
  userId: string;
  hasShared: boolean | null;
}) {
  try {
    dbConnect();
    const { ObjectId } = mongoose.Types;
    const id = new ObjectId(postId);
    let updateQuery = {};
    // Remove like if it is already Shared
    if (hasShared) {
      updateQuery = { $pull: { shares: userId } };
    } else {
      updateQuery = { $addToSet: { shares: userId } };
    }

    const post = await Post.findByIdAndUpdate(id, updateQuery, {
      new: true,
    });
    const sharedStatus = post.shares.includes(userId);

    if (!post) {
      throw new Error("Post not found");
    }
    return { status: sharedStatus, number: post.shares.length };
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function reportPost({
  postId,
  userId,
  hasReported,
}: {
  postId: string;
  userId: string;
  hasReported: boolean | null;
}) {
  try {
    dbConnect();
    const { ObjectId } = mongoose.Types;
    const id = new ObjectId(postId);
    let updateQuery = {};
    // Remove like if it is already reported
    if (hasReported) {
      updateQuery = { $pull: { reports: userId } };
    } else {
      updateQuery = { $addToSet: { reports: userId } };
    }

    const post = await Post.findByIdAndUpdate(id, updateQuery, {
      new: true,
    });
    const reportedStatus = post.reports.includes(userId);

    if (!post) {
      throw new Error("Post not found");
    }
    return { status: reportedStatus };
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getPostByGroupId(groupId: string) {
  try {
    await dbConnect();
    const posts = await Post.find({
      groupId,
    });
    if (posts.length > 0) {
      return { success: true, data: posts };
    } else {
      throw new Error("post not found.");
    }
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "An error occurred while retrieving the posts.",
    };
  }
}
