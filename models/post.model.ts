import { Schema, models, model, Document } from "mongoose";

export interface IPost extends Document {
  title: string;
  postImage: string;
  tags: string[];
  userId: string;
  createdAt: Date;
  views: number;
  likes: number;
  comments: number;
}

const PostSchema = new Schema({
  title: { type: String, required: true },
  postImage: { type: String },
  tags: { type: [String], ref: "Tag" },
  userId: { type: String, ref: "User" },
  createdAt: { type: Date, default: Date.now },
  views: { type: Number, default: 0 },
  likes: { type: Number, default: 0 },
  comments: { type: Number, default: 0 },
});

const Post = models.Post || model("Post", PostSchema);

export default Post;
