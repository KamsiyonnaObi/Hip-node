"use client";
import React from "react";

import { Info } from "@/components/signup/Info";
import FillIcon from "../icons/FillIcon";
import { Logo } from "../icons/Logo";

const LogInInfoSection = () => {
  return (
    <>
      <div className="mt-[30px] max-md:text-center md:absolute">
        <Logo />
      </div>
      {
        <article className="mx-auto max-w-[327px] sm:max-w-[442px] md:my-auto">
          <div className="mb-10 max-w-[250px] sm:max-w-[411px]">
            <h1 className="h3-semibold text-secondary2 dark:text-background2 sm:text-[30px] sm:font-bold sm:leading-[40px]">
              Sign In to Hipnode
            </h1>
          </div>
          {/* Info cards */}
          <div className="flex w-full flex-col gap-5">
            <Info
              className="bg-green10"
              fillIcon={<FillIcon.Inbox className="fill-green" />}
            >
              Did you join before February 2017? You need to{" "}
              <span className="text-red80">connect</span> an email address to
              your username.
            </Info>
            <Info
              className="bg-yellow10"
              fillIcon={<FillIcon.Thunderbolt className="fill-yellow" />}
            >
              Trouble logging in? <span className="text-red80">Reset</span> your
              password.
            </Info>
          </div>
        </article>
      }
    </>
  );
};

export default LogInInfoSection;
