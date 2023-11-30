"use client";
import React from "react";

import OutlineIcon from "../icons/OutlineIcon";
import GroupTag from "./GroupTag";

const PopularTagsGroups = ({ tags }: { tags: any }) => {
  return (
    <div className="flex w-full flex-col gap-[10px] rounded-[16px] bg-background p-[20px] dark:bg-dark3">
      <p className="display-semibold mb-5 text-secondary2 dark:text-background2">
        Popular Tags
      </p>
      <div className="flex flex-col rounded-[16px] dark:bg-dark3">
        {tags?.map((tag: string) => (
          <GroupTag
            key={tag}
            title={tag}
            icon={<OutlineIcon.Dev className="fill-green" />}
            desc="placeholder"
            className="bg-green10"
            postNum="82,430"
          />
        ))}
      </div>
    </div>
  );
};

export default PopularTagsGroups;
