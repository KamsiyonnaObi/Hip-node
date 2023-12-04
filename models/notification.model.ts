import { Schema, models, model, Document } from "mongoose";

export interface INotif extends Document {
  userIdfrom: Schema.Types.ObjectId;
  userIdto: Schema.Types.ObjectId;
  type: string;
  comment?: string;
  title: string;
  createdAt: string;
}

const NotificationSchema = new Schema({
  title: { type: String, required: true },
  type: { type: String, required: true },
  userIdfrom: { type: Schema.Types.ObjectId, ref: "User", required: true },
  userIdto: { type: Schema.Types.ObjectId, ref: "User", required: true },
  comment: { type: String },
  createdAt: { type: Date, default: Date.now },
});

const Notification =
  models.Notification || model("Notification", NotificationSchema);

export default Notification;
