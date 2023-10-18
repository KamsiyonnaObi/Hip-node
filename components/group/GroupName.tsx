"use client";

import React, { useState } from "react";
import FillIcon from "../icons/FillIcon";
import OutlineIcon from "../icons/OutlineIcon";
import FastestGrowing from "./FastestGrowing";
import Image from "next/image";
import MostPopularButton from "./MostPopularButton";
import NewlyLaunchedButton from "./NewlyLaunchedButton";

// interface Props {}

const GroupName = () => {
  const [isDropDown, setDropDown] = useState(false);

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
        {isDropDown && <NewlyLaunchedButton />}
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
          <div className="dark:bg-dark3 md:flex md:flex-col">
            <div className="bg-white px-[.62rem] dark:bg-dark3">
              <div className="flex gap-[.5rem] p-[.62rem]">
                <div className="my-auto">
                  <Image src="/Ellipse.png" alt="icon" width={34} height={34} />
                </div>
                <div className="flex-col">
                  <h3 className="caption-semibold text-secondary2 dark:text-background2">
                    Looking to Partner Up
                  </h3>
                  <p className="text-sm-regular text-secondary3">
                    Share how to succed and w...
                  </p>
                </div>
              </div>
            </div>
            {/* Demo Two */}
            <div className="bg-white px-[.62rem] dark:bg-dark3">
              <div className="flex gap-[.5rem] p-[.62rem]">
                <div className="my-auto">
                  <Image src="/Ellipse.png" alt="icon" width={34} height={34} />
                </div>
                <div className="flex-col">
                  <h3 className="caption-semibold text-secondary2 dark:text-background2">
                    Looking to Partner Up
                  </h3>
                  <p className="text-sm-regular text-secondary3">
                    Share how to succed and w...
                  </p>
                </div>
              </div>
            </div>
            {/* Demo Three */}
            <div className="bg-white px-[.62rem] dark:bg-dark3">
              <div className="flex gap-[.5rem] p-[.62rem]">
                <div className="my-auto">
                  <Image src="/Ellipse.png" alt="icon" width={34} height={34} />
                </div>
                <div className="flex-col">
                  <h3 className="caption-semibold text-secondary2 dark:text-background2">
                    Looking to Partner Up
                  </h3>
                  <p className="text-sm-regular text-secondary3">
                    Share how to succed and w...
                  </p>
                </div>
              </div>
            </div>
            {/* See All */}
            <div className="bg-white py-[.625rem] pl-[1.25rem] dark:bg-dark3">
              <button className="flex h-[.875rem] w-[2.125rem] gap-[.625rem] rounded-[.625rem] bg-purple20 px-[.25rem]">
                <p className="text-xs-semibold text-purple">See all</p>
              </button>
            </div>
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
          {/* Demo One */}
          <div className="bg-white px-[.62rem] dark:bg-dark3">
            <div className="flex gap-[.5rem] p-[.62rem]">
              <div className="my-auto">
                <Image src="/Ellipse.png" alt="icon" width={34} height={34} />
              </div>
              <div className="flex-col">
                <h3 className="caption-semibold text-secondary2 dark:text-background2">
                  Looking to Partner Up
                </h3>
                <p className="text-sm-regular text-secondary3">
                  Share how to succed and w...
                </p>
              </div>
            </div>
          </div>
          {/* Demo Two */}
          <div className="bg-white px-[.62rem] dark:bg-dark3">
            <div className="flex gap-[.5rem] p-[.62rem]">
              <div className="my-auto">
                <Image src="/Ellipse.png" alt="icon" width={34} height={34} />
              </div>
              <div className="flex-col">
                <h3 className="caption-semibold text-secondary2 dark:text-background2">
                  Looking to Partner Up
                </h3>
                <p className="text-sm-regular text-secondary3">
                  Share how to succed and w...
                </p>
              </div>
            </div>
          </div>
          {/* Demo Three */}
          <div className="bg-white px-[.62rem] dark:bg-dark3">
            <div className="flex gap-[.5rem] p-[.62rem]">
              <div className="my-auto">
                <Image src="/Ellipse.png" alt="icon" width={34} height={34} />
              </div>
              <div className="flex-col">
                <h3 className="caption-semibold text-secondary2 dark:text-background2">
                  Looking to Partner Up
                </h3>
                <p className="text-sm-regular text-secondary3">
                  Share how to succed and w...
                </p>
              </div>
            </div>
          </div>
          {/* See All */}
          <div className="bg-white py-[.625rem] pl-[1.25rem] dark:bg-dark3">
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
          {/* Demo One */}
          <div className="bg-white px-[.62rem] dark:bg-dark3">
            <div className="flex gap-[.5rem] p-[.62rem]">
              <div className="my-auto">
                <Image src="/Ellipse.png" alt="icon" width={34} height={34} />
              </div>
              <div className="flex-col">
                <h3 className="caption-semibold text-secondary2 dark:text-background2">
                  Looking to Partner Up
                </h3>
                <p className="text-sm-regular text-secondary3">
                  Share how to succed and w...
                </p>
              </div>
            </div>
          </div>
          {/* Demo Two */}
          <div className="bg-white px-[.62rem] dark:bg-dark3">
            <div className="flex gap-[.5rem] p-[.62rem]">
              <div className="my-auto">
                <Image src="/Ellipse.png" alt="icon" width={34} height={34} />
              </div>
              <div className="flex-col">
                <h3 className="caption-semibold text-secondary2 dark:text-background2">
                  Looking to Partner Up
                </h3>
                <p className="text-sm-regular text-secondary3">
                  Share how to succed and w...
                </p>
              </div>
            </div>
          </div>
          {/* Demo Three */}
          <div className="bg-white px-[.62rem] dark:bg-dark3">
            <div className="flex gap-[.5rem] p-[.62rem]">
              <div className="my-auto">
                <Image src="/Ellipse.png" alt="icon" width={34} height={34} />
              </div>
              <div className="flex-col">
                <h3 className="caption-semibold text-secondary2 dark:text-background2">
                  Looking to Partner Up
                </h3>
                <p className="text-sm-regular text-secondary3">
                  Share how to succed and w...
                </p>
              </div>
            </div>
          </div>
          {/* See All */}
          <div className="bg-white py-[.625rem] pl-[1.25rem] dark:bg-dark3">
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
