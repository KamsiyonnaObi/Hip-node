"use client";
import React from "react";

import GroupTag from "./GroupTag";

type Tag = {
  name: string;
  count: number;
};

const PopularTagsGroups = ({ tags }: { tags: Tag[] }) => {
  return (
    <div className="flex w-full flex-col gap-[10px] rounded-[16px] bg-background p-[20px] shadow-lg dark:bg-dark3">
      <p className="display-semibold mb-5 text-secondary2 dark:text-background2">
        Popular Tags
      </p>
      <div className="flex flex-col rounded-[16px] dark:bg-dark3">
        {tags?.map((tag: Tag) => (
          <GroupTag
            key={tag.name}
            title={tag.name}
            count={tag.count}
            className={"bg-[#FF8F67]"}
            desc="Posted by this tag."
          />
        ))}
      </div>
    </div>
  );
};

export default PopularTagsGroups;
