"use client";

import Image from "next/image";
import clsx from "clsx";
import { useState, useTransition } from "react";

import FillIcon from "../icons/FillIcon";
import OutlineIcon from "../icons/OutlineIcon";
import { format } from "date-fns";
import { VerticalLine } from "../icons/outlineIcons/VerticalLine";
import { likeComment, replyToComment } from "@/utils/actions/comment.action";

interface CommentProps {
  commentId: string;
  userId: string;
  name: string;
  createdAt: Date;
  updatedAt?: Date;
  imgUrl?: string;
  text: string;
  hasLiked: boolean | null;
  hasReplied: boolean | null;
}

const Comment = ({
  commentId,
  userId,
  name,
  createdAt,
  updatedAt,
  imgUrl,
  text,
  hasLiked,
  hasReplied,
}: CommentProps) => {
  const formattedDate = format(new Date(createdAt), "MMM dd");
  const [isLiked, setIsLiked] = useState(hasLiked || false);
  // const [isReplied, setIsReplied] = useState(hasReplied || false);
  const [isPending, startTransition] = useTransition();

  const handleLike = async () => {
    if (userId) {
      startTransition(async () => {
        const liked = await likeComment({
          commentId: JSON.parse(commentId),
          hasLiked: isLiked,
        });
        if (!liked) return;
        setIsLiked(liked.status);
      });
    }
  };

  // TODO implement reply function later
  // const handleReply = async () => {
  //   if (userId) {
  //     startTransition(async () => {
  //       const replied = await replyToComment({
  //         commentId: JSON.parse(commentId),
  //         hasReplied: isReplied,
  //       });
  //       if (!replied) return;
  //       setIsReplied(replied.status);
  //     });
  //   }
  // };

  let editedText;
  if (updatedAt) {
    editedText = ` • Edited on ${format(new Date(updatedAt), "MMM dd")}`;
  }
  return (
    <section className="flex gap-5 bg-background2 dark:bg-dark2 md:bg-background md:dark:bg-dark3">
      <div className="flex w-11 flex-col">
        <div className="relative h-11 w-11 shrink-0 rounded-full bg-yellow30">
          <Image
            className="absolute left-1/2 top-1/2 h-11 w-11 -translate-x-1/2 -translate-y-1/2 rounded-full"
            src={
              imgUrl ||
              "https://res.cloudinary.com/colbycloud-next-cloudinary/image/upload/v1699055056/CldUploadWidget-unsigned/n58gdqqxsb90qaqjadra.png"
            }
            alt="profile"
            width="80"
            height="80"
          />
        </div>
        <VerticalLine className="w-11 grow basis-0 stroke-secondary5" />
      </div>
      <section className="flex flex-col gap-[15px] pb-5 md:pb-[30px]">
        <article className="flex flex-col gap-[15px] rounded-3xl border border-secondary5 p-[15px]">
          <p className="md:body-regular caption-regular text-secondary2 dark:text-background2 ">
            <span className="body-semibold md:display-semibold ">{name} </span>•{" "}
            {formattedDate}
            {editedText}
          </p>
          <p className="body-regular text-secondary3">{text}</p>
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
          {/* Add later disabled={isPending} onClick={handleReply} */}
          <button>
            <FillIcon.Reply className="h-5 w-5 fill-secondary3" />
          </button>
          <button>
            <OutlineIcon.More className="h-5 w-5 fill-secondary3" />
          </button>
        </div>
      </section>
    </section>
  );
};

export default Comment;
