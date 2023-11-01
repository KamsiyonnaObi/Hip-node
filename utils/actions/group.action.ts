"use server";

import { getServerSession } from "next-auth";

import Group, { IGroup } from "@/models/group.model";
import UserModel from "@/models/User";
import dbConnect from "@/utils/mongooseConnect";

export async function createGroup(params: Partial<IGroup>) {
  try {
    await dbConnect();
    // get the current user
    const currentUser: any = await getServerSession();
    const {email} = currentUser?.user;
    const User = await UserModel.findOne({email});

    const { title, createdAt, coverUrl, groupUrl, description } = params;

    const group = await Group.create({
        title,
        coverUrl,
        groupUrl,
        userId:User?._id,
        createdAt,
        description,
        
    });
    if (group) {
      return JSON.stringify({ success: true, message: "Group created successfully!" });
    } else {
      throw new Error("Failed to create a group.");
    }
  } catch (error) {
    console.log(error);
    return { success: false, message: "An error occurred while creating the group." };
  }
  
}

export async function getGroupById(groupId: number) {
  try {
    await dbConnect();
    const group = await Group.findById(groupId);

    if (group) {
      return { success: true, data: group };
    } else {
      throw new Error("Group not found.");
    }
  } catch (error) {
    console.log(error);
    return { success: false, message: "An error occurred while retrieving the group." };
  }
}



export async function deleteGroup(groupId: number) {
  try {
    await dbConnect();
    const deletedGroup = await Group.findByIdAndDelete(groupId);
    
    if (deletedGroup) {
      return { success: true, message: "Group deleted successfully" };
    } else {
      throw new Error("Failed to delete the group.");
    }
  } catch (error) {
    console.log(error);
    return { success: false, message: "An error occurred while deleting the group." };
  }
}

