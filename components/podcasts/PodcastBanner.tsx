import React from "react";
import Image from "next/image";
import OutlineIcon from "../icons/OutlineIcon";

interface Props {
  image: string;
  type: string;
  episode: number;
  name: string;
  audioPath: string;
}

const PodcastBanner = ({ image, type, episode, name, audioPath }: Props) => {
  return (
    <div className="w-[335px] gap-2.5 rounded-[16px] bg-background p-[14px] text-secondary2 dark:bg-dark3 dark:text-background2">
      <div className="flex flex-row gap-5">
        <section className="h-[50px] w-[80px]">
          <Image src={image} alt="image" height={50} width={50} />
        </section>
        <section className="flex flex-col gap-2.5">
          <div className="flex flex-row justify-between">
            <div className="flex flex-col">
              <p className="text-xs-regular">
                {type} . Episode {episode}
              </p>
              <p className="body-semibold">by {name}</p>
            </div>
            <OutlineIcon.VerticalDots className="fill-dark1 dark:fill-secondary5" />
          </div>
          <div className="flex flex-col gap-2.5"></div>
        </section>
      </div>
    </div>
  );
};

export default PodcastBanner;
