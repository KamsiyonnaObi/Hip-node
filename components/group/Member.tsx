import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = { profileImage: string; _id: string };

const Member = ({ profileImage, _id }: Props) => {
  return (
    <div className="flex h-[2.5rem] w-[2.5rem] content-center items-center justify-center overflow-hidden rounded-full bg-purple10">
      <Link href={`/profile/${_id}`}>
        <Image
          src={profileImage}
          width={34}
          height={34}
          alt="Avatar"
          className="rounded-full"
        />
      </Link>
    </div>
  );
};

export default Member;
