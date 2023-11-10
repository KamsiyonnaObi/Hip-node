"use server";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { getServerSession } from "next-auth";

import { IUser } from "@/types/mongoose";
import dbConnect from "../mongooseConnect";
import UserModel from "@/models/User";
import User from "@/models/User";
import mongoose, { ObjectId } from "mongoose";

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

export async function getUserProfile(email: string | null | undefined) {
  try {
    await dbConnect();

    // check if user exists
    const existingUser = (await UserModel.findOne({
      email,
    })) as IUser;

    // check if password is correct
    const isPasswordCorrect = await existingUser?.checkPassword(
      password as string
    );

    // return error if user doesn't exist or password is incorrect
    if (!existingUser || !isPasswordCorrect) {
      return { status: "Email or Password is incorrect" };
    }

    // create a JWT token
    const token = jwt.sign(
      { id: existingUser._id },
      (process.env.JWT_SECRET as string) || "",
      {
        expiresIn: "1d",
      }
    );

    // set cookie
    cookies().set("token", token);

    // return success
    return { status: "success" };
  } catch (error) {
    return { status: "Something went wrong" };
  }
}

export async function getCurrentUserId() {
  try {
    await dbConnect();

    // get the current user
    const currentUser: any = await getServerSession();
    const { email } = currentUser?.user;
    const User = await UserModel.findOne({ email });

    // Return the user's id
    return User?._id ?? null;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function followAuthor({
  userId,
  currentUserId,
  hasFollowed,
}: {
  userId: ObjectId;
  currentUserId: string;
  hasFollowed: boolean;
}) {
  try {
    dbConnect();
    // const { ObjectId } = mongoose.Types;
    let updateQuery = {};
    if (hasFollowed) {
      updateQuery = { $pull: { followers: currentUserId } };
    } else {
      updateQuery = { $addToSet: { followers: currentUserId } };
    }

    const user = await User.findByIdAndUpdate(userId, updateQuery, {
      new: true,
    });
    // const followedStatus = user?.followers.includes(currentUserIdObj);

    if (!user) {
      throw new Error("User not found");
    }
    return { status: true };
  } catch (error) {
    console.log(error);
    throw error;
  }
}
