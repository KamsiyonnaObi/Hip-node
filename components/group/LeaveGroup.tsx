import Link from "next/link";
import React from "react";

type Props = {};

const LeaveGroup = (props: Props) => {
  return (
    <div className="absolute mx-auto">
      <div className="flex h-[10.125rem] w-[22.75rem] flex-col gap-[.625rem] rounded-[1rem] bg-background p-[1.875rem] dark:bg-dark4">
        <div className="mb-[1.875rem]">
          <h2 className="h3-semibold text-center text-secondary2 dark:text-background2">
            Are You Sure to Leave From This Group?
          </h2>
        </div>
        <div className="flex gap-[1.25rem]">
          <Link href={""}>
            <button className="flex w-[10rem] items-center justify-center gap-[0.625rem] rounded-[0.375rem] bg-blue p-[0.625rem]">
              <p className="h3-semibold text-background">Leave Group</p>
            </button>
          </Link>
          <Link href={""} className="flex items-center">
            <button className="my-auto">
              <p className="h3-semibold text-secondary3">Cancel</p>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LeaveGroup;
