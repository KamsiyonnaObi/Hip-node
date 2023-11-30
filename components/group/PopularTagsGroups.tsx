"use client";
import React from "react";

import GroupTag from "./GroupTag";

type tag = {
  count: string;
  title: string;
  icon: string;
  className: string;
  postNum: string;
  desc: string;
}[];

const PopularTagsGroups = ({ tags }: { tags: tag }) => {
  return (
    <div className="flex w-full flex-col gap-[10px] rounded-[16px] bg-background p-[20px] dark:bg-dark3">
      <p className="display-semibold mb-5 text-secondary2 dark:text-background2">
        Popular Tags
      </p>
      <div className="flex flex-col rounded-[16px] dark:bg-dark3">
        {tags?.map((tags: any) => (
          <GroupTag
            key={tags._id}
            name={tags.title}
            count="10"
            title="title"
            icon="icon"
            className="className"
            postNum="postNum"
            desc="desc"
          />
        ))}
      </div>
    </div>
  );
};

export default PopularTagsGroups;
