import Html from "../shared/html";
import { ImageFallback as Image } from "@/components/shared/ImageFallback";
import React from "react";
import OutlineIcon from "../icons/OutlineIcon";

interface Props {
  image: string;
  title: string;
  subtitle: string;
  desc: string;
  month: string;
  day: number;
  jobType: string[];
  _id: string;
}

const MeetupCardBig = ({
  image,
  title,
  subtitle,
  desc,
  month,
  day,
  jobType,
  _id,
}: Props) => {
  return (
    <article className="w-full rounded-[16px] bg-background p-[14px] shadow-lg  dark:bg-dark3 md:gap-[10px] md:p-5">
      <div className="flex flex-col gap-[16px] md:gap-[25px]">
        <section className="flex flex-row justify-between md:max-w-[745px]">
          <div className="flex flex-row gap-5">
            <Image
              src={image}
              alt="meetup"
              width={92}
              height={92}
              className=" h-[48px] w-[48px] rounded-[6px] shadow-meetup-card md:h-[72px] md:w-[72px]"
            />
            <div className="flex flex-col justify-center gap-1 md:gap-2">
              <h3 className="md:h3-semibold caption-semibold w-[177px] text-secondary2 dark:text-background2 md:w-full">
                {title}
              </h3>
              <p className="md:body-regular text-sm-semibold text-secondary3">
                {subtitle}
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center rounded-[6px] border-[1px] border-secondary5 bg-background px-4 py-[5px] text-center shadow-md dark:border-dark3 dark:bg-dark4 md:h-[72px] md:w-[59px]">
            <p className="md:body-semibold caption-semibold">{month}</p>
            <h1 className="display-semibold md:h1-bold text-blue80">{day}</h1>
          </div>
        </section>
        <section className="caption-regular md:body-regular text-secondary2 dark:text-background2">
          <Html htmltext={desc} />
        </section>
        <section className="flex flex-row justify-between">
          <section className="flex flex-row gap-[10px]">
            {jobType.map((type, index) => (
              <div
                key={index}
                className="text-xs-semibold md:caption-semibold gap-[10px] rounded-[20px] bg-secondary6 px-[8px] py-[2px] text-center text-secondary4 dark:bg-dark4"
              >
                {type}
              </div>
            ))}
          </section>
          <OutlineIcon.VerticalDots className="fill-dark1 dark:fill-secondary5" />
        </section>
      </div>
    </article>
  );
};

export default MeetupCardBig;
