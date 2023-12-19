"use client";
import React, { useState } from "react";
import { ImageFallback as Image } from "@/components/shared/ImageFallback";
import FillIcon from "./icons/FillIcon";

interface Props {
  avatar: string;
  image: string;
  title: string;
  name: string;
  descTitle: string;
  desc: string;
  date: string;
}

const PostGroup = ({
  avatar,
  image,
  title,
  name,
  descTitle,
  desc,
  date,
}: Props) => {
  const [isHeartClicked, setIsHeartClicked] = useState(false);

  const toggleHeartColor = () => {
    setIsHeartClicked((prevIsHeartClicked) => !prevIsHeartClicked);
  };

  return (
    <article className="mx-auto gap-[10px] rounded-[16px] bg-background p-[10px] shadow-lg dark:bg-dark3 dark:text-background2 md:w-[248px]">
      <div className="mx-auto flex flex-col gap-[10px]">
        <section className="flex flex-row md:gap-[10px]">
          <Image src={avatar} alt="avatar" width={34} height={34} />
          <div className="flex flex-col">
            <p className="caption-semibold line-clamp-1">{title}</p>
            <p className="text-sm-regular line-clamp-1">{name}</p>
          </div>
        </section>
        <Image
          src={image}
          alt="image"
          className="w-full md:w-[228px]"
          width={228}
          height={106}
        />
        <section className="flex w-[110px] flex-row gap-[20px]">
          <div onClick={toggleHeartColor}>
            <FillIcon.Heart
              className={isHeartClicked ? "fill-red80" : "fill-secondary5"}
            />
          </div>

          <FillIcon.Message className="fill-secondary5" />
          <FillIcon.Share className="fill-secondary5" />
        </section>
        <section className="flex flex-col gap-[10px]">
          <p className="body-semibold line-clamp-2 w-[315px] md:w-[228px]">
            {descTitle}
          </p>
          <p className="caption-regular line-clamp-4 w-[315px] md:w-[228px]">
            {desc}
          </p>
          <p className="caption-regular text-secondary3">{date}</p>
        </section>
      </div>
    </article>
  );
};

export default PostGroup;
