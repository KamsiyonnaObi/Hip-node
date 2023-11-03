import React from "react";
import OutlineIcon from "../icons/OutlineIcon";

const GroupMenu = () => {
  return (
    <div className="flex flex-col w-[10.625rem] p-[1.25rem] h-[5.675rem] rounded-[0.625rem] border border-secondary5 bg-background2 dark:bg-dark4 dark:border-secondary2 gap-[.62rem]">
      <div className="flex items-center gap-[0.625rem]">
        <OutlineIcon.Edit className="dark:fill-white" />
        <p className="text-secondary2 body-semibold dark:text-background2">
          Edit Group Info
        </p>
      </div>
      <div className="flex items-center gap-[0.625rem]">
        <OutlineIcon.VerticalDots className="fill-transparent" />
        <p className="text-secondary2 body-semibold dark:text-background2">
          Delete Group
        </p>
      </div>
    </div>
  );
};

export default GroupMenu;
