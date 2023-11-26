import { Schema } from "mongoose";

export interface userToken {
  userId: string;
  iat: number;
}

export interface userProfileData {
  id: string;
  name: string;
  email: string;
  profileImage: string;
  job: string;
  followers: Schema.Types.ObjectId[];
  following: Schema.Types.ObjectId[];
  points: number;
  bio: string;
  website: string;
  twitter: string;
  facebook: string;
  instagram: string;
}

export interface ActionBarLink {
  label: string;
  icon: any;
  value?: number;
  status: boolean;
}

export interface commentDataType {
  name: string;
  createdAt: string;
  updatedAt: string;
  imgUrl: string;
  text: string;
  reply: {
    name: string;
    createdAt: string;
    updatedAt: string;
    imgUrl: string;
    text: string;
  }[];
}
