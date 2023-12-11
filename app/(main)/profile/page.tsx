import { Meetups, StartInterview } from "@/components";
import LeftSideBar from "@/components/profile/LeftSideBar";
import ProfileNavigation from "@/components/profile/ProfileNavigation";

import React from "react";

export default async function Profile() {
  return (
    <main className="xs:max-w-[320px] mx-auto mt-5 grid w-full max-w-[335px] grid-cols-1 justify-center gap-[1.25rem] sm:max-w-[550px] md:max-w-[1100px] md:grid-cols-[30%_auto] lg:max-w-[1400px] lg:grid-cols-[15%_56%_auto]">
      {/* Profile */}
      <section className="md:col-start-1 md:row-span-2 md:row-start-1">
        <LeftSideBar />
      </section>
      {/* Start Your interview */}
      <section className="md:col-start-2 md:row-start-1 lg:col-start-3">
        <div>
          <StartInterview />
        </div>
      </section>

      {/* Profile Navigation */}

      <section className=" md:column-start-2 flex flex-col gap-[1.25rem] md:row-auto lg:row-span-2 lg:row-start-1">
        <ProfileNavigation />
      </section>

      {/* Meetups */}
      <section className="md:hidden">
        <Meetups />
      </section>

      {/* Performance */}
      <section className="hidden lg:col-start-3 lg:row-start-2 lg:block">
        <div>
          <div>Performance</div>
        </div>
      </section>
    </main>
  );
}
