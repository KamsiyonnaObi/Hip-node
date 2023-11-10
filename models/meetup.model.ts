import { Schema, models, model, Document } from "mongoose";

export interface IMeetup extends Document {
  title: string;
  image: string;
  subtitle: string;
  location: string;
  desc: string;
  month: string;
  day: string;
  jobType: string[];
  userId: Schema.Types.ObjectId;
  createdAt: Date;
}

const MeetupSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  subtitle: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  month: {
    type: String,
    required: true,
  },
  day: {
    type: String,
    required: true,
  },
  jobType: {
    type: [String],
  },
  userId: { type: Schema.Types.ObjectId, ref: "User" },
  createdAt: { type: Date, default: Date.now },
});

const Meetup = models.Meetup || model("Meetup", MeetupSchema);

export default Meetup;
