import React from "react";
import { Button } from "../ui/Button";
import Link from "next/link";

interface Props {
  title: string;
  desc: string;
  buttonText: string;
}

const CreateGroup = ({ title, desc, buttonText }: Props) => {
  return (
    <article className="mt-[2.5rem] flex w-[350px] flex-col gap-2.5 rounded-[16px] bg-[#FF7C4D] p-5 text-background shadow-lg sm:mt-0 sm:w-full">
      <div className="flex flex-col gap-5">
        <section className="flex flex-col gap-[6px]">
          <h3 className="h3-semibold">{title}</h3>
          <p className="caption-regular line-clamp-2">{desc}</p>
        </section>
        <section className="flex flex-row gap-[21px] sm:justify-center">
          <Link href="/info/code-of-conduct">
            <Button className="body-semibold rounded-[6px] bg-red60 px-4 py-[9px] lg:px-[15px]">
              Code of Conduct
            </Button>
          </Link>
          <Link href={"/groups/create"}>
            <Button
              color="white"
              className="body-semibold w-[132px] justify-center rounded-[6px] py-[9px] text-red80 "
            >
              {buttonText}
            </Button>
          </Link>
        </section>
      </div>
    </article>
  );
};

export default CreateGroup;
