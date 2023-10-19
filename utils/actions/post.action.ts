"use server";

import Post from "@/models/post.model";
import dbConnect from "@/utils/mongooseConnect";
import {
  CreatePostParams,
  DeletePostParams,
  GetPostByIdParams,
} from "./shared.types";

export async function createPost(params: CreatePostParams) {
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

export async function getPostById(params: GetPostByIdParams) {
  try {
    await dbConnect();
    const { postId } = params;
    const post = await Post.findById(postId);
    return post;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

// TODO, might not be needed (no edit functionality in figma)
export async function updatePost(params: any) {
  try {
    await dbConnect();
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function deletePost(params: DeletePostParams) {
  try {
    await dbConnect();
    const { postId } = params;
    const deletedPost = await Post.findByIdAndDelete(postId);
    return deletedPost;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
