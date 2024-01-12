import { ImageFallback as Image } from "@/components/shared/ImageFallback";
import React from "react";
import OutlineIcon from "../icons/OutlineIcon";
import Link from "next/link";

type Props = { fullName: string; profileImage: string; _id: string };

const Admins = ({ profileImage, fullName, _id }: Props) => {
  return (
    <article>
      <Link href={`/profile/${_id}`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[.62rem]">
            <div className="relative h-8 w-8 overflow-hidden rounded-full">
              <Image
                src={profileImage}
                alt="avatar"
                width={50}
                height={50}
                className="object-cover"
              />
            </div>
            <div className="body-semibold text-secondary2 dark:text-background2">
              {fullName}
            </div>
          </div>
          <div className="h-[1.875rem] w-[1.875rem] shrink-0 rounded-full bg-blue10">
            <OutlineIcon.Follow className="mx-auto mt-1 fill-blue80" />
          </div>
        </div>
      </Link>
    </article>
  );
};

export default Admins;
