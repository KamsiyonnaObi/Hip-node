import { Frame, Meetups, StartInterview } from "@/components";
import Post from "@/components/home/Post";
import LeftSideBar from "@/components/profile/LeftSideBar";

import React from "react";
import { getServerSession } from "next-auth/next";

import { getUserProfile } from "@/utils/actions/user.action";

export default async function Profile() {
  const session = await getServerSession();

  const data = await getUserProfile(session?.user?.email);
  const dateOfBirth = new Date(1990, 4, 7);

  return (
    <main className="xs:max-w-[320px] mx-auto mt-5 flex w-full max-w-[335px] justify-center sm:max-w-[550px] md:max-w-[500px] xl:max-w-[1100px] lg:max-w-[950px]">
      <div className="grid grid-cols-1 gap-[1.25rem] md:grid-cols-[30%_auto] lg:grid-cols-[auto_52%_auto]">
        {/* Profile */}
        <section className="md:col-start-1 md:row-span-2 md:row-start-1">
          <LeftSideBar profileData={data} />
        </section>
        {/* Start Your interview */}
        <section className="md:col-start-2 md:row-span-1 lg:col-start-3">
          <div>
            <StartInterview />
          </div>
        </section>

        {/* Bar & Post */}
        <div className=" md:column-start-2 flex flex-col gap-[1.25rem] md:row-auto lg:row-span-2 lg:row-start-1">
          <section className="">
            <Frame />
          </section>
          <section className="flex w-fit flex-col gap-[1.25rem] max-md:overflow-hidden">
            <div>
              <Post
                postImage={""}
                title={""}
                tags={[]}
                avatar={""}
                username={""}
                createdAt={dateOfBirth}
                views={0}
                likes={0}
                comments={0}
                _id={""}
              />
            </div>
          </section>
        </div>

        {/* Meetups */}
        <section className="md:hidden">
          <Meetups />
        </section>

        {/* Performance */}
        <section className=" lg:col-start-3 lg:row-start-2 lg:block">
          <div>
            <div>Performance</div>
          </div>
        </section>
      </div>
      {/* xs:max-w-[320px] mx-auto sm:max-w-[550px] md:max-w-[700px] xl:max-w-[1100px] lg:max-w-[950px] */}
    </main>
  );
}
