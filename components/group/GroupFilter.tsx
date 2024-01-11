import React from "react";
import { FastestGrowing, MostPopular, NewlyLaunched } from ".";
import FillIcon from "../icons/FillIcon";
import GroupDropdown from "./GroupDropdown";

const GroupFilter = () => {
  return (
    <section className="shadow-lg">
      <div className="rounded-xl bg-white dark:bg-dark3">
        <GroupDropdown
          name={"Fastest Growing"}
          icon={<FillIcon.Growing className="fill-black" />}
        >
          <FastestGrowing />
        </GroupDropdown>
        <GroupDropdown
          name={"Most Popular"}
          icon={<FillIcon.Growing className="fill-black" />}
        >
          <MostPopular />
        </GroupDropdown>
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
