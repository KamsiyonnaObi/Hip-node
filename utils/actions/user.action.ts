"use server";
import { ObjectId } from "mongoose";
import { getServerSession } from "next-auth";

import { ProfileSchema } from "@/components/profile/EditProfile";
import dbConnect from "../mongooseConnect";
import UserModel from "@/models/User";
import { revalidatePath } from "next/cache";

export async function newUser(user: FormData) {
  try {
    await dbConnect();

    // check if user already exists
    const existingUser = await UserModel.findOne({
      $or: [{ email: user.get("email") }, { username: user.get("username") }],
    });

    // create user if it doesn't exist
    if (!existingUser) {
      await UserModel.create({
        email: user.get("email"),
        password: user.get("password"),
        username: user.get("username"),
        businessStage: user.get("stage"),
        codingLevel: user.get("codingLevel"),
        businessType: user.get("interests"),
      });

      return { status: "success" };
    }

    return { status: "already exists" };
  } catch (error) {
    return { status: "error" };
  }
}

// user action to fetch logged in user profile details
export async function getUserProfile(email: string | null | undefined) {
  try {
    await dbConnect();

    const loggedInUser = await UserModel.findOne({ email });

    if (loggedInUser) {
      const userObj = {
        id: loggedInUser._id.toString(),
        name: loggedInUser.username,
        email: loggedInUser.email,
        profileImage: loggedInUser.profileImage,
        occupation: loggedInUser.occupation,
        followers: loggedInUser.followers,
        following: loggedInUser.following,
        points: loggedInUser.points,
        bio: loggedInUser.bio,
        website: loggedInUser.website,
        twitter: loggedInUser.twitter,
        facebook: loggedInUser.facebook,
        instagram: loggedInUser.instagram,
      };
      return userObj;
    }

    return null;
  } catch (error) {
    console.log(error);
    return null;
  }
}

// user action to update logged in user profile details
export async function updateProfileDetails(id: string, data: ProfileSchema) {
  try {
    await dbConnect();

    const profileData = await UserModel.findByIdAndUpdate(id, {
      username: data.username,
      bio: data.bio,
      occupation: data.occupation,
      website: data.website,
      twitter: data.twitter,
      facebook: data.facebook,
      instagram: data.instagram,
    });

    if (!profileData) {
      console.log(profileData);
      return "no user found";
    }
    revalidatePath("/profile");
    return "success";
  } catch (error: any) {
    return error.codeName;
  }
}

export async function followAuthor({
  userId,
  hasFollowed,
}: {
  userId: ObjectId;
  hasFollowed: boolean;
}) {
  try {
    dbConnect();
    const currentUser: any = await getServerSession();
    const { email } = currentUser?.user;
    const User = await UserModel.findOne({ email });
    const currentUserId = User?._id;
    if (!currentUserId) {
      throw new Error("Current user ID is undefined");
    }

    let updateQuery = {};
    if (hasFollowed) {
      updateQuery = { $pull: { followers: currentUserId } };
    } else {
      updateQuery = { $addToSet: { followers: currentUserId } };
    }

    const user = await UserModel.findByIdAndUpdate(userId, updateQuery, {
      new: true,
    });
    const followedStatus = user?.followers.includes(currentUserId);
    if (!user) {
      throw new Error("User not found");
    }
    return { status: followedStatus };
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getCurrentUser(populate?: string[]) {
  try {
    await dbConnect();

    // get the current user
    const currentUser: any = await getServerSession();
    const { email } = currentUser?.user;
    const query = UserModel.findOne({ email });
    for (const field of populate ?? []) {
      query?.populate(field);
    }
    const User = await query;
    // Return the user's id
    return User ?? null;
  } catch (error) {
    console.log(error);
    return null;
  }
}
