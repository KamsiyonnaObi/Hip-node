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
  read: boolean;
}

export interface IChat {
  user: IUser;
  lastCreatedAt: Date;
  lastMessage: string;
  read: boolean;
  userIdFrom: IUser;
}

export interface IChatList {
  user: IUser;
  lastCreatedAt: Date;
  lastMessage: string;
  isRead: boolean;
  userIdFrom: IUser;
}

const MessageSchema = new Schema({
  userIdFrom: { type: Schema.Types.ObjectId, ref: "User", required: true },
  userIdTo: { type: Schema.Types.ObjectId, ref: "User", required: true },
  text: { type: String },
  createdAt: { type: Date, default: Date.now },
  read: { type: Boolean },
});

const Message = models.Message || model("Message", MessageSchema);

export default Message;
