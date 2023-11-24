import React from "react";
import { ImageFallback as Image } from "@/components/shared/ImageFallback";

interface Props {
  month: string;
  day: string;
  title: string;
  desc: string;
  jobType: string[];
  _id: string;
}

const MeetupCard = ({ month, day, title, desc, jobType, _id }: Props) => {
  return (
    <article className="flex flex-row gap-4 ">
      <section className="flex flex-col rounded-[6px] border-[1px] border-secondary6 bg-background px-2 py-[3px] text-center dark:border-dark3 dark:bg-dark4">
        <p className="body-semibold">{month}</p>
        <h1 className="h1-bold text-blue80">{day}</h1>
      </section>
      <section className="flex flex-col gap-[2px]">
        <p className="body-semibold">{title}</p>
        <div className="flex flex-row gap-[6px]">
          <Image src="/MeetupIcon.svg" alt="meetup" width={16} height={16} />
          <p className="text-sm-semibold line-clamp-1 text-secondary3">
            {desc}
          </p>
        </div>
        <div className="mt-2 flex flex-row gap-[10px]">
          {jobType.map((type, index) => (
            <div
              key={index}
              className="text-xs-semibold gap-[10px] rounded-[20px] bg-secondary6 px-[8px] py-[2px] text-center text-secondary4"
            >
              {type}
            </div>
          ))}
        </div>
      </section>
    </article>
  );
};

export default MeetupCard;
