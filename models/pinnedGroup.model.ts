import { Schema, models, model, Document } from "mongoose";

export interface IPinnedGroup extends Document {
  userId: string;
  title: string;
  image: string;
  postNum: string;
  desc: string;
}

const PinnedGroupSchema = new Schema({
  userId: { type: String, required: true }, // For each user, the pinned group would be unique
  title: { type: String, required: true },
  image: { type: String },
  postNum: { type: String, required: true },
  desc: { type: String, required: true },
});

const PinnedGroup =
  models.PinnedGroup || model("PinnedGroup", PinnedGroupSchema);

export default PinnedGroup;
