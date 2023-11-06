import { getSession } from "next-auth/react";

import { commentData } from "@/constants/dummy";
import { getPostById, getPostsByUserId } from "@/utils/actions/post.action";
import mongoose from "mongoose";
import {
  ActionBar,
  GroupPostDate,
  MyProfile,
  MoreFrom,
  OpenedPost,
  PostDate,
  Thread,
} from "@/components";

const Page = async ({ params }: { params: { slug: string } }) => {
  // const session = await getSession();
  // const loggedinUserId = session?.user?.id;

  // TODO: Replace them once the session is working properly.
  const { ObjectId } = mongoose.Types;
  const loggedinUserId = new ObjectId("6546f04496a572e837bd18e3");

  const postopen = await getPostById(params.slug);

  if (!postopen.success) return <div>Post Not Found</div>;
  const {
    _id,
    title,
    tags,
    content,
    userId,
    groupId,
    createdAt,
    image,
    likes,
    comments,
    shares,
    reports,
  } = postopen.data;
  console.log(postopen.data);

  const morePosts = await getPostsByUserId(userId._id, postopen.data._id);
  const posts = morePosts.data;

  return (
    <article className="flex min-h-screen flex-col gap-5 bg-background2 p-5 dark:bg-dark2 md:flex-row md:px-10">
      <section className="w-full md:order-2">
        <OpenedPost image={image} title={title} tags={tags} content={content} />
        <div className="my-5 flex flex-col gap-5 md:hidden">
          <ActionBar
            postId={JSON.stringify(_id)}
            userId={JSON.stringify(loggedinUserId)}
            hasLiked={likes.includes(loggedinUserId)}
            hasCommented={comments.includes(loggedinUserId)}
            hasShared={shares.includes(loggedinUserId)}
            hasReported={reports.includes(loggedinUserId)}
            likes={likes.length}
            comments={comments.length}
            shares={shares.length}
          />
          {/* implement later- show PostDate only if it is your own post */}
          {/* implement later- if group id existed, display GroupPostDate instead */}
          <PostDate username={userId.username} createdAt={createdAt} />
          {/* <GroupPostDate
            username={userId.username}
            createdAt={createdAt}
            groupTitle={groupId.title}
          /> */}
        </div>
        <Thread commentData={commentData} />
      </section>
      <div className="hidden flex-col gap-5 md:order-1 md:flex">
        <ActionBar
          postId={JSON.stringify(_id)}
          userId={JSON.stringify(loggedinUserId)}
          hasLiked={likes.includes(loggedinUserId)}
          hasCommented={comments.includes(loggedinUserId)}
          hasShared={shares.includes(loggedinUserId)}
          hasReported={reports.includes(loggedinUserId)}
          likes={likes.length}
          comments={comments.length}
          shares={shares.length}
        />
        {/* implement later- show PostDate only if it is your own post */}
        {/* implement later- if group id existed, display GroupPostDate instead */}
        <PostDate username={userId.username} createdAt={createdAt} />
        {/* <GroupPostDate
          username={userId.username}
          createdAt={createdAt}
          groupTitle={groupId.title}
        /> */}
      </div>
      <div className="flex flex-col gap-5 md:order-3">
        {/* implement later- if user id is equal to someone you follow, display FollowedProfile and if the user id is equal to someone you are not following, display OtherProfile */}
        <MyProfile user={userId} joinedDate={userId.createdAt} />
        {/* <FollowedProfile user={userId} joinedDate={userId.createdAt} />
        <OtherProfile user={userId} joinedDate={userId.createdAt} /> */}
        <MoreFrom posts={posts} author={userId.username} />
      </div>
    </article>
  );
};

export default Page;
