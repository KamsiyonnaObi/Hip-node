import { Schema, models, model, Document } from "mongoose";

export interface IPost extends Document {
  postId: string;
  title: string;
  postImage: string;
  tags: Schema.Types.ObjectId[];
  userId: Schema.Types.ObjectId;
  createdAt: Date;
  views: number;
  likes: number;
  comments: number;
}

const PostSchema = new Schema({
  postId: { type: String, required: true },
  title: { type: String, required: true },
  postImage: { type: String },
  tags: { type: Schema.Types.ObjectId, ref: "Tag" },
  userId: { type: Schema.Types.ObjectId, ref: "User" },
  createdAt: { type: Date, default: Date.now },
  views: { type: Number, default: 0 },
  likes: { type: Number, default: 0 },
  comments: { type: Number, default: 0 },
});

const Post = models.Question || model("Question", PostSchema);

export default Post;
