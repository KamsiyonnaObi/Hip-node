import mongoose, { Schema, Model } from "mongoose";
import { IUser } from "@/types/mongoose";

const userSchema: Schema = new Schema<IUser>({
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    minlength: 3,
  },
  email: {
    type: String,
    unique: true,
    trim: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
  },
});

const UserModel: Model<IUser> =
  mongoose.models.User || mongoose.model<IUser>("User", userSchema);

export default UserModel;
