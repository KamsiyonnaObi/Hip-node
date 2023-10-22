"use client";

import { Checkbox } from "../ui/CheckBox";

const InterviewCategory = () => {
  return (
    <div className="flex w-44 flex-col rounded-xl bg-bkg-3 p-3 text-defaultText">
      <h3 className="h3-semibold flex">Categories</h3>
      <Checkbox className="border-2 border-secondary3 data-[state=checked]:border-primary" />
    </div>
  );
};

export default InterviewCategory;
