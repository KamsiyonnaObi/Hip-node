import { ImageFallback as Image } from "@/components/shared/ImageFallback";
import React from "react";

const NewlyLaunched = ({ groups }: { groups: any[] }) => {
  return (
    <section>
      {groups.slice(0, 3).map((group) => (
        <div key={group._id} className="bg-white px-[.62rem] dark:bg-dark3">
          <div className="flex gap-[.5rem] p-[.62rem]">
            <div className="my-auto w-full">
              <Image
                src={group.groupUrl}
                alt="icon"
                width={34}
                height={34}
                className="h-[2.125rem] w-[2.125rem]"
              />
            </div>
            <div className="flex-col">
              <h3 className="caption-semibold text-secondary2 dark:text-background2">
                {group.title}
              </h3>
              <p className="text-sm-regular text-secondary3">
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
