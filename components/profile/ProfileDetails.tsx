import { Schema } from "mongoose";
import Image from "next/image";
import Link from "next/link";

interface userProfileData {
  id: string;
  name: string;
  email: string;
  profileImage: string;
  job: string;
  followers: Schema.Types.ObjectId[];
  following: Schema.Types.ObjectId[];
  points: number;
  bio: string;
}

type Props = { profileData: userProfileData | null };
const ProfileDetails = ({ profileData }: Props) => {
  // format timestamp to months
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

  // Use dummy data for remaining user data
  const dummyProfileData = {
    imgUrl: "/ExampleAvatar.png",
    profileUrl: "/",
    joinedDate: "2-28-2023",
    points: 501,
    bio: "Hey there.. I am AR Jakir! I am here to learn from and support the other members of this community!",
    website: "www.uikit.to",
  };

  return (
    <>
      <div className="relative h-24 w-24 rounded-full bg-yellow30">
        <Image
          className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2"
          src={dummyProfileData.imgUrl}
          alt="profile"
          width="80"
          height="80"
        />
      </div>
      <div className="flex flex-col items-center justify-center">
        <p className="text-secondary2 dark:text-background2">
          {profileData?.name}
        </p>
        <p className="text-secondary3">{profileData?.job}</p>
      </div>
      <Link
        className="h3-semibold flex h-11 w-72 items-center justify-center gap-2.5 rounded-md bg-blue text-background"
        href={dummyProfileData.profileUrl}
      >
        Follow
      </Link>
      <div className="flex items-center justify-center gap-3">
        <p className="text-secondary2 dark:text-background2">
          {`${profileData?.followers.length} Followers`}
        </p>
        <p className="text-secondary2 dark:text-background2">{`${dummyProfileData.points} Points`}</p>
      </div>
      <p className="text-secondary3">{profileData?.bio}</p>
      <p className="text-secondary2 dark:text-background2">
        {dummyProfileData.website}
      </p>
      <p className="text-secondary3">
        Joined {monthsSinceJoined(new Date(dummyProfileData.joinedDate))} months
        ago
      </p>
    </>
  );
};

export default ProfileDetails;
