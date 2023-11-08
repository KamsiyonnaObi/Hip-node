"use server";
import dbConnect from "../mongooseConnect";
import UserModel from "@/models/User";

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

    const loggedInUser = await UserModel.findOne({ email });

    if (loggedInUser) {
      const userObj = {
        id: loggedInUser._id.toString(),
        name: loggedInUser.username,
        email: loggedInUser.email,
        profileImage: loggedInUser.profileImage,
      };
      return userObj;
    }

    return null;
  } catch (error) {
    console.log(error);
  }
}
