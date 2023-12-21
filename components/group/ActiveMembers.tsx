import React, { Key } from "react";
import Members from "./Member";

const ActiveMembers = ({ members }: { members: any }) => {
  return (
    <div className="flex  w-[20.9375rem]  flex-col gap-[0.625rem] rounded-[1rem] bg-background p-[1.25rem] shadow-lg dark:bg-dark3 sm:w-full md:h-[13.25rem] lg:w-[20.9375rem]">
      <div>
        <h2 className="display-semibold text-secondary2 dark:text-background2">
          Active Members
        </h2>
      </div>
      <div className="my-[1.5rem] flex flex-wrap justify-center gap-[1.31rem] sm:gap-[3.6rem] md:gap-[1.31rem]">
        {members.map(
          (member: { _id: Key | null | undefined; profileImage: string }) => (
            <Members
              key={member._id}
              profileImage={member.profileImage}
              _id={member._id?.toString() ?? ""}
            />
          )
        )}
      </div>
    </div>
  );
};

export default ActiveMembers;
