import { Schema, models, model, Document } from "mongoose";

type Activity = {
  date: Date;
  activityType: string;
};

export interface IGroup extends Document {
  title: string;
  coverUrl: string;
  groupUrl: string;
  userId: string;
  createdAt: Date;
  description: string;
  admins: String[];
  members: String[];
  activity: Activity[];
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
  activity: {
    type: [
      {
        date: Date,
        activityType: String, // e.g., 'new_member', 'new_post'
      },
    ],
    default: [],
  },
});

const Group = models.Group || model("Group", GroupSchema);

export default Group;
