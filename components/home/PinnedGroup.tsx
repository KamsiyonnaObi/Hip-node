"use client";
import React from "react";
import OutlineIcon from "../icons/OutlineIcon";
import Tag from "./Tag";

const PinnedGroup = () => {
  const tagList = [
    {
      title: "java",
      icon: <OutlineIcon.Dev className="fill-green" />,
      desc: "placeholder",
      className: "bg-green10",
      postNum: "82,430",
    },
    {
      title: "bitcoin",
      icon: <OutlineIcon.Bitcoin className="fill-blue" />,
      desc: "placeholder",
      className: "bg-blue10",
      postNum: "5,354",
    },
    {
      title: "design",
      icon: <OutlineIcon.Design className="fill-purple" />,
      desc: "placeholder",
      className: "bg-purple10",
      postNum: "5,354",
    },
    {
      title: "blogging",
      icon: <OutlineIcon.Blogging className="fill-primary" />,
      desc: "placeholder",
      className: "bg-red10",
      postNum: "5,354",
    },
    {
      title: "tutorial",
      icon: <OutlineIcon.Tutorial className="fill-yellow" />,
      desc: "placeholder",
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
              desc={tagData.desc}
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
