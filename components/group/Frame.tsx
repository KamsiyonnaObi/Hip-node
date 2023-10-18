import React from "react";
import OutlineIcon from "../icons/OutlineIcon";

const Frame = () => {
  return (
    <div className="flex w-auto min-w-[20.9rem] justify-between gap-[.625rem] rounded-[1rem] bg-white p-[.625rem]">
      <div className="my-auto flex">
        <h3 className="display-semibold text-secondary2">Explore</h3>
      </div>
      <div className="flex gap-[.88rem]">
        <div className="flex gap-[.62rem] p-[.375rem]">
          <div className="my-auto">
            <OutlineIcon.New />
          </div>
          <p className="display-semibold text-secondary2">New</p>
        </div>
        <div className="flex gap-[.62rem] p-[.375rem]">
          <div className="my-auto">
            <OutlineIcon.Popular className="fill-red90" />
          </div>
          <p className="display-semibold text-red80">Popular</p>
        </div>
      </div>
    </div>
  );
};

export default Frame;
