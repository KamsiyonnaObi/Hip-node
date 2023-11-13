"use client";

import { useState, useTransition } from "react";
import clsx from "clsx";

import FillIcon from "../icons/FillIcon";
import { likePost, reportPost, sharePost } from "@/utils/actions/post.action";

interface Props {
  postId: string;
  userId?: string;
  hasLiked?: boolean;
  hasCommented?: boolean;
  hasShared?: boolean;
  hasReported?: boolean;
  likes: number;
  shares: number;
  comments: number;
}

const ActionBar = ({
  postId,
  userId,
  hasLiked,
  hasCommented,
  hasShared,
  hasReported,
  likes,
  shares,
  comments,
}: Props) => {
  const [isLiked, setIsLiked] = useState<boolean | null>(hasLiked || null);
  const [numberLiked, setNumberLiked] = useState<number>(likes || 0);
  const [isShared, setIsShared] = useState<boolean | null>(hasShared || null);
  const [numberShared, setNumberShared] = useState<number>(shares || 0);
  const [isReported, setIsReported] = useState<boolean | null>(
    hasReported || null
  );
  const [isPending, startTransition] = useTransition();

  const handleLike = async () => {
    if (userId) {
      startTransition(async () => {
        const liked = await likePost({
          postId: JSON.parse(postId),
          userId: JSON.parse(userId),
          hasLiked: isLiked,
        });
        if (!liked) return;

        setIsLiked(liked.status);
        setNumberLiked(liked.number);
      });
    }
  };

  // TODO: implement sharing function later
  const handleShare = async () => {
    if (userId) {
      startTransition(async () => {
        const shared = await sharePost({
          postId: JSON.parse(postId),
          userId: JSON.parse(userId),
          hasShared: isShared,
        });
        if (!shared) return;
        setIsShared(shared.status);
        setNumberShared(shared.number);
      });
    }
  };

  // TODO: implement report function later
  const handleReport = async () => {
    if (userId) {
      startTransition(async () => {
        const reported = await reportPost({
          postId: JSON.parse(postId),
          userId: JSON.parse(userId),
          hasReported: isReported,
        });
        if (!reported) return;
        setIsReported(reported.status);
      });
    }
  };

  return (
    <section className="flex w-full flex-col items-start justify-start gap-5 rounded-2xl bg-background p-5 dark:bg-dark3">
      <div className="flex gap-[14px] rounded-md">
        <button
          disabled={isPending}
          className={clsx("h-7 w-7 rounded-md p-1", {
            "bg-red10": isLiked,
            "bg-background2 dark:bg-dark4": !isLiked,
          })}
          onClick={handleLike}
        >
          <FillIcon.Heart
            className={clsx({
              "fill-red80": isLiked,
              "fill-secondary3": !isLiked,
            })}
          />
        </button>
        <div
          className={clsx("flex gap-1", {
            "text-secondary2 dark:text-background": isLiked,
            "text-secondary3": !isLiked,
          })}
        >
          <p>{new Intl.NumberFormat().format(numberLiked ?? 0)} Likes</p>
        </div>
      </div>

      <div className="flex gap-[14px] rounded-md">
        <div
          className={clsx("h-7 w-7 rounded-md p-1", {
            "bg-red10": hasCommented,
            "bg-background2 dark:bg-dark4": !hasCommented,
          })}
        >
          <FillIcon.Comment
            className={clsx({
              "fill-red80": hasCommented,
              "fill-secondary3": !hasCommented,
            })}
          />
        </div>
        <div
          className={clsx("flex gap-1", {
            "text-secondary2 dark:text-background": hasCommented,
            "text-secondary3": !hasCommented,
          })}
        >
          <p>{new Intl.NumberFormat().format(comments ?? 0)} Comments</p>
        </div>
      </div>

      <div className="flex gap-[14px] rounded-md">
        <button
          disabled={isPending}
          className={clsx("h-7 w-7 rounded-md p-1", {
            "bg-red10": isShared,
            "bg-background2 dark:bg-dark4": !isShared,
          })}
          onClick={handleShare}
        >
          <FillIcon.Share
            className={clsx({
              "fill-red80": isShared,
              "fill-secondary3": !isShared,
            })}
          />
        </button>
        <div
          className={clsx("flex gap-1", {
            "text-secondary2 dark:text-background": isShared,
            "text-secondary3": !isShared,
          })}
        >
          <p>{new Intl.NumberFormat().format(numberShared ?? 0)} Shares</p>
        </div>
      </div>

      <div className="flex gap-[14px] rounded-md">
        <button
          disabled={isPending}
          className={clsx("h-7 w-7 rounded-md p-1", {
            "bg-red10": isReported,
            "bg-background2 dark:bg-dark4": !isReported,
          })}
          onClick={handleReport}
        >
          <FillIcon.Report
            className={clsx({
              "fill-red80": isReported,
              "fill-secondary3": !isReported,
            })}
          />
        </button>
        <div
          className={clsx("flex gap-1", {
            "text-secondary2 dark:text-background": isReported,
            "text-secondary3": !isReported,
          })}
        >
          <p>Report</p>
        </div>
      </div>
    </section>
  );
};

export default ActionBar;
