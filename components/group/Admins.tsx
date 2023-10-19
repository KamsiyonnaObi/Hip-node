import Image from "next/image";
import Link from "next/link";
import React from "react";
import FillIcon from "../icons/FillIcon";

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
      <div>
        <Link href={link}>
          <FillIcon.Admin />
        </Link>
      </div>
    </div>
  );
};

export default Admins;
