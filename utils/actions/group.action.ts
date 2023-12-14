"use server";

import { getServerSession } from "next-auth";

import Group from "@/models/group.model";
import UserModel from "@/models/User";
import dbConnect from "@/utils/mongooseConnect";
import { FilterQuery } from "mongoose";
import { NewGroup, UpdateGroup } from "./shared.types";
import { revalidatePath } from "next/cache";

export async function createGroup(params: NewGroup) {
  try {
    await dbConnect();
    // get the current user
    const currentUser: any = await getServerSession();
    const { email } = currentUser?.user;
    const User = await UserModel.findOne({ email });
    const { title, coverUrl, groupUrl, description, admins, members } = params;
    const parsedAdmins = JSON.parse(admins);
    const parseMembers = JSON.parse(members);
    const activities = [];
    for (let i = 0; i < parseMembers.length; i++) {
      activities.push({
        date: new Date(),
        activityType: "new_member",
      });
    }
    const group = await Group.create({
      title,
      coverUrl,
      groupUrl,
      userId: User?._id,
      description,
      admins: parsedAdmins,
      members: parseMembers,
      activity: activities,
    });
    if (group) {
      return JSON.stringify({
        success: true,
        message: "Group created successfully!",
        id: group._id,
      });
    } else {
      throw new Error("Failed to create a group.");
    }
  } catch (error) {
    console.log(error);
    return JSON.stringify({
      success: false,
      message: "An error occurred while creating the group.",
    });
  }
}

export async function getGroupById(groupId: string) {
  try {
    await dbConnect();
    const group = await Group.findById(groupId)
      .populate("userId")
      .populate("admins")
      .populate("members");

    if (group) {
      return { success: true, data: group };
    } else {
      throw new Error("Group not found.");
    }
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "An error occurred while retrieving the group.",
    };
  }
}

export async function joinGroup(groupId: string) {
  try {
    await dbConnect();
    const user = await getServerSession();
    const { email } = user?.user ?? { email: undefined };
    const userObj = await UserModel.find({ email });
    const group = await Group.findById(groupId);

    if (group) {
      if (group.members.includes(userObj[0]._id)) {
        return { success: false, message: "Member is already in the group." };
      }

      group.members.push(userObj[0]._id);
      group.activity.push({
        date: new Date(),
        activityType: "new_member",
      });

      await group.save();
      revalidatePath(`groups/${groupId}`);

      return { success: true };
    } else {
      throw new Error("Group not found.");
    }
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: "An error occurred while joining the group.",
    };
  }
}

export async function isMember(groupId: string) {
  try {
    await dbConnect();
    const user = await getServerSession();
    const { email } = user?.user ?? { email: undefined };
    const userObj = await UserModel.findOne({ email });
    const group = await Group.findById(groupId);

    if (group) {
      const isMember = group.members.includes(userObj?._id);

      return { success: true, isMember };
    }
    revalidatePath(`groups/${groupId}`);

    return { success: false, isMember: false };
  } catch (error) {
    return { success: false, error };
  }
}

export async function leaveGroup(groupId: string) {
  try {
    await dbConnect();
    const user = await getServerSession();
    const { email } = user?.user ?? { email: undefined };
    const userObj = await UserModel.find({ email });
    const group = await Group.findById(groupId);

    if (group) {
      const memberIndex = group.members.indexOf(userObj[0]._id);
      if (memberIndex === -1) {
        return { success: false, message: "Member is not in the group." };
      }

      group.members.splice(memberIndex, 1);

      await group.save();
      revalidatePath(`groups/${groupId}`);
      return { success: true };
    } else {
      throw new Error("Member not found.");
    }
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: "An error occurred while leaving the group.",
    };
  }
}

export async function updateGroup(groupId: any, params: UpdateGroup) {
  const { title, coverUrl, groupUrl, description, admins, members } = params;
  const currentUser: any = await getServerSession();
  const { email } = currentUser?.user;
  const User = await UserModel.findOne({ email });
  const parsedAdmins = JSON.parse(admins);
  const parseMembers = JSON.parse(members);

  try {
    await dbConnect();
    const updatedGroup = await Group.findOneAndUpdate(
      { _id: groupId },
      {
        $set: {
          title,
          coverUrl,
          groupUrl,
          description,
          userId: User?._id,
          admins: parsedAdmins,
          members: parseMembers,
        },
      }
    );

    if (updatedGroup) {
      return { success: true, message: "Group updated successfully" };
    } else {
      throw new Error("Failed to update the group.");
    }
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "An error occurred while updating the group.",
    };
  }
}

