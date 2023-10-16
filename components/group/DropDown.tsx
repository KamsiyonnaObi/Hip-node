import Image from "next/image";
import React from "react";

const DropDown = () => {
  return (
    <div className="hidden md:flex md:flex-col">
      <div className="bg-white dark:bg-dark3">
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
      <div className="bg-white dark:bg-dark3">
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
      <div className="bg-white dark:bg-dark3">
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
    </div>
  );
};

export default DropDown;
