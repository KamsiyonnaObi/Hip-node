import { ImageFallback as Image } from "@/components/shared/ImageFallback";
import React from "react";
import { getNewestGroups } from "@/utils/actions/group.action";

const NewlyLaunched = async () => {
  const { groups } = await getNewestGroups();
  return (
    <section>
      {groups?.slice(0, 3).map((group) => (
        <div key={group._id} className="bg-white px-[.62rem] dark:bg-dark3">
          <div className="flex w-full gap-[.5rem] p-[.62rem]">
            <div className="my-auto w-[20%]">
              <Image
                src={group.groupUrl}
                alt="icon"
                width={34}
                height={34}
                className="w-[34px]] h-[34px] justify-center rounded-full"
              />
            </div>
            <div className="w-[80%] flex-col">
              <h3 className="caption-semibold line-clamp-1 text-secondary2 dark:text-background2">
                {group.title}
              </h3>
              <p className="text-sm-regular line-clamp-1 text-secondary3">
                {group.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default NewlyLaunched;
