import { Button } from "../ui/Button";
import ProfileDetails from "./ProfileDetails";

import { getServerSession } from "next-auth/next";

import { getUserProfile } from "@/utils/actions/user.action";

export default async function LeftSideBar() {
  const session = await getServerSession();

  const profileData = await getUserProfile(session?.user?.email);
  return (
    <section className="flex flex-col items-center justify-center gap-5 rounded-2xl bg-background px-5 py-[30px] dark:bg-dark3">
      <ProfileDetails profileData={profileData} />
      <div>
        <Button className="h3-semibold flex h-11 w-72 items-center justify-center gap-2.5 rounded-md bg-blue text-background">
          Edit Profile
        </Button>
      </div>
    </section>
  );
}
