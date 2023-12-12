"use server";

import UserModel from "@/models/User";
import Interview, { IInterview } from "@/models/interview.model";
import dbConnect from "@/utils/mongooseConnect";
import { FilterQuery } from "mongoose";
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

    return interview;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getInterview(InterviewId: string) {
  try {
    await dbConnect();
    const interview = await Interview.findById(InterviewId).populate("userId");

    if (!interview) {
      notFound();
    }
    return interview as IInterview;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getInterviewByUserId(userId: string) {
  try {
    await dbConnect();
    const interview = await Interview.find({
      userId,
    });

    if (interview.length > 0) {
      return { success: true, data: interview };
    } else {
      return { success: false, data: [] };
    }
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "An error occurred while retrieving the interview.",
    };
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

export async function getAllInterviews(params: {
  tags: string;
  search: string;
}) {
  const { tags, search } = params;
  const tagArray = tags ? tags.split(",") : [];
  try {
    await dbConnect();

    const query: FilterQuery<any> = {};

    if (tagArray.length > 0) {
      query.tags = { $in: tagArray };
    }

    if (search) {
      query.$or = [
        { title: { $regex: search, $options: "i" } },
        { desc: { $regex: search, $options: "i" } },
      ];
    }

    const interviews = await Interview.find(query)
      .populate("userId")
      .sort({ createdAt: -1 });

    return { interviews: JSON.stringify(interviews) };
  } catch (error) {
    console.log(error);
    throw error;
  }
}
