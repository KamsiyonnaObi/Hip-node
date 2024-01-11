import React from "react";
import Html from "../shared/html";
import { ImageFallback as Image } from "@/components/shared/ImageFallback";

interface Props {
  title: string;
  desc: string;
  name: string;
  location: string;
  avatar: string;
}

const PodcastCardBig = ({ title, desc, name, location, avatar }: Props) => {
  return (
    <article className="flex w-[350px] flex-col gap-2.5 rounded-[16px] bg-background p-[14px] text-secondary2 shadow-lg dark:bg-dark3 dark:text-background md:w-[382px] md:p-5">
      <div className="gap-5">
        <div className="gap-2.5">
          <h3 className="md:h3-semibold display-semibold">{title}</h3>
          <div className="md:body-regular caption-regular line-clamp-6">
            <Html htmltext={desc} />
          </div>
        </div>
        <div className="flex flex-row gap-5">
          <Image
            src={avatar}
            alt="image"
            width={30}
            height={30}
            className="mt-1 h-[30px] w-[30px] rounded-full"
          />
          <div className="flex flex-col">
            <p className="body-semibold">{name}</p>
            <p className="text-sm-regular">{location}</p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default PodcastCardBig;
