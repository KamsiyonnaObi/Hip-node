"use server";

import UserModel from "@/models/User";
import Interview, { IInterview } from "@/models/interview.model";
import dbConnect from "@/utils/mongooseConnect";
import { getServerSession } from "next-auth";

export async function createInterview(params: Partial<IInterview>) {
  try {
    await dbConnect();
    await dbConnect();
    // get the userID from the session
    const currentUser: any = await getServerSession();
    const { email } = currentUser?.user;
    const User = await UserModel.findOne({ email });
    const userId = User?._id;
    const { title, desc, image, revenue, updates, website, tags } = params;

    const interview = await Interview.create({
      title,
      desc,
      userId,
      image,
      revenue,
      updates,
      website,
      tags,
    });

    return interview._id.toString();
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getInterview(InterviewId: number) {
  try {
    await dbConnect();
    const interview = await Interview.findById(InterviewId);
    return interview;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

// TODO, might not be needed (no edit functionality in figma)
export async function updateInterview(params: Partial<IInterview>) {
  try {
    await dbConnect();
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function deleteInterview(InterviewId: number) {
  try {
    await dbConnect();
    const deletedInterview = await Interview.findByIdAndDelete(InterviewId);
    return deletedInterview;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getAllInterviews(params: any) {
  try {
    await dbConnect();

    const interviews = await Interview.find({})
      .populate("userId")
      .sort({ createdAt: -1 });
    return { interviews };
  } catch (error) {
    console.log(error);
    throw error;
  }
}
