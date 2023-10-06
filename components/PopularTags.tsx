"use client";
import React from "react";
import OutlineIcon from "./icons/OutlineIcon";
import Tag from "./Tag";

const PopularTags = () => {
  return (
    <div className="flex w-[210px] flex-col gap-[10px] rounded-[16px] bg-background p-[20px] dark:bg-dark3">
      <p className="display-semibold mb-5">Popular Tags</p>
      <div className="flex flex-col rounded-[16px] dark:bg-dark3">
        <Tag
          title="java"
          icon={<OutlineIcon.Dev className="fill-green" />}
          desc="placeholder"
          className="bg-green10"
          postNum="82,430"
        />
        <Tag
          title="bitcoin"
          icon={<OutlineIcon.Bitcoin className="fill-blue" />}
          desc="placeholder"
          className="bg-blue10"
          postNum="5,354"
        />
        <Tag
          title="design"
          icon={<OutlineIcon.Design className="fill-purple" />}
          desc="placeholder"
          className="bg-purple10"
          postNum="5,354"
        />
        <Tag
          title="blogging"
          icon={<OutlineIcon.Blogging className="fill-primary" />}
          desc="placeholder"
          className="bg-red10"
          postNum="5,354"
        />
        <Tag
          title="tutorial"
          icon={<OutlineIcon.Tutorial className="fill-yellow" />}
          desc="placeholder"
          className="bg-yellow10"
          postNum="5,354"
        />
      </div>
    </div>
  );
};

export default PopularTags;
