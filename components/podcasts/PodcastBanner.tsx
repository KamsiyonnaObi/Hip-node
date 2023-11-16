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
    <div className="w-[335px] gap-2.5 rounded-[16px] bg-background p-[14px] text-secondary2 dark:bg-dark3 dark:text-background2 md:w-[785px] md:p-5">
      <div className="flex flex-row gap-5 md:gap-[30px]">
        <section className="h-[50px] w-[80px] md:h-[150px] md:w-[245px]">
          <Image
            src={image}
            alt="image"
            height={50}
            width={50}
            className="h-[50px] w-[50px] rounded-[8px] md:h-[150px] md:w-[150px]"
          />
        </section>
        <section className="flex flex-col gap-2.5 md:gap-4">
          <div className="flex w-[207px] flex-row justify-between md:w-[470px]">
            <div className="flex flex-col md:gap-[2px]">
              <p className="text-xs-regular md:caption-regular">
                {type} . Episode {episode}
              </p>
              <p className="body-semibold md:h3-semibold">by {name}</p>
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
