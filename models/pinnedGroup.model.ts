import { Schema, models, model, Document } from "mongoose";

export interface IPinnedGroup extends Document {
  userId: Schema.Types.ObjectId;
  groupId: Schema.Types.ObjectId;
}

const PinnedGroupSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  groupId: { type: Schema.Types.ObjectId, ref: "Group", required: true },
});

const PinnedGroup =
  models.PinnedGroup || model("PinnedGroup", PinnedGroupSchema);

export default PinnedGroup;
