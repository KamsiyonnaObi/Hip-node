import { Schema, models, model, Document } from "mongoose";

export interface IPost extends Document {
  title: string;
  postImage: string;
  tags: string[];
  userId: Schema.Types.ObjectId;
  createdAt: Date;
  views: number;
  likes: number;
  comments: number;
}

const PostSchema = new Schema({
  title: { type: String, required: true },
  postImage: { type: String },
  tags: { type: [String] },
  userId: { type: Schema.Types.ObjectId, ref: "User" },
  createdAt: { type: Date, default: Date.now },
  views: { type: Number, default: 0 },
  likes: { type: Number, default: 0 },
  comments: { type: Number, default: 0 },
});

const Post = models.Post || model("Post", PostSchema);

export default Post;
