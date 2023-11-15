import { Schema, models, model, Document } from "mongoose";

export interface IPodcast extends Document {
  title: string;
  desc: string;
  userId: Schema.Types.ObjectId;
  image: string;
  audioPath: string;
  type: string;
  episode: number;
}

const PodcastSchema = new Schema({
  title: { type: String, required: true },
  desc: { type: String, required: true },
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  image: { type: String, required: true },
  audioPath: { type: String, required: true },
  type: { type: String, required: true },
  episode: { type: Number, required: true },
});

const Podcast = models.Podcast || model("Podcast", PodcastSchema);

export default Podcast;
