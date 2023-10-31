import { Schema, models, model, Document } from "mongoose";

export interface IGroup extends Document {
  title: string;
  image: string;
  userId: string;
  createdAt: Date;
  descTitle: string;
  desc: string;
  admins: String[];
  members: String[];
}

const GroupSchema = new Schema({
  title: { type: String, required: true },
  image: { type: String },
  tags: { type: [String] },
  content: { type: String, required: true },
  userId: { type: Schema.Types.ObjectId, ref: "User" },
  createdAt: { type: Date, default: Date.now },
  views: { type: Number, default: 0 },
  likes: { type: Number, default: 0 },
  comments: { type: Number, default: 0 },
});


const Group = models.Group || model("Group", GroupSchema);

export default Group;

