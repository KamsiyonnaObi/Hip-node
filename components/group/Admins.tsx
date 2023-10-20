import Image from "next/image";
import React from "react";
import OutlineIcon from "../icons/OutlineIcon";
import Link from "next/link";

type Props = { username: string; avatar: string; link: string };

const Admins = ({ avatar, username, link }: Props) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-[.62rem]">
        <Image src={avatar} alt="avatar" width={30} height={30} />
        <div className="body-semibold text-secondary2 dark:text-background2">
          {username}
        </div>
      </div>
      <div className="h-[1.875rem] w-[1.875rem] shrink-0 rounded-full bg-blue10">
        <Link href={link}>
          <OutlineIcon.Follow className="mx-auto mt-[.25rem] fill-blue80" />
        </Link>
      </div>
    </div>
  );
};

export default Admins;
