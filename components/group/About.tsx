import React from "react";

const About = ({ description }: { description: string }) => {
  return (
    <div className="flex w-[20.9375rem] flex-col gap-[.625rem] rounded-[1rem] bg-background p-[.62rem] shadow-lg dark:bg-dark3 sm:w-full md:w-full md:p-[1.25rem] lg:w-[13.125rem]">
      <div>
        <h2 className="display-semibold text-secondary2 dark:text-background2">
          About
        </h2>
      </div>
      <div>
        <p className="caption-regular text-secondary2 dark:text-background2">
          {description}
        </p>
      </div>
    </div>
  );
};

export default About;
