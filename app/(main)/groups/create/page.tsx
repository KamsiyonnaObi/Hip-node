import AddGroup from "@/components/group/AddGroup";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Group",
  description:
    "Create a new Hipnode group to share your interests with other users",
};

type Props = {};

const page = (props: Props) => {
  return (
    <div className="flex justify-center">
      <AddGroup />
    </div>
  );
};

export default page;
