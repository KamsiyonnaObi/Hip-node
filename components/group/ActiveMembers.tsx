import React, { Key } from "react";
import Members from "./Member";
const ActiveMembers = ({ members }: { members: any }) => {
  return (
    <div className="flex w-[20.9375rem] flex-col gap-[0.625rem] rounded-[1rem] bg-background p-[1.25rem] dark:bg-dark3 sm:w-full">
      <div>
        <h2 className="display-semibold text-secondary2 dark:text-background2">
          Active Members
        </h2>
      </div>
      <div className="my-[1.5rem] flex justify-center gap-[1.31rem] sm:gap-[3.6rem] md:gap-[1.31rem]">
        <div className="h-[2.5rem] w-[2.5rem] rounded-full bg-purple10">
          {members.map(
            (member: { _id: Key | null | undefined; profileImage: string }) => (
              <Members key={member._id} profileImage={member.profileImage} />
            )
          )}

          <p className="caption-semibold relative flex pl-2 pt-3 text-background">
            155+
          </p>
        </div>
      </div>
    </div>
  );
};

export default ActiveMembers;
