import React from "react";
import { getServerSession } from "next-auth/next";

import { getUserProfile } from "@/utils/actions/user.action";

export default async function Profile() {
  const session = await getServerSession();

  const data = await getUserProfile(session?.user?.email);

  return (
    <section className="flex h-screen justify-center">
      <div>
        <p>Hello Hello!</p>
        <p> This is {data?.name}'s Profile</p>
      </div>
    </section>
  );
}
