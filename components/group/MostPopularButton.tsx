"use client";
import React, { useState } from "react";

import FillIcon from "../icons/FillIcon";
import OutlineIcon from "../icons/OutlineIcon";
import MostPopular from "./MostPopular";
import { parse } from "date-fns";

const MostPopularButton = ({
  stringifiedPopGroups,
}: {
  stringifiedPopGroups: string[];
}) => {
  const [isMostPopular, setMostPopular] = useState(false);
  const popularGroups = JSON.parse(stringifiedPopGroups);

  return (
    <div>
      <div className="flex h-[5rem] shrink-0 gap-[.625rem] bg-background p-[.63rem] dark:bg-dark3 md:hidden">
        <div className="flex h-[3.75rem] w-full shrink-0 justify-between gap-[.625rem] rounded-[.625rem] bg-yellow10 p-[.63rem]">
          <div className="flex-col">
            <div className="flex gap-[.38rem]">
              <FillIcon.Growing className="fill-black" />
              <h2 className="display-semibold md:h3-semibold text-secondary2">
                Most Popular
              </h2>
            </div>
            <div>
              <p className="text-sm-regular md:caption-regular text-secondary3">
                List updated daily at midnight PST.
              </p>
            </div>
          </div>
          <div className="my-auto">
            <button onClick={() => setMostPopular((prev) => !prev)}>
              {!isMostPopular ? (
                <OutlineIcon.DownArrow2 />
              ) : (
                <OutlineIcon.Close />
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Dropdown */}
      {isMostPopular && <MostPopular popularGroups={popularGroups} />}
    </div>
  );
};

export default MostPopularButton;
