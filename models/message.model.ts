import { IUser } from "@/types/mongoose";
import { Schema, models, model, Document } from "mongoose";

export interface IReadBy {
  user: IUser["_id"];
  read: boolean;
}

export interface IMessage extends Document {
  userIdFrom: IUser;
  userIdTo: IUser;
  text: string;
  createdAt: Date;
  readBy: IReadBy[];
}

export interface IChat {
  user: IUser;
  lastCreatedAt: Date;
  lastMessage: string;
  isRead: boolean;
}

const MessageSchema = new Schema({
  userIdFrom: { type: Schema.Types.ObjectId, ref: "User", required: true },
  userIdTo: { type: Schema.Types.ObjectId, ref: "User", required: true },
  text: { type: String },
  createdAt: { type: Date, default: Date.now },
  readBy: [
    {
      user: { type: Schema.Types.ObjectId, ref: "User" },
      read: { type: Boolean, default: false },
    },
  ],
});

const Message = models.Message || model("Message", MessageSchema);

export default Message;
