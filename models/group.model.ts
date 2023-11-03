import { Schema, models, model, Document } from "mongoose";

export interface IGroup extends Document {
  title: string;
  coverUrl: string;
  groupUrl: string;
  userId: string;
  createdAt: Date;
  description: string;
  admins: String[];
  members: String[];
}

const GroupSchema = new Schema({
  title: { type: String, required: true },
  coverUrl: { type: String, required: true },
  groupUrl: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  userId: { type: Schema.Types.ObjectId, ref: "User" },
  description: { type: String, required: true },
  admins: [{ type: Schema.Types.ObjectId, ref: "User" }],
  members: [{ type: Schema.Types.ObjectId, ref: "User" }],
});


const Group = models.Group || model("Group", GroupSchema);

export default Group;

