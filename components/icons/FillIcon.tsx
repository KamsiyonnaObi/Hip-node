import { Calendar } from "./fillIcons/Calendar";
import { Comment } from "./fillIcons/Comment";
import { Rocket } from "./fillIcons/Rocket";

import React from "react";

type FillIconProps = {
  children: React.ReactNode;
};

const FillIcon = ({ children }: FillIconProps) => (
  <svg
    className="mr-2 h-6 w-6 fill-black"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {children}
  </svg>
);

FillIcon.Calendar = () => (
  <FillIcon>
    <Calendar />
  </FillIcon>
);
FillIcon.Comment = () => (
  <FillIcon>
    <Comment />
  </FillIcon>
);
FillIcon.Rocket = () => (
  <FillIcon>
    <Rocket />
  </FillIcon>
);

export default FillIcon;
