import React from "react";
import { ImageFallback as Image } from "@/components/shared/ImageFallback";
import Html from "../shared/html";
import Link from "next/link";

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
    <article>
      <Link href={"/meetups"}>
        <article className="flex w-full flex-row gap-4">
          <section className="flex min-w-[50px] flex-col rounded-[6px] border-[1px] border-secondary6 bg-background px-2 py-[3px] text-center dark:border-dark3 dark:bg-dark4">
            <p className="body-semibold">{month}</p>
            <h1 className="h1-bold text-blue80">{day}</h1>
          </section>
          <section className="flex flex-col gap-[2px]">
            <p className="body-semibold">{title}</p>
            <div className="flex flex-row gap-[6px]">
              <Image
                src="/MeetupIcon.svg"
                alt="meetup"
                width={16}
                height={16}
              />
              <div className="text-sm-semibold line-clamp-1 text-secondary3">
                <Html htmltext={desc} />
              </div>
            </div>
            <div className="mt-2 flex flex-row gap-[10px]">
              {jobType.map((type, index) => (
                <div
                  key={index}
                  className="text-xs-semibold gap-[10px] rounded-[20px] bg-bkg-3 px-[8px] py-[2px] text-center text-secondary4"
                >
                  {type}
                </div>
              ))}
            </div>
          </section>
        </article>
      </Link>
    </article>
  );
};

export default MeetupCard;
