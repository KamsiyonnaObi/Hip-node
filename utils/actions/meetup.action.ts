"use server";

import Meetup, { IMeetup } from "@/models/meetup.model";
import dbConnect from "@/utils/mongooseConnect";
import { getServerSession } from "next-auth";
import UserModel from "@/models/User";

export async function createMeetup(params: any) {
  try {
    await dbConnect();
    // get the userID from the session
    const currentUser: any = await getServerSession();
    const { email } = currentUser?.user;
    const User = await UserModel.findOne({ email });

    if (!User) {
      throw new Error("User not found");
    }

    const userId = User?._id;

    const { title, image, subtitle, location, desc, jobType, month, day } =
      params;

    const meetup = await Meetup.create({
      title,
      image,
      subtitle,
      location,
      desc,
      jobType,
      userId,
      month,
      day,
    });

    // return the postID, not the entire Post
    return meetup._id.toString();
  } catch (error) {
    console.log(error);
    throw new Error("Failed to create a post.");
  }
}

export async function getMeetup(meetupId: number) {
  try {
    await dbConnect();
    const meetup = await Meetup.findById(meetupId);
    return meetup;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

// TODO, might not be needed (no edit functionality in figma)
export async function updateMeetup(params: Partial<IMeetup>) {
  try {
    await dbConnect();
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function deleteMeetup(meetupId: number) {
  try {
    await dbConnect();
    const deletedMeetup = await Meetup.findByIdAndDelete(meetupId);
    return deletedMeetup;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getAllMeetups(params: any) {
  const { jobType } = params;
  const jobArray = jobType ? jobType.split(",") : [];

  try {
    await dbConnect();
    let query = {};
    if (jobArray.length > 0) {
      query = { type: { $in: jobArray } };
    }
    const meetups = await Meetup.find({ query })
      .populate("userId")
      .sort({ createdAt: -1 });
    return { meetups };
  } catch (error) {
    console.log(error);
    throw error;
  }
}
