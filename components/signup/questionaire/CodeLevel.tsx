"use client";
import React from "react";
import { useSignUpStore } from "@/store";

import { Button } from "@/components/ui/Button";

const codeLevels = [
  "No, and coding is totally unfamiliar",
  "No, but I understand a few concepts",
  "Yes, and I am a beginner",
  "Yes, and I'm intermediate or a professional",
];

export const CodeLevel = () => {
  const { CodingLevel, updateCodingLevel } = useSignUpStore();
  const handleClick = (level: number) => {
    updateCodingLevel(level);
  };
  return (
    <>
      <h1 className="h3-semibold text-secondary2 dark:text-background2 sm:text-[30px] sm:font-bold sm:leading-[40px]">
        Do you know how to code?
      </h1>
      <div className="flex w-full flex-col gap-5">
        {codeLevels.map((level, index) => (
          <Button
            key={index}
            color="gray"
            className={`body-semibold sm:h3-semibold btn-focus p-4 md:bg-secondary6 ${
              CodingLevel === index && "selected"
            }`}
            onClick={() => handleClick(index)}
          >
            {level}
          </Button>
        ))}
      </div>
    </>
  );
};
