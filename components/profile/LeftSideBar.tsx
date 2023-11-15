import ProfileDetails from "./ProfileDetails";
import Image from "next/image";
import { getServerSession } from "next-auth/next";

import { getUserProfile } from "@/utils/actions/user.action";

export default async function LeftSideBar() {
  const session = await getServerSession();

  const profileData = await getUserProfile(session?.user?.email);
  return (
    <section className="flex flex-col items-center justify-center gap-5 rounded-2xl bg-background px-5 py-[30px] dark:bg-dark3">
      <div className="relative h-24 w-24 rounded-full bg-yellow30">
        <Image
          className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2"
          src="/ExampleAvatar.png"
          alt="profile"
          width="80"
          height="80"
        />
      </div>
      <ProfileDetails profileData={profileData} />
    </section>
  );
}
