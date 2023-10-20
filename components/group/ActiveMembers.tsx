import Image from "next/image";
import React from "react";

type Props = { avatar: string };

const ActiveMembers = ({ avatar }: Props) => {
  return (
    <div className="flex w-[20.3125rem] flex-col gap-[0.625rem] rounded-[1rem] bg-background p-[1.25rem] dark:bg-dark3">
      <div>
        <h2 className="display-semibold text-secondary2 dark:text-background2">
          Active Members
        </h2>
      </div>
      <div className="my-[1.5rem] flex gap-[1.31rem]">
        <div className="h-[2.5rem] w-[2.5rem] rounded-full bg-purple10">
          <Image
            src={avatar}
            width={34}
            height={34}
            alt="Avatar"
            className="m-auto mt-1"
          />
        </div>
        <div className="h-[2.5rem] w-[2.5rem] rounded-full bg-purple10">
          <Image
            src={avatar}
            width={34}
            height={34}
            alt="Avatar"
            className="m-auto mt-1"
          />
        </div>
        <div className="h-[2.5rem] w-[2.5rem] rounded-full bg-purple10">
          <Image
            src={avatar}
            width={34}
            height={34}
            alt="Avatar"
            className="m-auto mt-1"
          />
        </div>
        <div className="h-[2.5rem] w-[2.5rem] rounded-full bg-purple10">
          <Image
            src={avatar}
            width={34}
            height={34}
            alt="Avatar"
            className="m-auto mt-1"
          />
        </div>
        <div className="h-[2.5rem] w-[2.5rem] rounded-full bg-purple10">
          <Image
            src={avatar}
            width={34}
            height={34}
            alt="Avatar"
            className="m-auto mt-1"
          />
        </div>
      </div>
      <div className="flex gap-[1.31rem]">
        <div className="h-[2.5rem] w-[2.5rem] rounded-full bg-purple10">
          <Image
            src={avatar}
            width={34}
            height={34}
            alt="Avatar"
            className="m-auto mt-1"
          />
        </div>
        <div className="h-[2.5rem] w-[2.5rem] rounded-full bg-purple10">
          <Image
            src={avatar}
            width={34}
            height={34}
            alt="Avatar"
            className="m-auto mt-1"
          />
        </div>
        <div className="h-[2.5rem] w-[2.5rem] rounded-full bg-purple10">
          <Image
            src={avatar}
            width={34}
            height={34}
            alt="Avatar"
            className="m-auto mt-1"
          />
        </div>
        <div className="h-[2.5rem] w-[2.5rem] rounded-full bg-purple10">
          <Image
            src={avatar}
            width={34}
            height={34}
            alt="Avatar"
            className="m-auto mt-1"
          />
        </div>
        <div>
          <div className="absolute h-[2.5rem] w-[2.5rem] rounded-full bg-purple10 fill-blueblack10 opacity-[.5]">
            <Image
              src={avatar}
              width={34}
              height={34}
              alt="Avatar"
              className="m-auto mt-1"
            />
          </div>
          <p className="caption-semibold relative flex pl-2 pt-3 text-background">
            155+
          </p>
        </div>
      </div>
    </div>
  );
};

export default ActiveMembers;
