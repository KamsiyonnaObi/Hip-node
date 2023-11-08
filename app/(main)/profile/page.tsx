import React from "react";
import { getServerSession } from "next-auth/next";

import { getUserProfile } from "@/utils/actions/user.action";
import LeftSideBar from "@/components/profile/LeftSideBar";

export default async function Profile() {
  const session = await getServerSession();

  const data = await getUserProfile(session?.user?.email);

  return (
    <section className="flex h-screen justify-center">
      <div>
        <p>Hello Hello!</p>
        <p> This is {data?.name}&apos;s Profile</p>
      </div>
      <LeftSideBar />
    </section>
  );
}
