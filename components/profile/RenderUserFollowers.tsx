import React from "react";
import { ImageFallback as Image } from "../shared/ImageFallback";
import { getUserFollowers } from "@/utils/actions/user.action";
type Props = { userId: string };
const RenderUserFollowers = async ({ userId }: Props) => {
  const followers = await getUserFollowers(userId);
  return (
    <>
      {followers.data!.map((follower) => (
        <div key={follower.id} className="flex flex-wrap gap-2.5">
          <div className="object-fit flex h-[30px] w-[30px] items-center justify-center rounded-full bg-secondary6">
            <Image
              src={follower.profileImage}
              alt={follower.username}
              fallback="/ExampleAvatar.png"
              width={21}
              height={25.5}
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default RenderUserFollowers;
