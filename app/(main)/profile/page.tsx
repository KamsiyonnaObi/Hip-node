import { StartInterview } from "@/components";
import React from "react";
// import { getServerSession } from "next-auth/next";

// import { getUserProfile } from "@/utils/actions/user.action";

export default async function Profile() {
  // const session = await getServerSession();

  // const data = await getUserProfile(session?.user?.email);

  return (
    <section className="grid-row-6 md:grid-rows-12 mt-5 grid max-w-[1360px] gap-[1.25rem] md:mx-auto md:max-h-[760px] md:grid-cols-[15%_50%_auto] md:gap-5">
      {/* Admin */}
      <section className="order-1 row-span-6 mx-auto w-full bg-yellow">
        <div className="h-[40.5rem] text-white md:h-0">Admin</div>
      </section>
      {/* Start Interview */}
      <section className="col-start-3 row-span-2 mx-auto w-full bg-red">
        <div className="h-[8rem] text-white md:h-0">
          <StartInterview />
        </div>
      </section>
      {/* Bar */}
      <section className="order-3 row-span-1 mx-auto w-full bg-blue md:order-2 md:h-[80px]">
        <div className="h-[7.5rem] text-white md:h-0">Bar</div>
      </section>
      {/* Post */}
      <section className="order-4 row-span-5 mx-auto w-full bg-green md:order-3">
        <div className="h-[8.25rem] text-white md:h-0">Post</div>
      </section>
      {/* Meetups */}
      <section className="order-5 mx-auto w-full bg-black md:hidden">
        <div className="h-[20.5rem] text-white md:h-0">
          <p className="text-white">Meetups</p>
        </div>
      </section>
      {/* Podcasts */}
      <section className="order-6 row-span-4 mx-auto w-full bg-cyan-200">
        <div className="h-[33.25rem] text-black md:h-0">Podcasts</div>
      </section>
    </section>
  );
}
