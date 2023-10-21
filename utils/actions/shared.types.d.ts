import { Schema } from "mongoose";

export interface CreatePostParams {
  title: string;
  content: string;
  image: string;
  tags: string[];
  userId: Schema.Types.ObjectId;
}

export interface GetPostByIdParams {
  postId: string;
}

export interface DeletePostParams {
  postId: string;
}
