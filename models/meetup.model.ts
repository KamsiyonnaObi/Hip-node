import { Schema, models, model, Document } from "mongoose";

export interface IMeetup extends Document {
  title: string;
  image: string;
  subtitle: string;
  desc: string;
  createdAt: Date;
  jobType: string[];
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
  desc: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  jobType: {
    type: [String],
  },
});

const Meetup = models.Meetup || model("Meetup", MeetupSchema);

export default Meetup;
