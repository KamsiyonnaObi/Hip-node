import React from "react";

import { ImageFallback as Image } from "@/components/shared/ImageFallback";

const MyMessage = () => {
  return (
    <section className="flex w-full gap-2.5">
      <div className="flex max-w-[255px] flex-1 flex-wrap rounded-b-lg rounded-tl-lg rounded-tr-sm bg-red80  p-3.5 md:max-w-[360px]">
        <p className="md:display-semibold body-semibold whitespace-pre-wrap text-background ">
          Did you checked the last update?
        </p>
      </div>
      <Image
        src="/ExampleAvatar2.png"
        alt="avatar"
        width={20}
        height={20}
        className="h-7 w-7 shrink-0 rounded-full bg-blue md:h-10 md:w-10"
      />
    </section>
  );
};

export default MyMessage;
