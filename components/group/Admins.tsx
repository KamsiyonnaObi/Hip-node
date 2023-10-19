import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = { username: string; avatar: string; link: string };

const Admins = ({ avatar, username, link }: Props) => {
  return (
    <div className="flex items-center justify-between">
      <div>
        <Image src={avatar} alt="avatar" width={34} height={34} />
      </div>
      <div>{username}</div>
      <div>
        <Link href={link}></Link>
      </div>
    </div>
  );
};

export default Admins;
