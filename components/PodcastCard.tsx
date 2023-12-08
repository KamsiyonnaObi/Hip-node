import React from "react";
import { ImageFallback as Image } from "@/components/shared/ImageFallback";

interface Props {
  image: string;
  title: string;
  author: string;
}

const PodcastCard = ({ image, title, author }: Props) => {
  return (
    <article className="flex flex-row gap-4">
      <div className="relative h-14 w-14 overflow-hidden rounded-lg">
        <Image
          src={image}
          alt="Preview Photo"
          width={100}
          height={100}
          className="h-14 w-14 object-cover shadow-md"
        />
      </div>
      <div className="flex flex-col">
        <div className="flex flex-row">
          <p className="caption-semibold w-[193px]">{title}</p>
        </div>
        <p className="text-xs-regular text-secondary3">by {author}</p>
      </div>
    </article>
  );
};

export default PodcastCard;
