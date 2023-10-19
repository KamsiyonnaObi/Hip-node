import { Button } from "@/components/ui/Button";
import React from "react";

export const BusinessStage = () => {
  return (
    <>
      <h1 className="h3-semibold text-secondary2 dark:text-background2 sm:text-[30px] sm:font-bold sm:leading-[40px]">
        Which best describes the stage you&apos;re at right now?
      </h1>
      <div className="flex w-full flex-col gap-5">
        <Button
          color="gray"
          className="body-semibold sm:h3-semibold btn-focus p-4 focus:bg-red80 focus:text-background2 md:bg-secondary6"
        >
          Considering or planning to start a business
        </Button>
        <Button
          color="gray"
          className="body-semibold sm:h3-semibold btn-focus p-4 md:bg-secondary6"
        >
          Actively getting started on something new
        </Button>
        <Button
          color="gray"
          className="body-semibold sm:h3-semibold btn-focus p-4 md:bg-secondary6"
        >
          No interest in starting a business
        </Button>
        <Button
          color="gray"
          className="body-semibold sm:h3-semibold btn-focus p-4 md:bg-secondary6"
        >
          Earnings from my business fully support me
        </Button>
        <Button
          color="gray"
          className="body-semibold sm:h3-semibold btn-focus p-4 md:bg-secondary6"
        >
          Working on a business, no revenue yet
        </Button>
      </div>
    </>
  );
};
