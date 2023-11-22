"use server";

import UserModel from "@/models/User";
import Interview, { IInterview } from "@/models/interview.model";
import dbConnect from "@/utils/mongooseConnect";
import { getServerSession } from "next-auth";
import { notFound } from "next/navigation";

export async function createInterview(params: Partial<IInterview>) {
  try {
    await dbConnect();

    // get the userID from the session
    const currentUser: any = await getServerSession();
    const { email } = currentUser?.user;
    const User = await UserModel.findOne({ email });
    const userId = User?._id;
    const { title, desc, image, revenue, updates, website, interviewTags } =
      params;

    const interview = await Interview.create({
      title,
      desc,
      userId,
      image,
      revenue,
      updates,
      website,
      interviewTags,
    });

    return interview._id.toString();
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getInterview(InterviewId: string) {
  try {
    await dbConnect();
    const interview = await Interview.findById(InterviewId);
    if (!interview) {
      notFound();
    }
    return interview;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function updateInterview(params: any) {
  try {
    await dbConnect();
    const {
      title,
      desc,
      image,
      revenue,
      updates,
      website,
      interviewTags,
      interviewId,
    } = params;

    const interview = await Interview.findById(interviewId);
    interview.title = title;
    interview.desc = desc;
    interview.image = image;
    interview.revenue = revenue;
    interview.updates = updates;
    interview.website = website;
    interview.interviewTags = interviewTags;

    await interview.save();
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function deleteInterview(InterviewId: string) {
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
