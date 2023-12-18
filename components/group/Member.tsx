import Link from "next/link";
import React from "react";
import { ImageFallback } from "../shared/ImageFallback";

type Props = { profileImage: string; _id: string };

const Member = ({ profileImage, _id }: Props) => {
  return (
    <div className="flex h-[2.5rem] w-[2.5rem] content-center items-center justify-center overflow-hidden rounded-full bg-purple10">
      <Link href={`/profile/${_id}`}>
        <ImageFallback
          src={profileImage}
          width={34}
          height={34}
          alt="Avatar"
          className="m-auto h-[2.5rem] w-[2.5rem] rounded-full object-cover"
          fallback="/AvatarFallback.svg"
        />
      </Link>
    </div>
  );
};

export default Member;
