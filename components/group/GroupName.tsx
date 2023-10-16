"use client";

import React, { useState } from "react";
import FillIcon from "../icons/FillIcon";
import OutlineIcon from "../icons/OutlineIcon";
import FastestGrowing from "./FastestGrowing";
import MostPopular from "./MostPopular";
import NewlyLaunched from "./NewlyLaunched";

// interface Props {}

const GroupName = () => {
  const [isFastestGrowing, setFastestGrowing] = useState(false);
  const [isMostPopular, setIsMostPopular] = useState(false);
  const [isNewlyLaunched, setIsNewlyLaunched] = useState(false);

  return (
    <div className="mx-auto w-[325px] sm:w-[600px] md:w-[325px] lg:w-[225px]">
      <section>
        <div className="h-[5rem] shrink-0 gap-[.625rem] rounded-[1rem] bg-background p-[.63rem] dark:bg-dark3">
          <div className="flex h-[3.75rem] w-auto shrink-0 justify-between gap-[.625rem] rounded-[.625rem] bg-yellow10 p-[.63rem]">
            <div className="flex-col">
              <div className="flex gap-[.38rem]">
                <FillIcon.Growing className="fill-black" />
                <h2 className="display-semibold md:h3-semibold">
                  Fastest Growing
                </h2>
              </div>
              <div>
                <p className="text-sm-regular md:text-xs-regular">
                  List updated daily at midnight PST.
                </p>
              </div>
            </div>
            <div className="my-auto">
              <button onClick={() => setFastestGrowing((prev) => !prev)}>
                {!isFastestGrowing ? (
                  <OutlineIcon.DownArrow2 />
                ) : (
                  <OutlineIcon.Close />
                )}
              </button>
            </div>
          </div>
        </div>
        {/* Dropdown */}
        {isFastestGrowing && <FastestGrowing />}
      </section>
      {/* Most Popular */}
      <section>
        <div className="hidden md:flex md:flex-col">
          <div className="h-[5rem] w-auto min-w-[11.875rem] shrink-0 gap-[.625rem] rounded-[1rem] bg-background p-[.63rem] dark:bg-dark3">
            <div className="flex h-[3.75rem] w-auto shrink-0 justify-between gap-[.625rem] rounded-[.625rem] bg-red10 p-[.63rem]">
              <div className="flex-col">
                <div className="flex gap-[.38rem]">
                  <FillIcon.Fire className="fill-black" />
                  <h2 className="display-semibold md:h3-semibold">
                    Most Popular
                  </h2>
                </div>
                <div>
                  <p className="text-sm-regular md:text-xs-regular">
                    List updated daily at midnight PST.
                  </p>
                </div>
              </div>
              <div className="my-auto">
                <button onClick={() => setIsMostPopular((prev) => !prev)}>
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
          {isMostPopular && <MostPopular />}
        </div>
      </section>
      {/* Newly Launched */}
      <section>
        <div className="hidden md:flex md:flex-col">
          <div className="h-[5rem] w-auto min-w-[11.875rem] shrink-0 gap-[.625rem] rounded-[1rem] bg-background p-[.63rem] dark:bg-dark3">
            <div className="flex h-[3.75rem] w-auto shrink-0 justify-between gap-[.625rem] rounded-[.625rem] bg-blue10 p-[.63rem]">
              <div className="flex-col">
                <div className="flex gap-[.38rem]">
                  <FillIcon.Rocket className="fill-black" />
                  <h2 className="display-semibold md:h3-semibold">
                    Newly Launched
                  </h2>
                </div>
                <div>
                  <p className="text-sm-regular md:text-xs-regular">
                    List updated daily at midnight PST.
                  </p>
                </div>
              </div>
              <div className="my-auto">
                <button onClick={() => setIsNewlyLaunched((prev) => !prev)}>
                  {!isNewlyLaunched ? (
                    <OutlineIcon.DownArrow2 />
                  ) : (
                    <OutlineIcon.Close />
                  )}
                </button>
              </div>
            </div>
          </div>
          {/* Dropdown */}
          {isNewlyLaunched && <NewlyLaunched />}
        </div>
      </section>
    </div>
  );
};

export default GroupName;
