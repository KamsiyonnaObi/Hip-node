import React from "react";
import FillIcon from "../icons/FillIcon";
import OutlineIcon from "../icons/OutlineIcon";

// interface Props {}

const GroupName = () => {
  return (
    <div>
      <section>
        <div className="h-[5rem] w-auto min-w-[11.875rem] shrink-0 gap-[.625rem] rounded-[1rem] bg-secondary1 p-[.63rem] dark:bg-dark3">
          <div className="flex h-[3.75rem] w-auto shrink-0 justify-between gap-[.625rem] rounded-[.625rem] bg-yellow10 p-[.63rem]">
            <div className="flex-col">
              <div className="flex gap-[.38rem]">
                <FillIcon.Growing className="fill-black" />
                <h2>Fastest Growing</h2>
              </div>
              <div>
                <p>List updated daily at midnight PST.</p>
              </div>
            </div>
            <div className="my-auto">
              <OutlineIcon.DownArrow2 />
            </div>
          </div>
        </div>
      </section>
      <section></section>
      <section></section>
    </div>
  );
};

export default GroupName;
