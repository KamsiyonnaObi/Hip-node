"use server";

import Group, { IGroup } from "@/models/group.model";
import dbConnect from "@/utils/mongooseConnect";

export async function createGroup(params: Partial<IGroup>) {
  try {
    await dbConnect();
    const { title, createdAt, image, descTitle, userId, desc, admins, members } = params;

    const group = await Group.create({
        title,
        image,
        userId,
        createdAt,
        descTitle,
        desc,
        admins,
        members,
    });
    return group;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to create a group.");
  }
}

export async function getGroupById(groupId: number) {
  try {
    await dbConnect();
    const group = await Group.findById(groupId);
    return group;
  } catch (error) {
    console.log(error);
    throw error;
  }
}


export async function deleteGroup(groupId: number) {
  try {
    await dbConnect();
    const deletedGroup = await Group.findByIdAndDelete(groupId);
    return deletedGroup;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
