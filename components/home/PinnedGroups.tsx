import React from "react";
import Image from "next/image";

interface Props {
  title: string;
  groupUrl: string;
  description: string;
}

const PinnedGroups = ({ title, groupUrl, description }: Props) => {
  return (
    <article className="flex flex-row items-center gap-[10px] rounded-[6px] text-secondary4">
      <section className=" w-full">
        <Image
          src={groupUrl}
          alt="Group image"
          width={20}
          height={20}
          className="h-[20px] w-[20px]"
        />
      </section>
      <section className="flex flex-col gap-[1px] py-1">
        <p className="caption-semibold dark:text-background2">{title}</p>
        <p className="text-sm-regular line-clamp-1">{description}</p>
      </section>
    </article>
  );
};

export default PinnedGroups;
