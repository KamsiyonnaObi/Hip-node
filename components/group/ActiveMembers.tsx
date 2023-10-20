import Image from "next/image";
import React from "react";

type Props = {};

const ActiveMembers = (props: Props) => {
  return (
    <div className="flex w-[20.3125rem] flex-col gap-[0.625rem] rounded-[1rem] bg-background p-[1.25rem]">
      <div>
        <h2>Active Members</h2>
      </div>
      <div className="my-[1.5rem] flex gap-[1.31rem]">
        <div className="h-[2.5rem] w-[2.5rem] rounded-full bg-purple10">
          <Image
            src="/Avatar.png"
            width={34}
            height={34}
            alt="Avatar"
            className="m-auto mt-1"
          />
        </div>
        <Image src="/Avatar.png" width={34} height={34} alt="Avatar" />
        <Image src="/Avatar.png" width={40} height={40} alt="Avatar" />
        <Image src="/Avatar.png" width={40} height={40} alt="Avatar" />
        <Image src="/Avatar.png" width={40} height={40} alt="Avatar" />
      </div>
      <div className="flex gap-[1.31rem]">
        <Image src="/Avatar.png" width={40} height={40} alt="Avatar" />
        <Image src="/Avatar.png" width={40} height={40} alt="Avatar" />
        <Image src="/Avatar.png" width={40} height={40} alt="Avatar" />
        <Image src="/Avatar.png" width={40} height={40} alt="Avatar" />
        <Image src="/Avatar.png" width={40} height={40} alt="Avatar" />
      </div>
    </div>
  );
};

export default ActiveMembers;
