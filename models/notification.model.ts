import { Schema, models, model, Document } from "mongoose";

export interface INotif extends Document {
  userIdfrom: Schema.Types.ObjectId;
  userTo: string;
  type: string;
  comment?: string;
  title: string;
  createdAt: string;
  read: boolean;
  link: string;
}

const NotificationSchema = new Schema({
  title: { type: String, required: true },
  type: { type: String, required: true },
  userIdfrom: { type: Schema.Types.ObjectId, ref: "User", required: true },
  userTo: { type: String, required: true },
  comment: { type: String },
  createdAt: { type: Date, default: Date.now },
  read: { type: Boolean, default: false },
  link: { type: String, required: true },
});

const Notification =
  models.Notification || model("Notification", NotificationSchema);

export default Notification;
