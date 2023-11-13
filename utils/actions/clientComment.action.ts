import UserModel from "@/models/User";
import mongoose from "mongoose";
import { getServerSession } from "next-auth";
import dbConnect from "../mongooseConnect";
import Comment from "@/models/comment.model";

export async function createComment({
  text,
  postId,
}: {
  text: string;
  postId: string;
}) {
  try {
    await dbConnect();
    // get the current user
    const currentUser: any = await getServerSession();
    const { email } = currentUser?.user;
    const User = await UserModel.findOne({ email });
    const { ObjectId } = mongoose.Types;
    const ObjPostid = new ObjectId(postId);

    if (!User) {
      throw new Error("User not found");
    }

    const comment = await Comment.create({
      text,
      postId: ObjPostid,
      userId: User?._id,
      createddAt: new Date(),
    });
    console.log(comment);

    return JSON.stringify({
      success: true,
      message: "Comment created successfully!",
      id: comment._id,
    });
  } catch (error) {
    console.log(error);
    return JSON.stringify({
      success: false,
      message: "An error occurred while creating the comment.",
    });
  }
}
