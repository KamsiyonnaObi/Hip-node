"use client";

import React, { useState } from "react";
import FillIcon from "../icons/FillIcon";

const PostCategory = ({ closeCategory }: { closeCategory: Function }) => {
  const [selected, setSelected] = useState(0);

  const handleSelect = (val: any) => {
    setSelected(val);
  };

  const handleCloseForm = (val: any) => {
    setSelected(0);
    closeCategory(val);
  };
  return (
    <article className="h-[264px] w-[213px] rounded-[8px] bg-background dark:bg-dark4">
      <ul className="flex flex-col gap-2.5 px-5 py-8">
        <li
          className={`flex w-[173px] flex-row justify-start gap-4 rounded-[8px] p-2.5  ${
            selected === 1
              ? "text-blue80 dark:bg-dark3"
              : "text-secondary2 dark:text-background2"
          }`}
          onMouseOver={() => handleSelect(1)}
          onClick={() => handleCloseForm("Post")}
        >
          <FillIcon.Post
            className={`${
              selected === 1
                ? "fill-blue80"
                : "fill-secondary2 dark:fill-background2"
            } `}
          />
          <h3 className="h3-semibold">Post</h3>
        </li>
        <li
          className={`flex w-[173px] flex-row justify-start gap-4 rounded-[8px] p-2.5  ${
            selected === 2
              ? "text-blue80 dark:bg-dark3"
              : "text-secondary2 dark:text-background2"
          }`}
          onMouseOver={() => handleSelect(2)}
          onClick={() => handleCloseForm("Meetup")}
        >
          <FillIcon.Calendar
            className={`${
              selected === 2
                ? "fill-blue80"
                : "fill-secondary2 dark:fill-background2"
            } `}
          />
          <h3 className="h3-semibold">Meetup</h3>
        </li>
        <li
          className={`flex w-[173px] flex-row justify-start gap-4 rounded-[8px] p-2.5  ${
            selected === 3
              ? "text-blue80 dark:bg-dark3"
              : "text-secondary2 dark:text-background2"
          }`}
          onMouseOver={() => handleSelect(3)}
          onClick={() => handleCloseForm("Podcasts")}
        >
          <FillIcon.Podcast
            className={`${
              selected === 3
                ? "fill-blue80"
                : "fill-secondary2 dark:fill-background2"
            } `}
          />
          <h3 className="h3-semibold">Podcasts</h3>
        </li>
        <li
          className={`flex w-[173px] flex-row justify-start gap-4 rounded-[8px] p-2.5  ${
            selected === 4
              ? "text-blue80 dark:bg-dark3"
              : "text-secondary2 dark:text-background2"
          }`}
          onMouseOver={() => handleSelect(4)}
          onClick={() => handleCloseForm("Interviews")}
        >
          <FillIcon.Interviews
            className={`${
              selected === 4
                ? "fill-blue80"
                : "fill-secondary2 dark:fill-background2"
            } `}
          />
          <h3 className="h3-semibold">Interviews</h3>
        </li>
      </ul>
    </article>
  );
};

export default PostCategory;
