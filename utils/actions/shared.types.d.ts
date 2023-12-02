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

export interface NewGroup {
  title: string;
  coverUrl: string;
  groupUrl: string;
  description: string;
  admins: string;
  members: string;
}

export interface UpdateGroup {
  title: string;
  coverUrl: string;
  groupUrl: string;
  description: string;
  admins: string;
  members: string;
}
