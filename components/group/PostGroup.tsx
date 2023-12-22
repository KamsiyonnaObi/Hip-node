"use client";
import React, { useEffect, useState, useTransition } from "react";
import { ImageFallback as Image } from "@/components/shared/ImageFallback";

import FillIcon from "../icons/FillIcon";
import Link from "next/link";
import Html from "../shared/html";
import { likePost } from "@/utils/actions/post.action";
import ShareModal from "../home/ShareModal";
import { createNotification } from "@/utils/actions/notification.action";
import { toast } from "../ui/use-toast";
import clsx from "clsx";

interface Props {
  title: string;
  _id: string;
  groupUrl: string;
  post: string;
  body: string;
  hasLiked: boolean | null;
  likes: number;
  postUser: string;
  currentUserId: string;
}

const PostGroup = ({
  title,
  _id,
  groupUrl,
  post,
  body,
  hasLiked,
  postUser,
  currentUserId,
}: Props) => {
  const [isLiked, setIsLiked] = useState<boolean | null>(hasLiked || null);
  const [isPending, startTransition] = useTransition();
  const [showShareModal, setShowShareModal] = useState(false);

  const groupPost = JSON.parse(post);
  const { createdAt, title: postTitle, image, content } = groupPost;

  useEffect(() => {
    if (showShareModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showShareModal]);

  const handleLike = async () => {
    if (currentUserId) {
      startTransition(async () => {
        const liked = await likePost({
          postId: groupPost._id,
          hasLiked: isLiked,
        });
        if (!hasLiked) {
          await createNotification({
            title,
            type: "reaction",
            link: `/posts/${_id}`,
            userTo: postUser,
          });
        }
        if (liked) {
          setIsLiked(liked.status);
        }
      });
      return toast({
        title: `${!isLiked ? "Liked Post" : "Removed Like"}`,
        variant: !isLiked ? "default" : "destructive",
      });
    }
  };
  const openShareModal = () => {
    setShowShareModal(true);
  };

  const closeShareModal = () => {
    setShowShareModal(false);
  };

  return (
    <article className="mx-auto gap-[10px] rounded-[16px] bg-background p-[10px] shadow-lg dark:bg-dark3 dark:text-background2 sm:w-[248px]">
      <div className="mx-auto flex flex-col gap-[10px]">
        <Link href={`/groups/${_id}`}>
          <section className="flex flex-row items-center justify-between sm:gap-[10px]">
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
            src={image}
            alt="Post Image"
            className="h-full w-full rounded-[.625rem] sm:w-[228px]"
            width={228}
            height={106}
          />
        </Link>
        <section className="flex w-[110px] flex-row items-center gap-[20px]">
          <button
            disabled={isPending}
            className={clsx(
              "my-auto flex h-7 w-7 items-center justify-center rounded-2xl pt-[3px]"
            )}
            onClick={handleLike}
          >
            <FillIcon.Heart
              className={clsx("flex", {
                "fill-red80": isLiked,
                "fill-secondary5": !isLiked,
              })}
            />
          </button>
          <div className="flex items-center">
            <Link href={`/posts/${groupPost._id}`}>
              <FillIcon.Comment className="fill-secondary5" />
            </Link>
          </div>
          <div className="flex gap-[14px] rounded-md">
            <button
              disabled={isPending}
              className="h-7 w-7 rounded-md bg-background2 p-1 dark:bg-dark4"
              onClick={openShareModal}
            >
              <FillIcon.Share className="fill-secondary5" />
            </button>
          </div>
          {showShareModal && (
            <>
              <div
                className="fixed inset-0 z-10 bg-black opacity-50"
                onClick={closeShareModal}
              ></div>
              <ShareModal
                url={window.location.href}
                close={closeShareModal}
                title={title}
                body={body}
              />
            </>
          )}
        </section>
        <section className="flex flex-col gap-[10px]">
          <div className="body-semibold line-clamp-2 w-[315px] sm:w-[228px]">
            <Html htmltext={content} />
          </div>
          <div className="caption-regular text-secondary3">{createdAt}</div>
        </section>
      </div>
    </article>
  );
};

export default PostGroup;
