import React from "react";
import { Button } from "@/components/ui/Button";

const stages = [
  "Considering or planning to start a business",
  "Actively getting started on something new",
  "No interest in starting a business",
  "Earnings from my business fully support me",
  "Working on a business, no revenue yet",
];

export const BusinessStage = () => {
  return (
    <>
      <h1 className="h3-semibold text-secondary2 dark:text-background2 sm:text-[30px] sm:font-bold sm:leading-[40px]">
        Which best describes the stage you&apos;re at right now?
      </h1>
      <div className="flex w-full flex-col gap-5">
        {stages.map((stage, index) => (
          <Button
            key={index}
            color="gray"
            className="body-semibold sm:h3-semibold btn-focus p-4 md:bg-secondary6"
          >
            {stage}
          </Button>
        ))}
      </div>
    </>
  );
};
