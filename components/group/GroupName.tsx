import React from "react";
import FillIcon from "../icons/FillIcon";
import OutlineIcon from "../icons/OutlineIcon";
import Image from "next/image";

// interface Props {}

const GroupName = () => {
  return (
    <div>
      <section>
        <div className="h-[5rem] w-auto min-w-[11.875rem] shrink-0 gap-[.625rem] rounded-[1rem] bg-background p-[.63rem] dark:bg-dark3">
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
              <OutlineIcon.DownArrow2 />
            </div>
          </div>
        </div>
        {/* Dropdown */}
        <div className="hidden bg-white dark:bg-dark3 md:flex">
          <div className="flex gap-[.5rem] p-[.62rem]">
            <div className="my-auto">
              <Image src="/Ellipse.png" alt="icon" width={34} height={34} />
            </div>
            <div className="flex-col">
              <h3 className="caption-regular text-secondary2 dark:text-background2">
                Looking to Partner Up
              </h3>
              <p className="text-sm-regular text-secondary3">
                Share how to succed and w...
              </p>
            </div>
          </div>
        </div>
        {/* Demo Two */}
        <div className="hidden bg-white dark:bg-dark3 md:flex">
          <div className="flex gap-[.5rem] p-[.62rem]">
            <div className="my-auto">
              <Image src="/Ellipse.png" alt="icon" width={34} height={34} />
            </div>
            <div className="flex-col">
              <h3 className="caption-regular text-secondary2 dark:text-background2">
                Looking to Partner Up
              </h3>
              <p className="text-sm-regular text-secondary3">
                Share how to succed and w...
              </p>
            </div>
          </div>
        </div>
        {/* Demo Three */}
        <div className="hidden bg-white dark:bg-dark3 md:flex">
          <div className="flex gap-[.5rem] p-[.62rem]">
            <div className="my-auto">
              <Image src="/Ellipse.png" alt="icon" width={34} height={34} />
            </div>
            <div className="flex-col">
              <h3 className="caption-regular text-secondary2 dark:text-background2">
                Looking to Partner Up
              </h3>
              <p className="text-sm-regular text-secondary3">
                Share how to succed and w...
              </p>
            </div>
          </div>
        </div>
        {/* See All */}
        <div className="bg-white p-[.625rem] dark:bg-dark3">
          <button className="flex h-[.875rem] w-[2.125rem] gap-[.625rem] rounded-[.625rem] bg-purple20 px-[.25rem]">
            <p className="text-xs-semibold text-purple">See all</p>
          </button>
        </div>
      </section>
      {/* Most Popular */}
      <section>
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
              <OutlineIcon.DownArrow2 />
            </div>
          </div>
        </div>
        {/* Dropdown */}
        <div className="hidden bg-white dark:bg-dark3 md:flex">
          <div className="flex gap-[.5rem] p-[.62rem]">
            <div className="my-auto">
              <Image src="/Ellipse.png" alt="icon" width={34} height={34} />
            </div>
            <div className="flex-col">
              <h3 className="caption-regular text-secondary2 dark:text-background2">
                Looking to Partner Up
              </h3>
              <p className="text-sm-regular text-secondary3">
                Share how to succed and w...
              </p>
            </div>
          </div>
        </div>
        {/* Demo Two */}
        <div className="hidden bg-white dark:bg-dark3 md:flex">
          <div className="flex gap-[.5rem] p-[.62rem]">
            <div className="my-auto">
              <Image src="/Ellipse.png" alt="icon" width={34} height={34} />
            </div>
            <div className="flex-col">
              <h3 className="caption-regular text-secondary2 dark:text-background2">
                Looking to Partner Up
              </h3>
              <p className="text-sm-regular text-secondary3">
                Share how to succed and w...
              </p>
            </div>
          </div>
        </div>
        {/* Demo Three */}
        <div className="hidden bg-white dark:bg-dark3 md:flex">
          <div className="flex gap-[.5rem] p-[.62rem]">
            <div className="my-auto">
              <Image src="/Ellipse.png" alt="icon" width={34} height={34} />
            </div>
            <div className="flex-col">
              <h3 className="caption-regular text-secondary2 dark:text-background2">
                Looking to Partner Up
              </h3>
              <p className="text-sm-regular text-secondary3">
                Share how to succed and w...
              </p>
            </div>
          </div>
        </div>
        {/* See All */}
        <div className="bg-white p-[.625rem] dark:bg-dark3">
          <button className="flex h-[.875rem] w-[2.125rem] gap-[.625rem] rounded-[.625rem] bg-purple20 px-[.25rem]">
            <p className="text-xs-semibold text-purple">See all</p>
          </button>
        </div>
      </section>
      {/* Newly Launched */}
      <section>
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
              <OutlineIcon.DownArrow2 />
            </div>
          </div>
        </div>
        {/* Dropdown */}
        <div className="hidden bg-white dark:bg-dark3 md:flex">
          <div className="flex gap-[.5rem] p-[.62rem]">
            <div className="my-auto">
              <Image src="/Ellipse.png" alt="icon" width={34} height={34} />
            </div>
            <div className="flex-col">
              <h3 className="caption-regular text-secondary2 dark:text-background2">
                Looking to Partner Up
              </h3>
              <p className="text-sm-regular text-secondary3">
                Share how to succed and w...
              </p>
            </div>
          </div>
        </div>
        {/* Demo Two */}
        <div className="hidden bg-white dark:bg-dark3 md:flex">
          <div className="flex gap-[.5rem] p-[.62rem]">
            <div className="my-auto">
              <Image src="/Ellipse.png" alt="icon" width={34} height={34} />
            </div>
            <div className="flex-col">
              <h3 className="caption-regular text-secondary2 dark:text-background2">
                Looking to Partner Up
              </h3>
              <p className="text-sm-regular text-secondary3">
                Share how to succed and w...
              </p>
            </div>
          </div>
        </div>
        {/* Demo Three */}
        <div className="hidden bg-white dark:bg-dark3 md:flex">
          <div className="flex gap-[.5rem] p-[.62rem]">
            <div className="my-auto">
              <Image src="/Ellipse.png" alt="icon" width={34} height={34} />
            </div>
            <div className="flex-col">
              <h3 className="caption-regular text-secondary2 dark:text-background2">
                Looking to Partner Up
              </h3>
              <p className="text-sm-regular text-secondary3">
                Share how to succed and w...
              </p>
            </div>
          </div>
        </div>
        {/* See All */}
        <div className="bg-white p-[.625rem] dark:bg-dark3">
          <button className="flex h-[.875rem] w-[2.125rem] gap-[.625rem] rounded-[.625rem] bg-purple20 px-[.25rem]">
            <p className="text-xs-semibold text-purple">See all</p>
          </button>
        </div>
      </section>
    </div>
  );
};

export default GroupName;
