import React from "react";
import { ImageFallback as Image } from "@/components/shared/ImageFallback";

import OutlineIcon from "../icons/OutlineIcon";

interface Props {
  image: string;
  title: string;
  author: string;
}

const PodcastCard = ({ image, title, author }: Props) => {
  return (
    <article className="flex flex-row gap-[14px] shadow-lg">
      <Image src={image} alt="" width={58} height={58} className="shadow-md" />
      <div className="flex flex-col gap-[6px]">
        <div className="flex flex-row">
          <p className="caption-semibold w-[193px]">{title}</p>
          <OutlineIcon.ArrowLeft className=" mt-4 stroke-secondary3" />
        </div>
        <p className="text-xs-regular text-secondary3">by {author}</p>
      </div>
    </article>
  );
};

export default PodcastCard;
