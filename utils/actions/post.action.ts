"use server";

import mongoose, { FilterQuery, ObjectId } from "mongoose";

import Post, { IComments, IPost } from "@/models/post.model";
import dbConnect from "@/utils/mongooseConnect";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";

import UserModel from "@/models/User";
import { getCurrentUser } from "./user.action";

export async function createPost(params: any) {
  try {
    await dbConnect();
    // get the userID from the session
    const currentUser: any = await getServerSession();
    const { email } = currentUser?.user;
    const User = await UserModel.findOne({ email });
    const userId = User?._id;

    const { title, content, image, tags, groupId } = params;

    const post = await Post.create({
      title,
      content,
      image,
      tags,
      userId,
      groupId,
    });

    revalidatePath("/profile");
    // return the postID, not the entire Post
    return post._id.toString();
  } catch (error) {
    console.log(error);
    throw new Error("Failed to create a post.");
  }
}

export async function getPostById(postId: string) {
  try {
    await dbConnect();
    const post = await Post.findById(postId)
      .populate("userId")
      .populate("groupId");
    if (post) {
      return { success: true, data: post };
    } else {
      throw new Error("post not found.");
    }
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "An error occurred while retrieving the post.",
    };
  }
}

export async function getPostsByUserId(
  userId: ObjectId | string,
  excludedPostId?: ObjectId
) {
  try {
    await dbConnect();
    const posts = await Post.find({
      userId,
      _id: { $ne: excludedPostId },
    }).populate("tags");

    if (posts.length > 0) {
      return { success: true, data: posts };
    } else {
      return { success: false, data: [] };
    }
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "An error occurred while retrieving the posts.",
    };
  }
}

