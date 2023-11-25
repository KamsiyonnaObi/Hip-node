"use client";
import React, { useEffect, useRef, useState } from "react";
import { ImageFallback as Image } from "../shared/ImageFallback";
import FillIcon from "../icons/FillIcon";
import OutlineIcon from "../icons/OutlineIcon";
import { getTimestamp } from "@/utils";
import Link from "next/link";
import EditDeletePopup from "./EditDeletePopup";

interface Props {
  postImage: string;
  title: string;
  tags: string[];
  avatar: string;
  username: string;
  createdAt: Date;
  views: number;
  likes: number;
  comments: number;
  _id: string;
  showEdit: any;
}

const Post = ({
  postImage,
  title,
  tags,
  avatar,
  username,
  createdAt,
  views,
  likes,
  comments,
  _id,
  showEdit,
}: Props) => {
  const [showPopup, setShowPopup] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const handleOutsideClick = (e: MouseEvent) => {
    if (!menuRef.current) return;
    if (!menuRef.current.contains(e.target as Node)) {
      setShowPopup(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleOutsideClick);

    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, []);
  return (
    <article className="flex w-[335px] flex-row gap-[30px] rounded-[10px] bg-background p-[14px] dark:bg-dark3 md:w-[785px] md:rounded-[16px] md:p-[20px]">
      <div className="flex flex-row gap-[14px]">
        <Image
          src={postImage}
          alt="Post"
          className="h-[56px] w-[56px] rounded-[16px] md:h-[156px] md:w-[156px]"
          width={56}
          height={56}
        />
        <div className="flex flex-col gap-[30px]">
          <div className="flex flex-row gap-5">
            <section className="flex w-[187px] flex-col md:w-[512px]">
              <Link
                href={`/posts/${_id}`}
                className="md:h3-semibold caption-semibold dark:text-background2"
              >
                {title}
              </Link>
              <div className="mt-2 flex flex-row gap-[10px]">
                {tags.map((tag, index) => (
                  <div
                    key={index}
                    className="text-xs-semibold gap-[10px] rounded-[20px] bg-secondary6 px-[8px] py-[2px] text-center text-secondary4 dark:bg-dark4 dark:text-secondary5"
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </section>
            <section className="flex flex-row gap-2.5">
              <section className="flex h-[30px] w-[30px] items-center justify-center rounded-[15px] bg-secondary6 dark:bg-dark4 md:gap-[5px] md:p-[5px]">
                <FillIcon.Heart className="hidden fill-secondary5 md:flex" />
                <Image
                  className="rounded-full md:hidden"
                  src={avatar}
                  alt="avatar"
                  width={30}
                  height={30}
                />
              </section>
              <div
                className="relative"
                ref={menuRef}
                onClick={() => setShowPopup(!showPopup)}
              >
                {showEdit && (
                  <OutlineIcon.VerticalDots className="mt-1 hidden fill-secondary5 md:flex" />
                )}
                {showPopup && (
                  <div className="absolute right-1 top-6">
                    <EditDeletePopup postId={_id} />
                  </div>
                )}
              </div>
            </section>
          </div>
          <div className="flex flex-row gap-[10px]">
            <section className="hidden items-center justify-center rounded-full bg-purple10 md:flex md:h-[40px] md:w-[40px]">
              <Image
                src={avatar}
                alt="avatar"
                width={40}
                height={40}
                className="rounded-full"
              />
            </section>
            <section className="flex flex-row justify-between md:w-[521px]">
              <div className="hidden flex-col md:flex">
                <div className="flex gap-[.25rem]">
                  <p className="md:body-semibold dark:text-secondary6">
                    {username}
                  </p>
                  <OutlineIcon.Ellipse />
                </div>
                <p className="md:text-sm-regular text-secondary3 dark:text-secondary5">
                  {getTimestamp(createdAt)}
                </p>
              </div>
              <div className="md:body-regular text-xs-regular flex flex-row items-center justify-center gap-[40px] text-secondary3 dark:text-secondary5">
                <p>{views !== undefined ? views : 0} Views</p>
                <p>{likes !== undefined ? likes : 0} Likes</p>
                <p>{comments !== undefined ? comments : 0} Comments</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Post;
