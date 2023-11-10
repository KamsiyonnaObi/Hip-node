import { StartInterview } from "@/components";
import React from "react";
// import { getServerSession } from "next-auth/next";

// import { getUserProfile } from "@/utils/actions/user.action";

export default async function Profile() {
  // const session = await getServerSession();

  // const data = await getUserProfile(session?.user?.email);

  return (
    <section className="grid grid-row-6 gap-[1.25rem] md:grid-cols-3 md:grid-rows-12 md:gap-5 max-w-[1360px] md:max-h-[760px] md:mx-auto mt-5">
      {/* Admin */}
      <section className="bg-yellow w-[20.9375rem] mx-auto row-span-6 order-1">
        <div className="h-[40.5rem] md:h-0 text-white">Admin</div>
      </section>
      {/* Start Interview */}
      <section className="bg-red w-[20.9375rem] mx-auto order-2 md:order-3 row-span-2">
        <div className="h-[8rem] md:h-0 text-white">
          <StartInterview />
        </div>
      </section>
      {/* Bar */}
      <section className="bg-blue w-[20.9375rem] mx-auto order-3 md:order-2 md:h-[80px] row-span-1">
        <div className="h-[7.5rem] text-white md:h-0">Bar</div>
      </section>
      {/* Post */}
      <section className="bg-green w-[20.9375rem] mx-auto order-4 md:order-3 row-span-5">
        <div className="h-[8.25rem] md:h-0 text-white">Post</div>
      </section>
      {/* Meetups */}
      <section className="bg-black w-[20.9375rem] mx-auto order-5 md:hidden">
        <div className="h-[20.5rem] md:h-0 text-white">
          <p className="text-white">Meetups</p>
        </div>
      </section>
      {/* Podcasts */}
      <section className="bg-cyan-200 w-[20.9375rem] mx-auto order-6 row-span-4">
        <div className="h-[33.25rem] md:h-0 text-black">Podcasts</div>
      </section>
    </section>
  );
}
