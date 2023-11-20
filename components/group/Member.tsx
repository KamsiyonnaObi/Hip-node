import Image from "next/image";
import React from "react";

type Props = { profileImage: string };

const Member = ({ profileImage }: Props) => {
  return (
    <div className="flex items-center justify-between">
      <div className="h-[2.5rem] w-[2.5rem] rounded-full bg-purple10">
        <Image
          src={profileImage}
          width={34}
          height={34}
          alt="Avatar"
          className="m-auto mt-1"
        />
      </div>
    </div>
  );
};

export default Member;
