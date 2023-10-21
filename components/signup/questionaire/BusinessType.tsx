"use client";
import React from "react";
import { useSignUpStore } from "@/store";

import { Button } from "@/components/ui/Button";

export const BusinessType = () => {
  const { BusinessInterest, updateBusinessInterest } = useSignUpStore();

  const handleSelect = (interest: string) => {
    if (BusinessInterest.includes(interest)) {
      updateBusinessInterest(
        BusinessInterest.filter((item) => item !== interest)
      );
    } else {
      updateBusinessInterest([...BusinessInterest, interest]);
    }
  };

  const isButtonSelected = (interest: string): boolean => {
    return BusinessInterest.includes(interest);
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
          {buttonsData.map((buttonText) => (
            <Button
              key={buttonText}
              color="gray"
              className={`sm:h3-semibold p-4 md:bg-secondary6 ${
                isButtonSelected(buttonText) && "selected"
              }`}
              onClick={() => handleSelect(buttonText)}
            >
              {buttonText}
            </Button>
          ))}
        </div>
      </div>
    </>
  );
};
