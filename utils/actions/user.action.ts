"use server";
import dbConnect from "../mongooseConnect";
import UserModel from "@/models/User";

export async function newUser(user: FormData) {
  try {
    await dbConnect();

    // check if user already exists
    const existingUser = await UserModel.findOne({ email: user.get("email") });
    const existingUserByUsername = await UserModel.findOne({
      username: user.get("username"),
    });

    // create user if it doesn't exist
    if (!existingUser || !existingUserByUsername) {
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
