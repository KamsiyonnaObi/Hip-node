"use client";

import clsx from "clsx";
import { useState, useTransition } from "react";

import { ImageFallback as Image } from "@/components/shared/ImageFallback";
import FillIcon from "../icons/FillIcon";
import { format } from "date-fns";
import { VerticalLine } from "../icons/outlineIcons/VerticalLine";
import { ChatInput } from "@/components";
import { likeComment } from "@/utils/actions/post.action";

interface CommentProps {
  commentId?: string;
  postId: string;
  parentId?: string;
  userId: string;
  currentUserId?: string;
  currentUserImage?: string;
  name?: string;
  createdAt?: Date;
  updatedAt?: Date;
  imgUrl?: string;
  text?: string;
  replies?: string;
  hasLiked?: boolean | false;
}

const Comment = ({
  commentId,
  postId,
  parentId,
  currentUserId,
  currentUserImage,
  name,
  createdAt,
  updatedAt,
  imgUrl,
  text,
  hasLiked,
}: CommentProps) => {
  const formattedDate = format(new Date(createdAt ?? new Date()), "MMM dd");
  const [isLiked, setIsLiked] = useState(hasLiked || false);
  const [showComment, setShowComment] = useState(false);
  const [isPending, startTransition] = useTransition();

  const handleLike = async () => {
    if (currentUserId && commentId) {
      startTransition(async () => {
        const liked = await likeComment({
          postId,
          commentId,
          hasLiked,
        });
        if (!liked) return;
        setIsLiked(liked.status);
      });
    }
  };

  let editedText;
  if (updatedAt) {
    editedText = ` • Edited on ${format(new Date(updatedAt), "MMM dd")}`;
  }
  return (
    <section className="flex gap-2.5 bg-background2 dark:bg-dark2 md:gap-5 md:bg-background md:dark:bg-dark3">
      <div className="flex w-11 flex-col">
        <div className="relative h-9 w-9 shrink-0 rounded-full bg-yellow30 md:h-11 md:w-11">
          <Image
            className="absolute left-1/2 top-1/2 h-9 w-9 -translate-x-1/2 -translate-y-1/2 rounded-full md:h-11 md:w-11"
            src={
              imgUrl ||
              "https://res.cloudinary.com/colbycloud-next-cloudinary/image/upload/v1699055056/CldUploadWidget-unsigned/n58gdqqxsb90qaqjadra.png"
            }
            alt="profile"
            width="80"
            height="80"
          />
        </div>
        <VerticalLine className="w-9 grow basis-0 stroke-secondary5 md:w-11" />
      </div>
      <section className="flex flex-col gap-[15px] pb-5 md:pb-[30px]">
        <article className="flex max-w-[240px] flex-col gap-[15px] rounded-3xl border border-secondary5 p-[15px] md:max-w-none">
          <p className="md:body-regular caption-regular text-secondary2 dark:text-background2 ">
            <span className="body-semibold md:display-semibold ">{name} </span>•{" "}
            {formattedDate}
            {editedText}
          </p>
          <p className="body-regular break-words text-secondary3">{text}</p>
        </article>
        <div className="flex gap-5 pl-[15px]">
          <button disabled={isPending} onClick={handleLike}>
            <FillIcon.Heart
              className={clsx({
                "fill-red80": isLiked,
                "fill-secondary3": !isLiked,
              })}
            />
          </button>
          <button onClick={() => setShowComment(!showComment)}>
            <FillIcon.Reply className="h-5 w-5 fill-secondary3" />
          </button>
        </div>
        {showComment && (
          <ChatInput
            postId={postId}
            commentId={commentId}
            parentId={parentId}
            currentUserImage={currentUserImage}
            setShowComment={setShowComment}
          />
        )}
      </section>
    </section>
  );
};

export default Comment;
