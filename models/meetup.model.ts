import { Schema, models, model, Document } from "mongoose";

export interface IMeetup extends Document {
  title: string;
  image: string;
  subtitle: string;
  desc: string;
  month: string;
  day: number;
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
  month: {
    type: String,
    required: true,
  },
  day: {
    type: Number,
    required: true,
  },
  jobType: {
    type: [String],
  },
});

const Meetup = models.Meetup || model("Meetup", MeetupSchema);

export default Meetup;
