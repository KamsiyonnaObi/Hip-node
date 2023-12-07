import { ImageFallback as Image } from "@/components/shared/ImageFallback";
import { getFastestGrowingGroups } from "@/utils/actions/group.action";
import React from "react";

const FastestGrowing = async () => {
  const recentMembers = await getFastestGrowingGroups();
  console.log(recentMembers);
  return (
    <section>
      <div className="bg-white px-[.62rem] dark:bg-dark3">
        <div className="flex gap-[.5rem] p-[.62rem]">
          <div className="my-auto w-[20%] sm:w-[10%] md:w-[20%]">
            <Image src="/Ellipse.png" alt="icon" width={34} height={34} />
          </div>
          <div className="w-[80%] flex-col sm:w-[90%] md:w-[80%]">
            <h3 className="caption-semibold line-clamp-1 text-secondary2 dark:text-background2">
              Looking to Partner Up
            </h3>
            <p className="text-sm-regular line-clamp-1 text-secondary3">
              Share how to succed and w...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FastestGrowing;