export async function deleteGroup(groupId: string) {
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
    return {
      success: false,
      message: "An error occurred while deleting the group.",
    };
  }
}

export async function getUsersBySimilarName(name: string) {
  try {
    await dbConnect();
    const users = await UserModel.find({
      username: { $regex: name, $options: "i" },
    }).select("username");
    return JSON.stringify(users);
  } catch (error) {
    return "[]";
  }
}

export async function getAllGroups(params: {
  search: string;
  category: string;
}) {
  const { search, category } = params;

  try {
    await dbConnect();

    const query: FilterQuery<any> = {};
    if (search) {
      query.$or = [
        { title: new RegExp(search, "i") },
        { desc: new RegExp(search, "i") },
      ];
    }

    const baseAggregation = [
      { $match: query },
      {
        $project: {
          title: true,
          coverUrl: true,
          groupUrl: true,
          description: true,
          userId: true,
          ...(category === "newest" && { createdAt: true }),
          ...(category === "fastestgrowing" && {
            newMembers: { $size: "$activity" },
          }),
          ...(category === "popular" && { count: { $size: "$members" } }),
        },
      },
      {
        $lookup: {
          from: "users",
          localField: "userId",
          foreignField: "_id",
          as: "userData",
        },
      },
      { $unwind: "$userData" },
      {
        $lookup: {
          from: "posts",
          let: { groupId: "$_id" },
          pipeline: [
            { $match: { $expr: { $eq: ["$groupId", "$$groupId"] } } },
            { $limit: 1 },
          ],
          as: "post",
        },
      },
      { $unwind: "$post" },
    ];

    let sortField = {};
    if (category === "popular") {
      sortField = { count: -1 };
    }
    if (category === "newest") {
      sortField = { createdAt: -1 };
    }
    if (category === "fastestgrowing") {
      sortField = { newMembers: -1 };
    }

    const groups = await Group.aggregate([
      ...baseAggregation,
      ...(Object.keys(sortField).length ? [{ $sort: sortField }] : []),
    ]);

    return { groups };
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function findById(admins: any) {
  try {
    await dbConnect();
    const users = await UserModel.find({
      _id: { $in: admins },
    }).select("username");
    return JSON.stringify(users);
  } catch (error) {
    return "[]";
  }
}

export async function findAllGroups() {
  try {
    await dbConnect();
    const groups = await Group.find({});
    return JSON.stringify(groups);
  } catch (error) {
    return "[]";
  }
}

export async function getNewestGroups() {
  try {
    await dbConnect();
    const groups = await Group.find({})
      .sort({ createdAt: -1 })
      .populate("userId");
    return { success: true, groups };
  } catch (error) {
    console.log(error);

    return {
      success: false,
      groups: [],
    };
  }
}

export async function getMostPopularGroups() {
  try {
    await dbConnect();
    const sorted = await Group.aggregate([
      {
        $project: {
          // add a field to the results, called "count" which is the "size" of the "members" array
          count: { $size: "$members" },
          title: true,
          coverUrl: true,
          groupUrl: true,
          description: true,
        },
      },
      { $sort: { count: -1 } }, // sort descending
      { $limit: 3 }, // only grab 3
    ]);

    return sorted;
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "An error occurred while retrieving the group.",
    };
  }
}

export async function getFastestGrowingGroups() {
  try {
    await dbConnect(); // Connect to the database

    const currentDate = new Date();
    const startDate = new Date(currentDate);
    startDate.setDate(startDate.getDate() - 7);

    const group = await Group.aggregate([
      {
        $unwind: "$activity",
      },
      {
        $match: {
          "activity.date": { $gte: startDate, $lte: currentDate },
          "activity.activityType": "new_member",
        },
      },
      {
        $group: {
          _id: "$_id",
          newMembers: { $sum: 1 },
          groupUrl: { $first: "$groupUrl" },
          title: { $first: "$title" },
          description: { $first: "$description" },
        },
      },
      {
        $sort: { newMembers: -1 },
      },
      {
        $limit: 3,
      },
    ]);
    return group;
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: "An error occurred while retrieving the group.",
    };
  }
}
