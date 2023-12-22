"use client";
import React, { useState } from "react";
import { ImageFallback as Image } from "@/components/shared/ImageFallback";

import FillIcon from "../icons/FillIcon";
import Link from "next/link";
import Html from "../shared/html";
import { likePost } from "@/utils/actions/post.action";

interface Props {
  title: string;
  _id: string;
  groupUrl: string;
  post: string;
  userId: string;
}

const PostGroup = ({ title, _id, groupUrl, post, userId }: Props) => {
  const groupPost = JSON.parse(post);
  const postTitle = groupPost?.title;
  const postImage = groupPost?.image;
  const postContent = groupPost?.content;
  const postDate = groupPost?.createdAt;
  const [isHeartClicked, setIsHeartClicked] = useState(
    groupPost.likes.includes(userId)
  );
  // const { createdAt, title, image, content } = groupPost;
  const toggleHeartColor = async () => {
    const likes = await likePost({
      postId: groupPost._id,
      userId,
      hasLiked: isHeartClicked,
    });

    setIsHeartClicked(likes.status);
  };

  return (
    <article className="mx-auto gap-[10px] rounded-[16px] bg-background p-[10px] shadow-lg dark:bg-dark3 dark:text-background2 sm:w-[248px]">
      <div className="mx-auto flex flex-col gap-[10px]">
        <Link href={`/groups/${_id}`}>
          <section className="flex flex-row justify-between sm:gap-[10px]">
            <div className="flex h-[34px] flex-row rounded-full">
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
          </section>
        </Link>
        <Link href={`/groups/${_id}`}>
          <Image
            src={postImage}
            alt="Post Image"
            className="h-full w-full rounded-[.625rem] sm:w-[228px]"
            width={228}
            height={106}
          />
        </Link>
        <section className="flex w-[110px] flex-row gap-[20px]">
          <div onClick={toggleHeartColor}>
            <FillIcon.Heart
              className={isHeartClicked ? "fill-red80" : "fill-secondary5"}
            />
          </div>
          <Link href={`/posts/${groupPost._id}`}>
            <FillIcon.Message className="fill-secondary5" />
          </Link>
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
