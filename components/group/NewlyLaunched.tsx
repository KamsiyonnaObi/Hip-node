import { ImageFallback as Image } from "@/components/shared/ImageFallback";
import React from "react";
import { getNewestGroups } from "@/utils/actions/group.action";

const NewlyLaunched = async () => {
  const { groups } = await getNewestGroups();
  return (
    <section className="px-[.62rem">
      {groups?.slice(0, 3).map((group) => (
        <div key={group._id}>
          <div className="flex w-full gap-[.5rem] p-[.62rem]">
            <div className="my-auto w-[20%] sm:w-[10%] md:w-[20%]">
              <Image
                src={group.groupUrl}
                alt="icon"
                width={34}
                height={34}
                className="w-[34px]] mx-auto h-[34px] rounded-full"
              />
            </div>
            <div className="w-[80%] flex-col sm:w-[90%] md:w-[80%]">
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
