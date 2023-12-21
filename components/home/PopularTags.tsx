"use client";
import React from "react";
import Tag from "@/components/home/Tag";

interface Tags {
  getPopTags: {
    name: string;
    count: number;
  }[];
}

const PopularTags = ({ getPopTags }: Tags) => {
  return (
    <div className="flex w-[210px] flex-col rounded-[16px] bg-background p-[20px] shadow-lg dark:bg-dark3">
      <p className="display-semibold mb-1 dark:text-background2">
        Popular Tags
      </p>
      <div className="flex flex-col rounded-[16px] dark:bg-dark3">
        {getPopTags.slice(0, 6).map((tag: { name: string; count: number }) => (
          <Tag key={tag.name} name={tag.name} count={tag.count} />
        ))}
      </div>
    </div>
  );
};

export default PopularTags;
