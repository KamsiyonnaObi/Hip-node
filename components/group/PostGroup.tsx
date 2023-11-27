"use client";
import React, { useState } from "react";
import { ImageFallback as Image } from "@/components/shared/ImageFallback";

import FillIcon from "../icons/FillIcon";
import Link from "next/link";
import { Button } from "../ui/Button";
import Html from "../shared/html";

interface Props {
  title: string;
  _id: string;
  groupUrl: string;
  post: string;
}

const PostGroup = ({ title, _id, groupUrl, post }: Props) => {
  const groupPost = JSON.parse(post);
  const postTitle = groupPost[0]?.title;
  const postImage = groupPost[0]?.image;
  const postContent = groupPost[0]?.content;
  const postDate = groupPost[0]?.createdAt;
  const [isHeartClicked, setIsHeartClicked] = useState(false);

  const toggleHeartColor = () => {
    setIsHeartClicked((prevIsHeartClicked) => !prevIsHeartClicked);
  };

  return (
    <article className="mx-auto gap-[10px] rounded-[16px] bg-background p-[10px] dark:bg-dark3 dark:text-background2 sm:w-[248px]">
      <div className="mx-auto flex flex-col gap-[10px]">
        <section className="flex flex-row justify-between sm:gap-[10px]">
          <div className="flex h-[34px] w-[34px] flex-row rounded-full">
            <Image
              src={groupUrl}
              alt="avatar"
              width={34}
              height={34}
              className="mr-[.62rem] h-[34px] w-[34px] rounded-full"
            />
            <div className="flex flex-col">
              <p className="caption-semibold line-clamp-1">{title}</p>
              <p className="text-sm-regular line-clamp-1">{postTitle}</p>
            </div>
          </div>
          <Link href={`/groups/${_id}`}>
            <Button
              color="white"
              className="body-semibold w-fit justify-end rounded-[6px] bg-background2 p-[9px] text-red80 dark:bg-background2"
            >
              Visit Group
            </Button>
          </Link>
        </section>
        <Image
          src={postImage}
          alt="Post Image"
          className="w-full rounded-[.625rem] sm:h-[106px] sm:w-[228px]"
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
          <div className="body-semibold line-clamp-2 w-[315px] sm:w-[228px]">
            <Html htmltext={postContent} />
          </div>
          <div className="caption-regular text-secondary3">{postDate}</div>
        </section>
      </div>
    </article>
  );
};

export default PostGroup;
