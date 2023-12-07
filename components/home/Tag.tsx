import React from "react";
import OutlineIcon from "../icons/OutlineIcon";

const Tag = ({ name, count }: any) => {
  return (
    <article className="flex flex-row items-center gap-[10px] rounded-[6px] text-secondary4">
      <section
        className={`flex h-[32px] w-[32px] items-center justify-center gap-[10px] rounded-[6px] p-[6px]`}
      >
        <OutlineIcon.Dev className="fill-green" />
      </section>
      <section className="flex flex-col gap-[1px] py-1">
        <p className="caption-semibold dark:text-background2">#{name}</p>
        <p className="text-sm-regular">
          {count} <span>Posted by this tag</span>
        </p>
      </section>
    </article>
  );
};

export default Tag;
