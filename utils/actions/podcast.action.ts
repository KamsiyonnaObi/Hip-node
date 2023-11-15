"use server";

import UserModel from "@/models/User";
import Podcast, { IPodcast } from "@/models/podcast.model";
import dbConnect from "@/utils/mongooseConnect";
import { getServerSession } from "next-auth";

export async function createPodcast(params: Partial<IPodcast>) {
  try {
    await dbConnect();
    const currentUser: any = await getServerSession();
    const { email } = currentUser?.user;
    const User = await UserModel.findOne({ email });
    const userId = User?._id;
    const { title, desc, image, audioPath, type, episode } = params;

    const podcast = await Podcast.create({
      title,
      desc,
      userId,
      image,
      audioPath,
      type,
      episode,
    });

    return podcast;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getPodcast(podcastId: number) {
  try {
    await dbConnect();
    const podcast = await Podcast.findById(podcastId).populate("userId");
    return podcast;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getAllPodcasts(params: any) {
  try {
    await dbConnect();

    const podcast = await Podcast.find({})
      .populate("userId")
      .sort({ createdAt: -1 });
    return { podcast };
  } catch (error) {
    console.log(error);
    throw error;
  }
}

// TODO, might not be needed (no edit functionality in figma)
export async function updatePodcast(params: Partial<IPodcast>) {
  try {
    await dbConnect();
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function deletePodcast(podcastId: number) {
  try {
    await dbConnect();
    const deletedPodcast = await Podcast.findByIdAndDelete(podcastId);
    return deletedPodcast;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
