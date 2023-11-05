"use server";

import mongoose, { ObjectId } from "mongoose";
import { revalidatePath } from "next/cache";

import Post, { IPost } from "@/models/post.model";
import dbConnect from "@/utils/mongooseConnect";

export async function createPost(params: Partial<IPost>) {
  try {
    await dbConnect();
    const { title, content, image, tags, userId } = params;

    const post = await Post.create({
      title,
      content,
      image,
      tags,
      userId,
    });
    return post;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to create a post.");
  }
}

export async function getPostById(postId: string) {
  try {
    await dbConnect();
    const post = await Post.findById(postId).populate("userId");
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

export async function likePost({
  postId,
  userId,
  hasLiked,
  path,
}: {
  postId: string;
  userId: string;
  hasLiked: boolean;
  path: string;
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

    if (!post) {
      throw new Error("Post not found");
    }
    if (!path) {
      throw new Error("Path is required");
    }
    revalidatePath(path);
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function commentPost({
  postId,
  userId,
  hasCommented,
  path,
}: {
  postId: string;
  userId: string;
  hasCommented: boolean;
  path: string;
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
    if (!path) {
      throw new Error("Path is required");
    }
    revalidatePath(path);
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function sharePost({
  postId,
  userId,
  hasShared,
  path,
}: {
  postId: string;
  userId: string;
  hasShared: boolean;
  path: string;
}) {
  try {
    dbConnect();
    const { ObjectId } = mongoose.Types;
    const id = new ObjectId(postId);
    let updateQuery = {};
    // Remove like if it is already liked
    if (hasShared) {
      updateQuery = { $pull: { shares: userId } };
    } else {
      updateQuery = { $addToSet: { shares: userId } };
    }

    const post = await Post.findByIdAndUpdate(id, updateQuery, {
      new: true,
    });

    if (!post) {
      throw new Error("Post not found");
    }
    if (!path) {
      throw new Error("Path is required");
    }
    revalidatePath(path);
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function reportPost({
  postId,
  userId,
  hasReported,
  path,
}: {
  postId: string;
  userId: string;
  hasReported: boolean;
  path: string;
}) {
  try {
    dbConnect();
    const { ObjectId } = mongoose.Types;
    const id = new ObjectId(postId);
    let updateQuery = {};
    // Remove like if it is already liked
    if (hasReported) {
      updateQuery = { $pull: { reports: userId } };
    } else {
      updateQuery = { $addToSet: { reports: userId } };
    }

    const post = await Post.findByIdAndUpdate(id, updateQuery, {
      new: true,
    });

    if (!post) {
      throw new Error("Post not found");
    }
    if (!path) {
      throw new Error("Path is required");
    }
    revalidatePath(path);
  } catch (error) {
    console.log(error);
    throw error;
  }
}
