import React from "react";
import { getServerSession } from "next-auth/next";

import { getUserProfile } from "@/utils/actions/user.action";
import LeftSideBar from "@/components/profile/LeftSideBar";

export default async function Profile() {
  const session = await getServerSession();

  const profileData = await getUserProfile(session?.user?.email);

  return (
    <section className="flex h-screen justify-center">
      <article className="flex flex-col">
        <div>
          <p>Hello Hello!</p>
          <p> This is {profileData?.name}&apos;s Profile</p>
        </div>
        <LeftSideBar profileData={profileData} />
      </article>
    </section>
  );
}
