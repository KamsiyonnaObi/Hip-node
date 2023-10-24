"use server";

import Podcast, { IPodcast } from "@/models/podcast.model";
import dbConnect from "@/utils/mongooseConnect";

export async function createPodcast(params: Partial<IPodcast>) {
  try {
    await dbConnect();
    const { title, desc, userId, image, audioPath } = params;

    const podcast = await Podcast.create({
      title,
      desc,
      userId,
      image,
      audioPath,
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
    const podcast = await Podcast.findById(podcastId);
    return podcast;
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
