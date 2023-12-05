import React from "react";
import { NewlyLaunched } from ".";
import FillIcon from "../icons/FillIcon";
import GroupDropdown from "./GroupDropdown";

const GroupFilter = () => {
  return (
    <section>
      <div>
        <GroupDropdown
          name={"Newly Launched"}
          icon={<FillIcon.Growing className="fill-black" />}
        >
          <NewlyLaunched />
        </GroupDropdown>
      </div>
    </section>
  );
};

export default GroupFilter;
