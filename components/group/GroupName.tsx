"use client";
import React, { useState } from "react";

import FillIcon from "../icons/FillIcon";
import {
  MostPopularButton,
  FastestGrowing,
  MostPopular,
  NewlyLaunched,
} from "@/components/group";
import OutlineIcon from "../icons/OutlineIcon";
import NewlyLaunchedButton from "./NewlyLaunchedButton";

const GroupName = ({ stringifiedGroups }: { stringifiedGroups: any }) => {
  const [isDropDown, setDropDown] = useState(false);
  const newGroups = JSON.parse(stringifiedGroups);

  return (
    <div className="mx-auto w-[325px] sm:w-[600px] md:w-[325px] lg:w-[225px]">
      <section>
        <div
          className={`${
            isDropDown && "rounded-b-none"
          } flex h-[5rem] shrink-0 gap-[.625rem] rounded-[1rem] bg-background p-[.63rem] dark:bg-dark3 md:hidden`}
        >
          <div className="flex h-[3.75rem] w-full shrink-0 justify-between gap-[.625rem] rounded-[.625rem] bg-yellow10 p-[.63rem]">
            <div className="flex-col">
              <div className="flex gap-[.38rem]">
                <FillIcon.Growing className="fill-black" />
                <h2 className="display-semibold md:h3-semibold text-secondary2">
                  Fastest Growing
                </h2>
              </div>
              <div>
                <p className="text-sm-regular md:caption-regular text-secondary3">
                  List updated daily at midnight PST.
                </p>
              </div>
            </div>
            <div className="my-auto">
              <button onClick={() => setDropDown((prev) => !prev)}>
                {!isDropDown ? (
                  <OutlineIcon.DownArrow2 />
                ) : (
                  <OutlineIcon.Close />
                )}
              </button>
            </div>
          </div>
        </div>
        {/* Dropdown */}
        {isDropDown && <FastestGrowing />}
        {isDropDown && <MostPopularButton />}
        {isDropDown && <NewlyLaunchedButton newGroups={newGroups} />}
      </section>
      <section>
        <div className="hidden md:flex md:flex-col">
          <div className="h-[5rem] shrink-0 gap-[.625rem] rounded-t-[1rem] bg-background p-[.63rem] dark:bg-dark3">
            <div className="flex h-[3.75rem] w-auto shrink-0 justify-between gap-[.625rem] rounded-[.625rem] bg-yellow10 p-[.63rem]">
              <div className="flex-col">
                <div className="flex gap-[.38rem]">
                  <FillIcon.Growing className="fill-black" />
                  <h2 className="display-semibold md:h3-semibold text-secondary2">
                    Fastest Growing
                  </h2>
                </div>
                <div>
                  <p className="text-sm-regular md:caption-regular text-secondary3">
                    List updated daily at midnight PST.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <FastestGrowing />
          <div className="rounded-b-[1rem] bg-white py-[.625rem] pl-[1.25rem] dark:bg-dark3">
            <button className="flex h-[.875rem] w-[2.125rem] gap-[.625rem] rounded-[.625rem] bg-purple20 px-[.25rem]">
              <p className="text-xs-semibold text-purple">See all</p>
            </button>
          </div>
        </div>
      </section>
      {/* Most Popular */}
      <section>{/* Dropdown */}</section>
      <section>
        <div className="hidden md:flex md:flex-col">
          <div className="h-[5rem] w-auto min-w-[11.875rem] shrink-0 gap-[.625rem] bg-background p-[.63rem] dark:bg-dark3">
            <div className="flex h-[3.75rem] w-auto shrink-0 justify-between gap-[.625rem] rounded-[.625rem] bg-red10 p-[.63rem]">
              <div className="flex-col">
                <div className="flex gap-[.38rem]">
                  <FillIcon.Fire className="fill-black" />
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
              <div className="my-auto flex md:hidden"></div>
            </div>
          </div>
          <MostPopular />
          <div className="rounded-b-[1rem] bg-white py-[.625rem] pl-[1.25rem] dark:bg-dark3">
            <button className="flex h-[.875rem] w-[2.125rem] gap-[.625rem] rounded-[.625rem] bg-purple20 px-[.25rem]">
              <p className="text-xs-semibold text-purple">See all</p>
            </button>
          </div>
        </div>
      </section>
      {/* Newly Launched */}
      <section>
        <div className="hidden md:flex md:flex-col">
          <div className="h-[5rem] w-auto min-w-[11.875rem] shrink-0 gap-[.625rem] bg-background p-[.63rem] dark:bg-dark3">
            <div className="flex h-[3.75rem] w-auto shrink-0 justify-between gap-[.625rem] rounded-[.625rem] bg-blue10 p-[.63rem]">
              <div className="flex-col">
                <div className="flex gap-[.38rem]">
                  <FillIcon.Rocket className="fill-black" />
                  <h2 className="display-semibold md:h3-semibold text-secondary2">
                    Newly Launched
                  </h2>
                </div>
                <div>
                  <p className="text-sm-regular md:caption-regular text-secondary3">
                    List updated daily at midnight PST.
                  </p>
                </div>
              </div>
              <div className="my-auto flex md:hidden"></div>
            </div>
          </div>
          <NewlyLaunched
            title={newGroups.title}
            description={newGroups.description}
            groupUrl={newGroups.groupUrl}
          />
          <div className="rounded-b-[1rem] bg-white py-[.625rem] pl-[1.25rem] dark:bg-dark3">
            <button className="flex h-[.875rem] w-[2.125rem] gap-[.625rem] rounded-[.625rem] bg-purple20 px-[.25rem]">
              <p className="text-xs-semibold text-purple">See all</p>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GroupName;
