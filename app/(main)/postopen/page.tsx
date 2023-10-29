import MoreFrom from "@/components/home/MoreFrom";
import PostDate from "@/components/home/PostDate";
import Profile from "@/components/home/Profile";
import ActionBar from "@/components/shared/ActionBar";
import OpenedPost from "@/components/shared/OpenedPost";
import React from "react";

const page = () => {
  return (
    <article className="flex min-h-screen flex-col gap-5 bg-background2 p-5 dark:bg-dark2 md:flex-row md:px-10">
      <section className="w-full md:order-2">
        <OpenedPost />
      </section>
      <div className="flex flex-col gap-5 md:order-1">
        <ActionBar />
        <PostDate />
      </div>
      <div className="flex flex-col gap-5 md:order-3">
        <Profile />
        <MoreFrom />
      </div>
    </article>
  );
};

export default page;
