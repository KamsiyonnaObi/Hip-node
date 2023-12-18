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
      <section
        className={`flex h-[32px] w-[32px] items-center justify-center gap-[10px] rounded-[6px] p-[6px]`}
      >
        <div className="h-[20px] w-[20px]">
          <Image src={groupUrl} alt="Group image" width={20} height={20} />
        </div>
      </section>
      <section className="flex flex-col gap-[1px] py-1">
        <p className="caption-semibold dark:text-background2">{title}</p>
        <p className="text-sm-regular line-clamp-1">{description}</p>
      </section>
    </article>
  );
};

export default PinnedGroups;
