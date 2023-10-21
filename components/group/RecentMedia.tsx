import Image from "next/image";
import React from "react";

type Props = { media: string };

const RecentMedia = ({ media }: Props) => {
  return (
    <div className="flex w-[20.3125rem] flex-col gap-[0.625rem] rounded-[1rem] bg-background p-[1.25rem] dark:bg-dark3">
      <div className="mb-[.62rem]">
        <h2 className="display-semibold text-secondary2 dark:text-background2">
          Recent Media
        </h2>
      </div>
      <div className="flex flex-wrap gap-[.62rem]">
        <div className="w-[5.5rem]">
          <Image
            src={media}
            width={88}
            height={88}
            alt="Media"
            className="m-auto mt-1"
          />
        </div>
        <div className="w-[5.5rem]">
          <Image
            src={media}
            width={88}
            height={88}
            alt="Media"
            className="m-auto mt-1"
          />
        </div>
        <div className="w-[5.5rem]">
          <Image
            src={media}
            width={88}
            height={88}
            alt="Media"
            className="m-auto mt-1"
          />
        </div>
        <div className="w-[5.5rem]">
          <Image
            src={media}
            width={88}
            height={88}
            alt="Media"
            className="m-auto mt-1"
          />
        </div>
        <div className="w-[5.5rem]">
          <Image
            src={media}
            width={88}
            height={88}
            alt="Media"
            className="m-auto mt-1"
          />
        </div>
        <div className="w-[5.5rem]">
          <Image
            src={media}
            width={88}
            height={88}
            alt="Media"
            className="m-auto mt-1"
          />
        </div>
        <div className="w-[5.5rem]">
          <Image
            src={media}
            width={88}
            height={88}
            alt="Media"
            className="m-auto mt-1"
          />
        </div>
        <div className="w-[5.5rem]">
          <Image
            src={media}
            width={88}
            height={88}
            alt="Media"
            className="m-auto mt-1"
          />
        </div>
        <div className="w-[5.5rem]">
          <Image
            src={media}
            width={88}
            height={88}
            alt="Media"
            className="m-auto mt-1"
          />
        </div>
      </div>
    </div>
  );
};

export default RecentMedia;
