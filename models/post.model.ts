import { Schema, models, model, Document } from "mongoose";

export interface IComments {
  _id?: Schema.Types.ObjectId;
  userId?: Schema.Types.ObjectId;
  name?: string | "";
  imgUrl?: string | "";
  text?: string | "";
  createdAt?: Date;
  updatedAt?: Date;
  replies?: IComments[];
  likes?: Schema.Types.ObjectId[];
}

export interface IPost extends Document {
  title: string;
  image: string;
  tags: string[];
  content: string;
  userId: Schema.Types.ObjectId;
  groupId: Schema.Types.ObjectId;
  createdAt: Date;
  views?: Schema.Types.ObjectId[];
  likes?: Schema.Types.ObjectId[];
  shares?: Schema.Types.ObjectId[];
  reports?: Schema.Types.ObjectId[];
  hasLiked?: boolean;
  hasCommented?: boolean;
  hasShared?: boolean;
  hasReported?: boolean;
  postId: Schema.Types.ObjectId;
  comments: IComments[];
}

const commentSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User" },
  name: { type: String },
  imgUrl: { type: String },
  text: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  likes: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

commentSchema.add({ replies: [commentSchema] });

const PostSchema = new Schema({
  title: { type: String, required: true },
  image: { type: String },
  tags: { type: [String] },
  content: { type: String, required: true },
  userId: { type: Schema.Types.ObjectId, ref: "User" },
  groupId: { type: Schema.Types.ObjectId, ref: "Group" },
  createdAt: { type: Date, default: Date.now },
  views: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  likes: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  shares: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  reports: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  comments: [commentSchema],
});

const Post = models.Post || model("Post", PostSchema);

export default Post;
