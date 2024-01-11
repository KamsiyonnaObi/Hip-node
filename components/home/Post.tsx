"use client";
import React, { useState, useTransition } from "react";
import clsx from "clsx";

import { ImageFallback as Image } from "../shared/ImageFallback";
import FillIcon from "../icons/FillIcon";
import OutlineIcon from "../icons/OutlineIcon";
import { getTimestamp } from "@/utils";
import Link from "next/link";
import EditDeletePopup from "./EditDeletePopup";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import { likePost } from "@/utils/actions/post.action";
import { createNotification } from "@/utils/actions/notification.action";
import { toast } from "../ui/use-toast";
import { useSocketContext } from "@/providers/SocketProvider";

interface Props {
  currentUserId: string;
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
  hasLiked: boolean | false;
  postUser: string;
}

const Post = ({
  currentUserId,
  postImage,
  title,
  tags,
  avatar,
  username,
  createdAt,
  views,
  likes,
  comments,
  hasLiked,
  _id,
  showEdit,
  postUser,
}: Props) => {
  const { isOpen: showPopup, ref: menuRef, toggleOpen } = useOutsideClick();
  const [isLiked, setIsLiked] = useState<boolean | null>(hasLiked || null);
  const [numberLiked, setNumberLiked] = useState<number>(likes || 0);
  const [isPending, startTransition] = useTransition();
  const activeUserList = useSocketContext().activeUserList;

  const handleLike = async () => {
    if (currentUserId) {
      startTransition(async () => {
        const liked = await likePost({
          postId: _id,
          hasLiked: isLiked,
        });
        if (!hasLiked) {
          await createNotification({
            title,
            type: "reaction",
            userTo: postUser,
            link: `/posts/${_id}`,
          });
        }

        if (liked) {
          setIsLiked(liked.status);
          setNumberLiked(liked.number);
        }
      });
      return toast({
        title: `${!isLiked ? "Liked Post" : "Removed Like"}`,
        variant: !isLiked ? "default" : "destructive",
      });
    }
  };
  return (
    <article className="flex w-[350px] flex-row gap-[30px] rounded-[10px] bg-background p-[14px] shadow-lg dark:bg-dark3 md:w-full md:rounded-[16px] md:p-[20px]">
      <div className="flex w-full flex-row gap-[14px]">
        <Image
          src={postImage}
          alt="Post"
          className="h-[56px] w-[56px] rounded-[16px] object-cover md:h-[156px] md:w-[156px]"
          width={200}
          height={200}
        />
        <div className="flex w-full flex-col justify-between ">
          <div className="flex w-full flex-row justify-between">
            <section className="flex w-[187px] flex-col md:w-full ">
              <Link
                href={`/posts/${_id}`}
                className="md:h3-semibold caption-semibold line-clamp-2 break-words dark:text-background2"
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
              <section
                className={clsx(
                  "flex h-[30px] w-[30px] items-center justify-center rounded-[15px] md:gap-[5px] md:p-[5px]",
                  {
                    "bg-red10 dark:bg-dark4": isLiked,
                    "bg-secondary6 dark:bg-dark4": !isLiked,
                  }
                )}
              >
                <button
                  disabled={isPending}
                  className={clsx(
                    "relative hidden h-7 w-7 rounded-2xl md:block"
                  )}
                  onClick={handleLike}
                >
                  <FillIcon.Heart
                    className={clsx(
                      "left-1/2 top-1/2 hidden h-5 w-5 -translate-x-1/2 -translate-y-1/2 md:absolute md:block",
                      {
                        "fill-red80": isLiked,
                        "fill-secondary5": !isLiked,
                      }
                    )}
                  />
                </button>
                <Image
                  className="md:hidden"
                  src={avatar}
                  alt="avatar"
                  width={20}
                  height={25}
                />
              </section>
              <div
                className="relative"
                ref={menuRef}
                onClick={() => toggleOpen()}
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
            <div className="hidden shrink-0 overflow-hidden rounded-full bg-purple10 md:flex md:h-10 md:w-10">
              <Image
                src={avatar}
                alt="avatar"
                width={64}
                height={64}
                className="object-cover"
              />
            </div>
            <section className="flex flex-row justify-between md:w-full">
              <div className="hidden flex-col md:flex">
                <div className="flex gap-[.25rem]">
                  <Link href={`/profile/${postUser}`}>
                    <p className="md:body-semibold dark:text-secondary6">
                      {username}
                    </p>
                  </Link>
                  {activeUserList.includes(postUser!) ? (
                    <OutlineIcon.Ellipse className="fill-green" />
                  ) : (
                    <OutlineIcon.Ellipse className="fill-secondary5" />
                  )}
                </div>
                <p className="md:text-sm-regular text-secondary3 dark:text-secondary5">
                  {getTimestamp(createdAt)}
                </p>
              </div>
              <div className="md:body-regular text-xs-regular flex flex-row items-center justify-center gap-[40px] text-secondary3 dark:text-secondary5">
                <p>{views !== undefined ? views : 0} Views</p>
                <p>{numberLiked !== undefined ? numberLiked : 0} Likes</p>
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
