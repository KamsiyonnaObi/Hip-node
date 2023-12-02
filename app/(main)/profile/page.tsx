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
    <main className="">
      <div className="xs:max-w-[320px] mx-auto mt-5 grid w-full max-w-[335px] grid-cols-1 justify-center gap-[1.25rem] sm:max-w-[550px] md:max-w-[1100px] md:grid-cols-[30%_auto] lg:max-w-[1400px] lg:grid-cols-[auto_52%_auto]">
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
          <section className="flex flex-col gap-[1.25rem] max-md:overflow-hidden">
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
                showEdit={undefined}
                hasLiked={false}
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
    </main>
  );
}
