import ProfileDetails from "./ProfileDetails";
import { ImageFallback as Image } from "@/components/shared/ImageFallback";

import { getCurrentUser } from "@/utils/actions/user.action";

export default async function LeftSideBar() {
  const profileData = await getCurrentUser(["followers"]);

  return (
    <section className="flex-center rounded-2xl bg-background p-5 dark:bg-dark3">
      <article className="flex-center w-[295px] flex-col gap-5 bg-background px-5 py-10 dark:bg-dark3">
        <div className="relative h-24 w-24 rounded-full border-4 border-dark3 bg-yellow30">
          <Image
            className=" rounded-full"
            src={profileData?.profileImage}
            fallback="/ExampleAvatar.png"
            alt="profile"
            fill
          />
        </div>
        <ProfileDetails JSONProfileData={JSON.stringify(profileData)} />
      </article>
    </section>
  );
}