export async function updatePost(params: Partial<IPost>) {
  try {
    await dbConnect();
    const { title, content, image, tags, groupId, postId } = params;
    const post = await Post.findById(postId);

    post.title = title;
    post.content = content;
    post.image = image;
    post.tags = tags;
    post.groupId = groupId;

    await post.save();
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function deletePost(postId: string) {
  try {
    await dbConnect();
    const deletedPost = await Post.findByIdAndDelete(postId);
    return deletedPost;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getAllPosts(params: { search: string }) {
  const { search } = params;
  try {
    await dbConnect();

    const query: FilterQuery<any> = {};

    if (search) {
      query.$or = [
        { title: { $regex: search, $options: "i" } },
        { content: { $regex: search, $options: "i" } },
      ];
    }

    const posts = await Post.find(query)
      .populate("userId")
      .sort({ createdAt: -1 });
    return { posts };
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function likePost({
  postId,

  hasLiked,
}: {
  postId: string;

  hasLiked: boolean | null;
}) {
  try {
    const user = await getCurrentUser();

    await dbConnect();
    const { ObjectId } = mongoose.Types;
    const id = new ObjectId(postId);
    let updateQuery = {};
    // Remove like if it is already liked
    if (hasLiked) {
      updateQuery = { $pull: { likes: user?._id.toString() } };
    } else {
      updateQuery = { $addToSet: { likes: user?._id.toString() } };
    }

    const post = await Post.findByIdAndUpdate(id, updateQuery, {
      new: true,
    });
    const likedStatus = post.likes.includes(user?._id.toString());

    if (!post) {
      throw new Error("Post not found");
    }
    return { status: likedStatus, number: post.likes.length };
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function commentPost({
  postId,
  userId,
  hasCommented,
}: {
  postId: string;
  userId: string;
  hasCommented: boolean | null;
}) {
  try {
    dbConnect();
    const { ObjectId } = mongoose.Types;
    const id = new ObjectId(postId);
    let updateQuery = {};
    // Remove like if it is already liked
    if (hasCommented) {
      updateQuery = { $pull: { comments: userId } };
    } else {
      updateQuery = { $addToSet: { comments: userId } };
    }

    const post = await Post.findByIdAndUpdate(id, updateQuery, {
      new: true,
    });
    if (!post) {
      throw new Error("Post not found");
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function sharePost({
  postId,
  userId,
  hasShared,
}: {
  postId: string;
  userId: string;
  hasShared: boolean | null;
}) {
  try {
    dbConnect();
    const { ObjectId } = mongoose.Types;
    const id = new ObjectId(postId);
    let updateQuery = {};
    // Remove like if it is already Shared
    if (hasShared) {
      updateQuery = { $pull: { shares: userId } };
    } else {
      updateQuery = { $addToSet: { shares: userId } };
    }

    const post = await Post.findByIdAndUpdate(id, updateQuery, {
      new: true,
    });
    const sharedStatus = post.shares.includes(userId);

    if (!post) {
      throw new Error("Post not found");
    }
    return { status: sharedStatus, number: post.shares.length };
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function reportPost({
  postId,
  selectedReason,
}: {
  postId: string;
  selectedReason: string;
}) {
  try {
    dbConnect();
    const currentUser: any = await getServerSession();
    const { email } = currentUser?.user;
    const User = await UserModel.findOne({ email });
    const currentUserId = User?._id;
    const post = await getPostById(postId);
    post.data.reports.get(selectedReason).push(currentUserId);
    await post.data.save();
    revalidatePath("/?postId=" + postId);
    if (!post) {
      throw new Error("Post not found");
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getPostsByGroupId(id: string) {
  try {
    await dbConnect();
    const posts = await Post.find({ groupId: id })
      .populate("userId")
      .populate("tags")
      .populate("views")
      .populate("likes")
      .populate("comments")
      .populate("createdAt");
    return posts;
  } catch (e) {
    console.log(e);
  }
}

export async function getPostTagsByGroupId(id: string) {
  try {
    await dbConnect();
    const posts = await Post.find({ groupId: id });

    const tags = posts.reduce((allTags, post) => {
      allTags.push(...post.tags);
      return allTags;
    }, [] as string[]);

    const tagCounts = tags.reduce(
      (counts: { [key: string]: any }, tag: string) => {
        counts[tag] = (counts[tag] || 0) + 1;
        return counts;
      },
      {}
    );

    const tagsWithCount = Object.keys(tagCounts).map((tagName) => ({
      name: tagName,
      count: tagCounts[tagName],
    }));

    tagsWithCount.sort((a, b) => b.count - a.count);

    const topTags = tagsWithCount.slice(0, 5);

    return topTags;
  } catch (e) {
    console.error(e);
    throw e;
  }
}

export async function getPopularTags() {
  try {
    await dbConnect();
    const posts = await Post.find({ tags: { $exists: true } });
    const tags = posts.reduce((allTags, post) => {
      allTags.push(...post.tags);
      return allTags;
    }, [] as string[]);

    const tagCounts = tags.reduce(
      (counts: { [key: string]: any }, tag: string) => {
        counts[tag] = (counts[tag] || 0) + 1;
        return counts;
      },
      {}
    );

    const tagsWithCount = Object.keys(tagCounts).map((tagName) => ({
      name: tagName,
      count: tagCounts[tagName],
    }));

    tagsWithCount.sort((a, b) => b.count - a.count);

    const topTags = tagsWithCount;

    return topTags;
  } catch (e) {
    console.error(e);
    throw e;
  }
}

function findCommentOrReply({
  comments,
  commentId,
}: {
  comments: IComments[];
  commentId: string;
}): IComments | null {
  for (const comment of comments) {
    if (comment?._id?.toString() === commentId) {
      return comment;
    }
  }
  return null;
}

export async function addComments({
  postId,
  text,
  commentId,
  parentId,
}: {
  postId: string;
  text: string;
  commentId?: string;
  parentId?: string;
}) {
  await dbConnect();
  // get the userID from the session
  const currentUser: any = await getServerSession();
  const { email } = currentUser?.user;
  const User = await UserModel.findOne({ email });
  const userId = User?._id;
  const name = User?.username;
  const imgUrl = User?.profileImage;
  const post = await Post.findById(postId);
  if (!commentId) {
    post.comments.push({
      userId,
      name,
      imgUrl,
      text,
      createdAt: new Date(),
      likes: [],
    });
  } else if (commentId && !parentId) {
    post.comments.push({
      userId,
      name,
      parentId: commentId,
      imgUrl,
      text,
      createdAt: new Date(),
      likes: [],
    });
  } else {
    post.comments.push({
      userId,
      name,
      parentId,
      imgUrl,
      text,
      createdAt: new Date(),
      likes: [],
    });
  }
  await post.save();
  revalidatePath("/?postId=" + postId);
}

export async function likeComment({
  postId,
  commentId,
  hasLiked,
}: {
  postId: string;
  commentId: string;
  hasLiked?: boolean;
}) {
  try {
    await dbConnect();
    const currentUser: any = await getServerSession();
    const { email } = currentUser?.user;
    const User = await UserModel.findOne({ email });
    const userId = User?._id;

    const post = await Post.findById(postId);
    if (!post) {
      throw new Error("Post not found");
    }

    if (commentId) {
      const target = findCommentOrReply({ comments: post.comments, commentId });
      if (!target) {
        return;
      }

      if (!target.likes) {
        target.likes = [];
      }
      if (hasLiked) {
        // User already liked, remove their ID
        target.likes = target.likes.filter(
          (id) => id.toString() !== userId?.toString()
        );
      } else {
        // User has not liked yet, add their ID
        userId && target.likes.push(userId);
      }
      const likedStatus = userId ? target.likes.includes(userId) : false;
      await post.save();
      await revalidatePath("/?postId=" + postId);
      return {
        status: likedStatus,
      };
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
}
