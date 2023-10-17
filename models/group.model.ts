import { Schema, models, model, Document } from "mongoose";

export interface IGroup extends Document {
  title: string;
  image: string;
  userId: string;
  createdAt: Date;
  descTitle: string;
  desc: string;
}

const groupSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  userId: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  descTitle: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
});

const Group = models.Group || model("Group", groupSchema);

export default Group;
