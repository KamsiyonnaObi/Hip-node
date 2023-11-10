"use server";

import Post, { IPost } from "@/models/post.model";
import dbConnect from "@/utils/mongooseConnect";
import { getServerSession } from "next-auth";
import UserModel from "@/models/User";

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

export async function getPostById(postId: number) {
  try {
    await dbConnect();
    const post = await Post.findById(postId);
    return post;
  } catch (error) {
    console.log(error);
    throw error;
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
