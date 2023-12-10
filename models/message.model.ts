import { IUser } from "@/types/mongoose";
import { Schema, models, model, Document } from "mongoose";

export interface IMessage extends Document {
  userIdFrom: Schema.Types.ObjectId;
  userIdTo: Schema.Types.ObjectId;
  text: string;
  createdAt: Date;
  read: boolean;
}

export interface IChat {
  user: IUser;
  lastMessage: string;
}

const MessageSchema = new Schema({
  userIdFrom: { type: Schema.Types.ObjectId, ref: "User", required: true },
  userIdTo: { type: Schema.Types.ObjectId, ref: "User", required: true },
  text: { type: String },
  createdAt: { type: Date, default: Date.now },
  read: { type: Boolean, default: false },
});

const Message = models.Message || model("Message", MessageSchema);

export default Message;
