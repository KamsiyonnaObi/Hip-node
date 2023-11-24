import CreatePost from "@/components/home/CreatePost";
import Meetups from "@/components/home/Meetups";
import PinnedGroup from "@/components/home/PinnedGroup";
import PopularTags from "@/components/home/PopularTags";
import PostRender from "@/components/home/PostRender";
import Sidebar from "@/components/home/Sidebar";
import Podcasts from "@/components/Podcasts";
import UserModel from "@/models/User";
import { getServerSession } from "next-auth";
import React, { Suspense } from "react";

export default async function Home({
  searchParams,
}: {
  searchParams: URLSearchParams;
}) {
  const currentUser: any = await getServerSession();
  const { email } = currentUser?.user;
  const User = await UserModel.findOne({ email });
  const currentUserId = User?._id.toString();

  return (
    <main className="page-formatting">
      <section className="flex flex-col md:gap-5">
        <div className="flex md:hidden lg:flex">
          <Sidebar />
        </div>
        <div className="hidden lg:flex">
          <PopularTags />
        </div>
        <div className="hidden lg:flex">
          <PinnedGroup />
        </div>
      </section>
      <section className="flex flex-col gap-5">
        <div className="hidden md:flex lg:hidden">
          <Sidebar small />
        </div>
        <CreatePost />
        <Suspense
          key={JSON.stringify(searchParams)}
          fallback={
            <div className="flex flex-col flex-wrap gap-5 lg:w-[784px] lg:flex-row">
              <div className="h-60 w-[48%] animate-pulse rounded-md bg-black/10"></div>
              <div className="h-60 w-[48%] animate-pulse rounded-md bg-black/10"></div>
              <div className="h-60 w-[48%] animate-pulse rounded-md bg-black/10"></div>
            </div>
          }
        >
          <PostRender
            searchParams={searchParams}
            currentUserId={currentUserId || ""}
          />
        </Suspense>
      </section>
      <section className="flex flex-col gap-5">
        <Meetups />
        <Podcasts />
      </section>
    </main>
  );
}
