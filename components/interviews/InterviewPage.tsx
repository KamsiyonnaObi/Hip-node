import { ImageFallback as Image } from "@/components/shared/ImageFallback";
import React from "react";

import Html from "../shared/html";
import { formatNumber } from "@/utils";
import OutlineIcon from "../icons/OutlineIcon";
import Link from "next/link";

interface ResultType {
  image: string;
  title: string;
  revenue: number;
  updates: number;
  website: string;
  interviewTags: string[];
  desc: string;
}

const InterviewPage = ({ result }: { result: ResultType }) => {
  return (
    <article className="mx-auto w-full max-w-[785px] rounded-2xl bg-bkg-2 shadow-lg">
      <Image
        src={result.image}
        alt="Group Meeting"
        width={335}
        height={117}
        className="h-fit w-full rounded-t-lg"
        priority
      />
      <div className="flex flex-col gap-5 px-5 pb-10 pt-5 sm:px-10">
        <h1 className="sm:h1-semibold font-semibold">{result.title}</h1>
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="flex gap-6">
            <div className="flex flex-col items-center">
              <p className="text-sm font-bold">
                ${formatNumber(result.revenue)}/mo
              </p>
              <small className="text-xs text-secondary3">Revenue</small>
            </div>
            <div className="flex flex-col items-center border-l-2 border-solid border-gray-500 pl-6">
              <p className="text-sm font-bold">{result.updates}</p>
              <small className="text-xs text-secondary3">Updates</small>
            </div>
            <div className="flex flex-col items-center border-l-2 border-solid border-gray-500 pl-6">
              <Link
                className="cursor-pointer text-sm font-bold"
                href={result.website}
                target="_blank"
              >
                <OutlineIcon.Web className="fill-secondary2 dark:fill-background2" />
              </Link>
              <small className="text-xs text-secondary3">Website</small>
            </div>
          </div>
          <div className="caption-regular md:display-regular  text-yellow90">
            {result.interviewTags.map((tag: any) => (
              <span className="p-3" key={tag}>
                #{tag}
              </span>
            ))}
          </div>
        </div>
        <section className="text-secondary3">
          <Html htmltext={result.desc} />
        </section>
      </div>
    </article>
  );
};

export default InterviewPage;
