import React from "react";

const About = () => {
  return (
    <div className="flex w-[20.9375rem] flex-col gap-[.625rem] rounded-[1rem] bg-background p-[.62rem] dark:bg-dark3 sm:w-[16rem] md:w-[20.938rem] md:p-[1.25rem] lg:w-[13.125rem]">
      <div>
        <h2 className="display-semibold text-secondary2 dark:text-background2">
          ABout
        </h2>
      </div>
      <div>
        <p className="caption-regular text-secondary2 dark:text-background2">
          Download thousands of free & premium web design, illustration,
          bootstrap template, flutter app, icon, 3d illustration, and graphic
          assets for your UI, UX design project
        </p>
      </div>
    </div>
  );
};

export default About;
