import { Button } from "@/components/ui/Button";
import React from "react";

export const CodeLevel = () => {
  return (
    <>
      <h1 className="h3-semibold text-secondary2 dark:text-background2 sm:text-[30px] sm:font-bold sm:leading-[40px]">
        Do you know how to code?
      </h1>
      <div className="flex w-full flex-col gap-5">
        <Button
          color="gray"
          className="body-semibold sm:h3-semibold btn-focus p-4 md:bg-secondary6"
        >
          No, and coding is totally unfamiliar
        </Button>
        <Button
          color="gray"
          className="body-semibold sm:h3-semibold btn-focus p-4 md:bg-secondary6"
        >
          No, but I understand a few concepts
        </Button>
        <Button
          color="gray"
          className="body-semibold sm:h3-semibold btn-focus p-4 md:bg-secondary6"
        >
          Yes, and I am a beginner
        </Button>
        <Button
          color="gray"
          className="body-semibold sm:h3-semibold btn-focus p-4 md:bg-secondary6"
        >
          Yes, and I&apos;m intermediate or a professional
        </Button>
      </div>
    </>
  );
};
