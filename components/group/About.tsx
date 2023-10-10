import React from "react";

interface Props {
  desc: string;
}

const About = ({ desc }: Props) => {
  return (
    <article className="w-[335px] gap-[10px] rounded-[16px] bg-background p-[10px] dark:bg-dark3 md:w-[210px] md:p-[20px]">
      <div className="flex flex-col gap-[10px]">
        <p className="display-semibold">About</p>
        <p className="caption-regular line-clamp-6">{desc}</p>
      </div>
    </article>
  );
};

export default About;
