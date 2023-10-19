"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/Button";

export const BusinessType = () => {
  const [selectedButtons, setSelectedButtons] = useState<number[]>([]);

  const handleSelect = (index: number) => {
    if (selectedButtons.includes(index)) {
      setSelectedButtons(selectedButtons.filter((item) => item !== index));
    } else {
      setSelectedButtons([...selectedButtons, index]);
    }
  };

  const isButtonSelected = (index: number): boolean => {
    return selectedButtons.includes(index);
  };

  const buttonsData: string[] = [
    "Advertising",
    "Task Management",
    "Email Marketing",
    "Crypto",
    "Design",
    "Finance",
    "Outdoors",
    "Health & Fitness",
    "Investing",
    "Home Automation",
    "Sports",
  ];

  return (
    <>
      <h1 className="h3-semibold text-secondary2 dark:text-background2 sm:text-[30px] sm:font-bold sm:leading-[40px]">
        What types of businesses are you most interested in running?
      </h1>
      <div className="flex flex-col gap-5">
        <p className="display-semibold text-blue80">
          Choose as many as you like.
        </p>
        <div className="flex w-full flex-wrap gap-5 md2:w-[490px]">
          {buttonsData.map((buttonText, index) => (
            <Button
              key={index}
              color="gray"
              className={`sm:h3-semibold p-4 md:bg-secondary6 ${
                isButtonSelected(index) ? "selected" : ""
              }`}
              onClick={() => handleSelect(index)}
            >
              {buttonText}
            </Button>
          ))}
        </div>
      </div>
    </>
  );
};
