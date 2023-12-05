import { ImageFallback as Image } from "@/components/shared/ImageFallback";
import React from "react";

const MostPopular = () => {
  return (
    <section>
      <div className="bg-white px-[.62rem] dark:bg-dark3">
        <div className="flex gap-[.5rem] p-[.62rem]">
          <div className="my-auto">
            <Image src="/Ellipse.png" alt="icon" width={34} height={34} />
          </div>
          <div className="flex-col">
            <h3 className="caption-semibold text-secondary2 dark:text-background2">
              Looking to Partner Up
            </h3>
            <p className="text-sm-regular text-secondary3">
              Share how to succed and w...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MostPopular;
