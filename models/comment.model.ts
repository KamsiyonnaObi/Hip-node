import { IUser } from "@/types/mongoose";
import { Schema, models, model, Document } from "mongoose";

export interface IComment extends Document {
  _id: Schema.Types.ObjectId;
  text: string;
  userId: IUser;
  postId: Schema.Types.ObjectId;
  createdAt: Date;
  updatedAt?: Date;
  likes?: Schema.Types.ObjectId[];
  shares?: Schema.Types.ObjectId[];
  replies?: IComment[];
}

const CommentSchema = new Schema({
  _id: Schema.Types.ObjectId,
  text: String,
  userId: { type: Schema.Types.ObjectId, ref: "User" },
  postId: {
    type: Schema.Types.ObjectId,
    ref: "Post",
  },
  createdAt: Date,
  updatedAt: Date,
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
  replies: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
});

const Comment = models.Comment || model("Comment", CommentSchema);

export default Comment;
