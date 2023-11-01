"use server";

import { getServerSession } from "next-auth";

import Group, { IGroup } from "@/models/group.model";
import UserModel from "@/models/User";
import dbConnect from "@/utils/mongooseConnect";
import {GroupSchema} from "@/lib/validations"

export async function createGroup(params: Partial<IGroup>) {
  try {
    await dbConnect();
    // get the current user
    const currentUser: any = await getServerSession();
    const {email} = currentUser?.user;
    const User = await UserModel.findOne({email});



    
    const validData = GroupSchema.parse(params);
    console.log(User);
    // return an error if zod validation fails


    const { title, createdAt, coverUrl, groupUrl, description } = params;


    const group = await Group.create({
        title,
        coverUrl,
        groupUrl,
        userId:User?._id,
        createdAt,
        description,
        
    });
    return JSON.stringify(group);

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
