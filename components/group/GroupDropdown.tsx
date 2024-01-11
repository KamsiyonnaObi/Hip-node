"use client";

import React, { useState } from "react";

import OutlineIcon from "@/components/icons/OutlineIcon";

const GroupDropDown = ({
  children,
  name,
  icon,
}: {
  children: React.ReactNode;
  name: string;
  icon: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-[350px] sm:w-[37rem] md:w-[13.4em]">
      <div className="h-[5rem] w-full shrink-0 gap-[.625rem]  rounded-xl bg-background p-[.63rem] dark:bg-dark3">
        <div className="flex h-[3.75rem] w-full shrink-0 justify-between gap-[.625rem] rounded-[.625rem] bg-yellow10 p-[.63rem] shadow-md">
          <div className="flex-col">
            <div className="flex gap-[.38rem]">
              {icon}
              <h2 className="display-semibold md:h3-semibold text-secondary2">
                {name}
              </h2>
            </div>
            <div>
              <p className="text-sm-regular md:caption-regular text-secondary3">
                List updated daily at midnight PST.
              </p>
            </div>
          </div>
          <div className="my-auto md:hidden">
            <button onClick={() => setIsOpen((prev) => !prev)}>
              {!isOpen ? (
                <OutlineIcon.DownArrow className="fill-black" />
              ) : (
                <OutlineIcon.Close className="fill-black" />
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Dropdown */}
      {isOpen && <div className="md:hidden">{children}</div>}

      <div className="max-md:hidden">{children}</div>
    </div>
  );
};

export default GroupDropDown;
