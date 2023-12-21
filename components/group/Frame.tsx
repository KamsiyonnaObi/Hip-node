import React from "react";

import OutlineIcon from "../icons/OutlineIcon";

const Frame = () => {
  return (
    <div className="flex w-auto min-w-[20.9rem] justify-between gap-[.625rem] rounded-[1rem] bg-white p-[.625rem] shadow-lg dark:bg-dark3 sm:w-full lg:p-[1.25rem]">
      <div className="my-auto flex">
        <h3 className="display-semibold text-secondary2 dark:text-white">
          Explore
        </h3>
      </div>
      <div className="flex gap-[.88rem]">
        <div className="flex gap-[.62rem] rounded-[.25rem] bg-background2 p-[.375rem] dark:bg-dark4">
          <div className="flex items-center">
            <OutlineIcon.New
              className="fill-black dark:fill-white"
              textColor="fill-white dark:fill-black"
            />
          </div>
          <p className="display-semibold text-secondary2 dark:text-background2">
            New
          </p>
        </div>
        <div className="flex gap-[.62rem] rounded-[.25rem] bg-red10 p-[.375rem]">
          <div className="flex items-center">
            <OutlineIcon.Popular className="fill-red90" />
          </div>
          <p className="display-semibold text-red80">Popular</p>
        </div>
      </div>
    </div>
  );
};

export default Frame;
