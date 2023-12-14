"use server";

import UserModel from "@/models/User";
import Podcast, { IPodcast } from "@/models/podcast.model";
import dbConnect from "@/utils/mongooseConnect";
import { FilterQuery } from "mongoose";
import { getServerSession } from "next-auth";

export async function createPodcast(params: Partial<IPodcast>) {
  try {
    await dbConnect();
    const currentUser: any = await getServerSession();
    const { email } = currentUser?.user;
    const User = await UserModel.findOne({ email });
    const userId = User?._id;
    const { title, desc, image, audioPath, type, episode, location } = params;

    const podcast = await Podcast.create({
      title,
      desc,
      userId,
      image,
      audioPath,
      type,
      episode,
      location,
    });

    return podcast;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getPodcast(podcastId: string) {
  try {
    await dbConnect();
    const podcast = await Podcast.findById(podcastId).populate("userId");
    return podcast;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getPodcastByUserId(userId: string) {
  try {
    await dbConnect();
    const podcasts = await Podcast.find({
      userId,
    });

    if (podcasts.length > 0) {
      return { success: true, data: podcasts };
    } else {
      return { success: false, data: [] };
    }
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "An error occurred while retrieving the podcasts.",
    };
  }
}

export async function getAllPodcasts(params: { type: string; search: string }) {
  const { type, search } = params;
  const typeArray = type ? type.split(",") : [];
  try {
    await dbConnect();

    const query: FilterQuery<any> = {};
    if (typeArray.length > 0) {
      query.type = { $in: typeArray };
    }

    if (search) {
      query.$or = [
        { title: { $regex: search, $options: "i" } },
        { desc: { $regex: search, $options: "i" } },
      ];
    }

    const podcast = await Podcast.find(query)
      .populate("userId")
      .sort({ createdAt: -1 });
    return { podcast };
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function updatePodcast(params: any) {
  try {
    await dbConnect();
    const {
      title,
      desc,
      image,
      audioPath,
      type,
      episode,
      location,
      podcastId,
    } = params;

    const podcast = await Podcast.findById(podcastId);
    podcast.title = title;
    podcast.desc = desc;
    podcast.image = image;
    podcast.audioPath = audioPath;
    podcast.type = type;
    podcast.episode = episode;
    podcast.location = location;

    await podcast.save();
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function deletePodcast(podcastId: string) {
  try {
    await dbConnect();
    const deletedPodcast = await Podcast.findByIdAndDelete(podcastId);
    return deletedPodcast;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
