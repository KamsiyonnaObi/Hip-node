import Image from "next/image";
import Link from "next/link";
type Props =
  | {
      id: string;
      name: string;
      email: string;
      profileImage: string;
      job: string;
      followers: [];
      following: [];
      points: number;
      bio: string;
    }
  | null
  | undefined;
const LeftSideBar = (props: Props) => {
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

  const profileData = {
    name: "AR. Jakir",
    job: "User Interface Designer",
    imgUrl: "/ExampleAvatar.png",
    profileUrl: "/",
    joinedDate: "2-28-2023",
    followers: 33,
    points: 501,
    following: 47,
    bio: "Hey there.. I am AR Jakir! I am here to learn from and support the other members of this community!",
    website: "www.uikit.to",
    socials: ["Twitter", "Facebook", "Instagram"],
  };
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
        <p className="text-secondary2 dark:text-background2">{props?.name}</p>
        <p className="text-secondary3">{props?.job}</p>
      </div>
      <Link
        className="h3-semibold flex h-11 w-72 items-center justify-center gap-2.5 rounded-md bg-blue text-background"
        href={profileData.profileUrl}
      >
        Follow
      </Link>
      <div className="flex items-center justify-center gap-3">
        <p className="text-secondary2 dark:text-background2">
          {`${props?.followers.length} Followers`}
        </p>
        <p className="text-secondary2 dark:text-background2">{`${profileData.points} Points`}</p>
      </div>
      <p className="text-secondary3">{props?.bio}</p>
      <p className="text-secondary2 dark:text-background2">
        {profileData.website}
      </p>
      <p className="text-secondary3">
        Joined {monthsSinceJoined(new Date(profileData.joinedDate))} months ago
      </p>
    </section>
  );
};

export default LeftSideBar;
