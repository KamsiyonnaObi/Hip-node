import React from "react";
import OutlineIcon from "../icons/OutlineIcon";

interface GroupTagProps {
  title: string;
  count: number;
  className: string;
  desc: string;
}

const GroupTag: React.FC<GroupTagProps> = ({
  title,
  count,
  className,
  desc,
}) => {
  return (
    <article className="flex flex-row items-center gap-[10px] rounded-[6px] ">
      <section
        className={`flex h-[32px] w-[32px] items-center justify-center gap-[10px] rounded-[6px] p-[6px] ${className}`}
      >
        <OutlineIcon.Bitcoin />
      </section>
      <section className="flex flex-col gap-[1px] py-1">
        <p className="caption-semibold text-secondary4 dark:text-background2">
          #{title}
        </p>
        <p className="text-sm-regular text-secondary4 dark:text-secondary3">
          {count} {desc}
        </p>
      </section>
    </article>
  );
};

export default GroupTag;
