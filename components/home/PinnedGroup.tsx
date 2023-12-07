"use client";
import React from "react";
import OutlineIcon from "../icons/OutlineIcon";

const PinnedGroup = () => {
  return (
    <div className="flex w-[210px] flex-col gap-[10px] rounded-[16px] bg-background p-[20px] dark:bg-dark3">
      <div className="flex flex-col gap-[20px]">
        <section className="display-semibold mb-5 flex flex-row items-center gap-2 dark:text-background2">
          <p>Pinned Group</p>
          <OutlineIcon.ArrowLeft className=" stroke-secondary3 dark:stroke-background2" />
        </section>
        <div className="flex flex-col gap-[10px] rounded-[16px] dark:bg-dark3">
          {/* {tagList.map((tagData, index) => (
            <Tag />
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default PinnedGroup;
