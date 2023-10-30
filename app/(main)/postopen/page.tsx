import MoreFrom from "@/components/home/MoreFrom";
import PostDate from "@/components/home/PostDate";
import ActionBar from "@/components/shared/ActionBar";
import OpenedPost from "@/components/shared/OpenedPost";
import React from "react";
import MyProfile from "@/components/home/MyProfile";
import { Thread } from "@/components/home/Thread";
import { commentData } from "@/constants/dummy";

const page = () => {
  return (
    <article className="flex min-h-screen flex-col gap-5 bg-background2 p-5 dark:bg-dark2 md:flex-row md:px-10">
      <section className="w-full md:order-2">
        <OpenedPost />
        <Thread commentData={commentData} />
      </section>
      <div className="flex flex-col gap-5 md:order-1">
        <ActionBar />
        {/* implement later- if group id existed, display GroupPostDate instead */}
        <PostDate />
      </div>
      <div className="flex flex-col gap-5 md:order-3">
        {/* implement later- if user id is equal to someone you follow, display FollowedProfile and if the user id is equal to someone you are not following, display OtherProfile */}
        <MyProfile />
        <MoreFrom />
      </div>
    </article>
  );
};

export default page;
