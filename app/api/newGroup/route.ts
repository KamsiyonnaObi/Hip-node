import { NextResponse } from "next/server";
import Group from "@/models/group.model";
import dbConnect from "@/utils/mongooseConnect";
import { schema } from "@/utils/validations/groupValidator";

export async function POST(request: Request) {
  // set data to send to zod
  const formData = await request.formData();
  const title = formData.get("title");
  const image = formData.get("image");
  const userId = formData.get("userId");
  const createdAt = formData.get("createdAt");
  const descTitle = formData.get("descTitle");
  const desc = formData.get("desc");
  const admins = formData.get("admins");
  const members = formData.get("members");

  try {
    schema.parse({
        title,
        image,
        userId,
        createdAt,
        descTitle,
        desc,
        admins,
        members,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ response: "invalid inputs" });
  }


  try {
    // connect to DB
    await dbConnect();

    const groupModel = await Group.create({
        title,
        image,
        userid: userId,
        createdat: createdAt,
        desctitle: descTitle,
        desc,
        admins,
        members,
    });
} catch {}}