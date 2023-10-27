"use client";
import React from "react";
import OutlineIcon from "../icons/OutlineIcon";
import Tag from "./Tag";

const PinnedGroup = () => {
  const tagList = [
    {
      title: "java",
      icon: <OutlineIcon.Dev className="fill-green" />,
      className: "bg-green10",
      postNum: "82,430",
    },
    {
      title: "bitcoin",
      icon: <OutlineIcon.Bitcoin className="fill-blue" />,
      className: "bg-blue10",
      postNum: "5,354",
    },
    {
      title: "design",
      icon: <OutlineIcon.Design className="fill-purple" />,
      className: "bg-purple10",
      postNum: "5,354",
    },
    {
      title: "blogging",
      icon: <OutlineIcon.Blogging className="fill-primary" />,
      className: "bg-red10",
      postNum: "5,354",
    },
    {
      title: "tutorial",
      icon: <OutlineIcon.Tutorial className="fill-yellow" />,
      className: "bg-yellow10",
      postNum: "5,354",
    },
  ];
  return (
    <div className="flex w-[210px] flex-col gap-[10px] rounded-[16px] bg-background p-[20px] dark:bg-dark3">
      <div className="flex flex-col gap-[20px]">
        <section className="display-semibold mb-5 flex flex-row items-center gap-2 dark:text-background2">
          <p>Pinned Group</p>
          <OutlineIcon.ArrowLeft className=" stroke-secondary3 dark:stroke-background2" />
        </section>
        <div className="flex flex-col gap-[10px] rounded-[16px] dark:bg-dark3">
          {tagList.map((tagData, index) => (
            <Tag
              key={index}
              title={tagData.title}
              icon={tagData.icon}
              desc="placeholder"
              className={tagData.className}
              postNum={tagData.postNum}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PinnedGroup;
