import { Schema } from "mongoose";

export interface IUser {
  _id: Schema.Types.ObjectId;
  username: string;
  email: string;
  password: string;
  profileImage: string;
  bannerImage: string;
  fullName: string;
  occupation: string;
  businessType: string;
  businessStage: string;
  codingLevel: string;
  bio: string;
  socialMedia: string;
  points: number;
  following: Schema.Types.ObjectId[];
  followers: Schema.Types.ObjectId[];

  checkPassword: (password: string | Buffer) => Promise<boolean>;
}
