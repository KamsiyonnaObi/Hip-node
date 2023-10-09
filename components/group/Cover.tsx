import React from "react";
import Image from "next/image";
import { Button } from "../ui/Button";
import FillIcon from "../icons/FillIcon";

interface Props {
  cover: string;
  icon: string;
  title: string;
  author: string;
}

const cover = ({ cover, icon, title, author }: Props) => {
  return (
    <article className="w-[335px] gap-[10px] rounded-[16px] bg-background p-[10px] dark:bg-dark3 md:w-[785px]">
      <div className="flex flex-col gap-[14px] md:gap-[20px]">
        <Image
          src={cover}
          alt="cover"
          width={765}
          height={174}
          className="w-[315px] rounded-[10px] md:w-[765px]"
        />
        <div className="flex w-[315px] flex-row justify-between md:w-[745px]">
          <div className="flex flex-row gap-[14px] md:gap-[20px]">
            <Image
              src={icon}
              alt="icon"
              width={70}
              height={70}
              className="w-[40px] rounded-full md:w-[70px]"
            />
            <div className="flex flex-col">
              <h1 className="md:h1-semibold display-semibold">{title}</h1>
              <p className="text-sm-regular md:body-regular text-secondary3">
                Created At{" "}
                <span className="caption-semibold md:body-semibold text-secondary2 dark:text-background2">
                  {author}
                </span>
              </p>
            </div>
          </div>
          <Button
            className="flex h-[40px] w-[80px] flex-row items-center justify-center gap-[10px]  p-[10px]"
            rounded
            color="blackWhite"
          >
            <FillIcon.Follow className="fill-secondary3 stroke-secondary3" />
            <p className="caption-semibold">Leave</p>
          </Button>
        </div>
      </div>
    </article>
  );
};

export default cover;
