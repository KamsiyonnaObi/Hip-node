import ProfileDetails from "./ProfileDetails";
import { ImageFallback as Image } from "@/components/shared/ImageFallback";
import { getServerSession } from "next-auth/next";

import { getUserProfile } from "@/utils/actions/user.action";

export default async function LeftSideBar() {
  const session = await getServerSession();

  const profileData = await getUserProfile(session?.user?.email);
  return (
    <section className="flex-center rounded-2xl bg-background p-5 dark:bg-dark3">
      <article className="flex-center w-[295px] flex-col gap-5 bg-background px-5 py-10 dark:bg-dark3">
        <div className="relative h-24 w-24 rounded-full border-4 border-dark3 bg-yellow30">
          <Image
            className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2"
            src="/ExampleAvatar.png"
            alt="profile"
            width="80"
            height="80"
          />
        </div>
        <ProfileDetails profileData={profileData} />
      </article>
    </section>
  );
}
