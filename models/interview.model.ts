import { Schema, models, model, Document } from "mongoose";

export interface IInterview extends Document {
  title: string;
  desc: string;
  userId: Schema.Types.ObjectId;
  createdAt: Date;
  image: string;
  revenue: number;
  updates: number;
  website: string;
  interviewTags: string[];
}

const InterviewSchema = new Schema({
  title: { type: String, required: true },
  desc: { type: String, required: true },
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  createdAt: { type: Date, default: Date.now },
  image: { type: String, required: true },
  revenue: { type: Number, required: true },
  updates: { type: Number, default: 0 },
  website: { type: String, required: true },
  interviewTags: { type: [String] },
});

const Interview = models.Interview || model("Interview", InterviewSchema);

export default Interview;
