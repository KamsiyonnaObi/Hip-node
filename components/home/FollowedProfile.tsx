"use client";
import Image from "next/image";
import Link from "next/link";

import { profileData } from "@/constants/dummy";
import FillIcon from "../icons/FillIcon";
import { useState, useTransition } from "react";
import { IUser } from "@/types/mongoose";
import { followAuthor } from "@/utils/actions/user.action";

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

const FollowedProfile = ({
  user,
  joinedDate,
  currentUserId,
  hasFollowed,
}: {
  user: string;
  joinedDate: Date;
  currentUserId: string;
  hasFollowed: boolean;
}) => {
  const [isFollowing, setIsFollowing] = useState(hasFollowed || false);
  const [isPending, startTransition] = useTransition();
  const userObj = JSON.parse(user);

  const handleFollow = async () => {
    if (userObj._id) {
      startTransition(async () => {
        const followed = await followAuthor({
          userId: userObj._id,
          currentUserId: JSON.parse(currentUserId),
          hasFollowed: isFollowing,
        });
        if (!followed) return;
        if (followed.status !== undefined) {
          setIsFollowing(followed.status);
        }
      });
    }
  };

  return (
    <section className="flex flex-col items-center justify-center gap-5 rounded-2xl bg-background px-5 py-[30px] dark:bg-dark3">
      <div className="relative h-24 w-24 rounded-full bg-yellow30">
        <Image
          className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2"
          src={userObj.profileImage}
          alt="profile"
          width="80"
          height="80"
        />
      </div>
      <div className="flex flex-col items-center justify-center">
        <p className="text-secondary2 dark:text-background2">
          {userObj.username}
        </p>
        <p className="text-secondary3">{userObj.occupation}</p>
      </div>
      {isFollowing ? (
        <>
          <button
            disabled={isPending}
            onClick={handleFollow}
            className="h3-semibold flex h-11 w-72 items-center justify-center gap-2.5 rounded-md border border-blue20 bg-background text-secondary3  dark:bg-dark3"
          >
            Following
          </button>
          <Link
            className="h3-semibold flex h-11 w-72 items-center justify-center gap-5 rounded-md bg-blue text-background"
            href="/"
          >
            <FillIcon.Message />
            Message
          </Link>
        </>
      ) : (
        <button
          disabled={isPending}
          onClick={handleFollow}
          className="h3-semibold flex h-11 w-72 items-center justify-center gap-2.5 rounded-md bg-blue text-background"
        >
          Follow
        </button>
      )}
      <p className="text-secondary3">
        Joined {monthsSinceJoined(new Date(joinedDate))} months ago
      </p>
    </section>
  );
};

export default FollowedProfile;
