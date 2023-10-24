"use server";

import Interview, { IInterview } from "@/models/interview.model";
import dbConnect from "@/utils/mongooseConnect";

export async function createInterview(params: Partial<IInterview>) {
  try {
    await dbConnect();
    const { title, desc, userId, image, revenue, updates, website, tags } =
      params;

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

    return interview;
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
