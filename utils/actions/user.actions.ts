"use server";

import UserModel from "@/models/User";
import dbConnect from "@/utils/mongooseConnect";

export async function getUsers() {
  await dbConnect();
  const user = await UserModel.find({});
  const res = JSON.stringify(user);

  return res;
}
