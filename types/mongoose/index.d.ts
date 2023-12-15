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
  website: string;
  twitter: string;
  facebook: string;
  instagram: string;
  points: number;
  following: Schema.Types.ObjectId[];
  followers: Schema.Types.ObjectId[];
  likedPosts: Schema.Types.ObjectId[];
  commentedPosts: Schema.Types.ObjectId[];
  sharedPosts: Schema.Types.ObjectId[];
  pinnedGroups: Schema.Types.ObjectId[];
  reportedPosts: Schema.Types.ObjectId[];
  myPosts: Schema.Types.ObjectId[];

  checkPassword: (password: string | Buffer) => Promise<boolean>;
}
