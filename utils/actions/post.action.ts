"use server";

import Post, { IPost } from "@/models/post.model";
import dbConnect from "@/utils/mongooseConnect";
import User from "@/models/User";

export async function createPost(params: any) {
  try {
    await dbConnect();
    const { title, content, image, tags, userId, avatar } = params;

    const post = await Post.create({
      title,
      content,
      image,
      tags,
      userId,
      avatar,
    });
    return post;
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
    .sort({ createdAt: -1 });
    return { posts };
  } catch (error) {
    console.log(error);
    throw error;
  }
}
