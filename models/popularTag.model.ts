import { Schema, models, model, Document } from "mongoose";

export interface IPopularTag extends Document {
  title: string;
  image: string;
  postNum: string;
  desc: string;
}

const PopularTagSchema = new Schema({
  title: { type: String, required: true },
  image: { type: String },
  postNum: { type: String, required: true },
  desc: { type: String, required: true },
});

const PopularTag = models.PopularTag || model("PopularTag", PopularTagSchema);

export default PopularTag;
