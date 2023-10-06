"use client";
import React, { useState } from "react";
import OutlineIcon from "./icons/OutlineIcon";
import FillIcon from "./icons/FillIcon";

const Sidebar = () => {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  const handleItemClick = (index: number) => {
    setSelectedItem(index);
  };

  const liClass = (index: number) => {
    return `flex p-[6px] flex-row items-center gap-[6px] rounded-[6px] ${
      selectedItem === index ? "bg-secondary6" : ""
    } md:w-[186px]`;
  };

  return (
    <ul className="flex w-[335px] flex-row gap-[10px] rounded-[16px] bg-background p-[10px] dark:bg-dark3 md:w-[210px] md:flex-col">
      <li className={liClass(0)} onClick={() => handleItemClick(0)}>
        <div className="flex h-[28px] w-[28px] items-center justify-center rounded-[6px] bg-secondary6">
          <OutlineIcon.New className="fill-green" />
        </div>
        <div className="flex flex-col">
          <p className="caption-semibold hidden text-secondary2 md:flex">
            Newest and Recent
          </p>
          <p className="body-semibold text-secondary2 md:hidden">Newest</p>
          <p className="text-xs-regular hidden text-secondary3 md:flex">
            Find the latest update
          </p>
        </div>
      </li>
      <li className={liClass(1)} onClick={() => handleItemClick(1)}>
        <div className="flex h-[28px] w-[28px] items-center justify-center rounded-[6px] bg-secondary6">
          <OutlineIcon.Popular className="fill-yellow" />
        </div>
        <div className="flex flex-col ">
          <p className="caption-semibold hidden text-secondary2 md:flex">
            Popular of the day
          </p>
          <p className="body-semibold text-secondary2 md:hidden">Popular</p>
          <p className="text-xs-semibold hidden text-secondary3 md:flex">
            Shots featured today by creators
          </p>
        </div>
      </li>
      <li className={liClass(2)} onClick={() => handleItemClick(2)}>
        <div className="flex h-[28px] w-[28px] items-center justify-center rounded-[6px] bg-secondary6">
          <FillIcon.Follow className="fill-primary" />
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row items-center gap-[4px]">
            <p className="caption-semibold text-secondary2">Following</p>
            <p className="text-xs-semibold gap-[10px] rounded-[2px] bg-primary px-[6px] py-[3px] text-background">
              24
            </p>
          </div>

          <p className="text-xs-semibold hidden text-secondary3 md:flex">
            Explore from your favorite person
          </p>
        </div>
      </li>
    </ul>
  );
};

export default Sidebar;
