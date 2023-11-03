import Image from "next/image";
import Link from "next/link";

import { profileData } from "@/constants/dummy";
import FillIcon from "../icons/FillIcon";

function monthsSinceJoined(joinedDate: Date): number {
  const today = new Date();
  const joined = new Date(joinedDate);
  const todayMonth = today.getMonth();
  const joinedMonth = joined.getMonth();
  const months =
    (today.getFullYear() - joined.getFullYear()) * 12 +
    todayMonth -
    joinedMonth;
  return Math.abs(months);
}

const FollowedProfile = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-5 rounded-2xl bg-background px-5 py-[30px] dark:bg-dark3">
      <div className="relative h-24 w-24 rounded-full bg-yellow30">
        <Image
          className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2"
          src={profileData.imgUrl}
          alt="profile"
          width="80"
          height="80"
        />
      </div>
      <div className="flex flex-col items-center justify-center">
        <p className="text-secondary2 dark:text-background2">
          {profileData.name}
        </p>
        <p className="text-secondary3">{profileData.job}</p>
      </div>
      <Link
        className="h3-semibold flex h-11 w-72 items-center justify-center gap-2.5 rounded-md border border-blue20 bg-background text-secondary3  dark:bg-dark3"
        href={profileData.profileUrl}
      >
        Following
      </Link>
      <Link
        className="h3-semibold flex h-11 w-72 items-center justify-center gap-5 rounded-md bg-blue text-background"
        href={profileData.profileUrl}
      >
        <FillIcon.Message />
        Message
      </Link>
      <p className="text-secondary3">
        Joined {monthsSinceJoined(new Date(profileData.joinedDate))} months ago
      </p>
    </section>
  );
};

export default FollowedProfile;
