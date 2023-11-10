import { ObjectId } from "mongoose";
import { DefaultSession } from "next-auth";

declare module "next-auth" {
  export interface Session {
    user?: {
      id: ObjectId; // add id property
    } & DefaultSession["user"];
  }
}
