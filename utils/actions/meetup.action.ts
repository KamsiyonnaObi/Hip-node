"use server";

import Meetup, { IMeetup } from "@/models/meetup.model";
import dbConnect from "@/utils/mongooseConnect";

export async function createMeetup(params: Partial<IMeetup>) {
  try {
    await dbConnect();
    const { title, image, subtitle, desc, jobType } = params;

    const meetup = await Meetup.create({
      title,
      image,
      subtitle,
      desc,
      jobType,
    });

    return meetup;
  } catch (error) {
    console.log(error);
    throw error;
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
