import React from "react";
import { Info } from "./Info";
import FillIcon from "../icons/FillIcon";
import { Logo } from "../icons/Logo";

const InfoSection = () => {
  return (
    <>
      <div className="mt-[30px] max-md:text-center md:absolute">
        <Logo />
      </div>
      <article className="mx-auto max-w-[327px] sm:max-w-[442px] md:my-auto">
        <div className="mb-10 max-w-[250px] sm:max-w-[411px]">
          <h1 className="h3-semibold text-secondary2 dark:text-background2 sm:text-[30px] sm:font-bold sm:leading-[40px]">
            Join a thriving community of entrepreneurs and developers.
          </h1>
        </div>
        {/* Info cards */}
        <div className="flex flex-col gap-5">
          <Info
            className="bg-red10"
            fillIcon={<FillIcon.Business className="fill-red90" />}
          >
            Connect with other indie hackers running online businesses.
          </Info>
          <Info
            className="bg-yellow10"
            fillIcon={<FillIcon.Feedback className="fill-yellow" />}
          >
            Get feedback on your business ideas, landing pages, and more.
          </Info>
          <Info
            className="bg-blue10"
            fillIcon={<FillIcon.Inbox className="fill-blue" />}
          >
            Get the best new stories from founders in your inbox
          </Info>
        </div>
      </article>
    </>
  );
};

export default InfoSection;
