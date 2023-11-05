"use client";

import clsx from "clsx";
import { usePathname, useRouter } from "next/navigation";

import FillIcon from "../icons/FillIcon";
import {
  commentPost,
  likePost,
  reportPost,
  sharePost,
} from "@/utils/actions/post.action";

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
  const pathname = usePathname;
  const path = pathname();

  const handleLike = async () => {
    if (userId) {
      await likePost({
        postId: JSON.parse(postId),
        userId: JSON.parse(userId),
        hasLiked,
        path,
      });
    }
  };
  const handleComment = async () => {
    if (userId) {
      await commentPost({
        postId: JSON.parse(postId),
        userId: JSON.parse(userId),
        hasCommented,
        path,
      });
    }
  };

  const handleShare = async () => {
    if (userId) {
      await sharePost({
        postId: JSON.parse(postId),
        userId: JSON.parse(userId),
        hasShared,
        path,
      });
    }
  };

  const handleReport = async () => {
    if (userId) {
      await reportPost({
        postId: JSON.parse(postId),
        userId: JSON.parse(userId),
        hasReported,
        path,
      });
    }
  };

  return (
    <section className="flex w-full flex-col items-start justify-start gap-5 rounded-2xl bg-background p-5 dark:bg-dark3">
      <div className="flex gap-[14px] rounded-md">
        <button
          className={clsx("h-7 w-7 rounded-md p-1", {
            "bg-red10": hasLiked,
            "bg-background2 dark:bg-dark4": !hasLiked,
          })}
          onClick={handleLike}
        >
          <FillIcon.Heart
            className={clsx({
              "fill-red80": hasLiked,
              "fill-secondary3": !hasLiked,
            })}
          />
        </button>
        <div
          className={clsx("flex gap-1", {
            "text-secondary2 dark:text-background": hasLiked,
            "text-secondary3": !hasLiked,
          })}
        >
          <p>{new Intl.NumberFormat().format(likes)} Likes</p>
        </div>
      </div>

      <div className="flex gap-[14px] rounded-md">
        <button
          className={clsx("h-7 w-7 rounded-md p-1", {
            "bg-red10": hasCommented,
            "bg-background2 dark:bg-dark4": !hasCommented,
          })}
          onClick={handleComment}
        >
          <FillIcon.Comment
            className={clsx({
              "fill-red80": hasCommented,
              "fill-secondary3": !hasCommented,
            })}
          />
        </button>
        <div
          className={clsx("flex gap-1", {
            "text-secondary2 dark:text-background": hasCommented,
            "text-secondary3": !hasCommented,
          })}
        >
          {/* {a.value && <p>{new Intl.NumberFormat().format(a.value)} </p>} */}
          <p>{new Intl.NumberFormat().format(comments)} Comments</p>
        </div>
      </div>

      <div className="flex gap-[14px] rounded-md">
        <button
          className={clsx("h-7 w-7 rounded-md p-1", {
            "bg-red10": hasShared,
            "bg-background2 dark:bg-dark4": !hasShared,
          })}
          onClick={handleShare}
        >
          <FillIcon.Share
            className={clsx({
              "fill-red80": hasShared,
              "fill-secondary3": !hasShared,
            })}
          />
        </button>
        <div
          className={clsx("flex gap-1", {
            "text-secondary2 dark:text-background": hasShared,
            "text-secondary3": !hasShared,
          })}
        >
          {/* {a.value && <p>{new Intl.NumberFormat().format(a.value)} </p>} */}
          <p>{new Intl.NumberFormat().format(shares)} Shares</p>
        </div>
      </div>

      <div className="flex gap-[14px] rounded-md">
        <button
          className={clsx("h-7 w-7 rounded-md p-1", {
            "bg-red10": hasReported,
            "bg-background2 dark:bg-dark4": !hasReported,
          })}
          onClick={handleReport}
        >
          <FillIcon.Report
            className={clsx({
              "fill-red80": hasReported,
              "fill-secondary3": !hasReported,
            })}
          />
        </button>
        <div
          className={clsx("flex gap-1", {
            "text-secondary2 dark:text-background": hasReported,
            "text-secondary3": !hasReported,
          })}
        >
          {/* {a.value && <p>{new Intl.NumberFormat().format(a.value)} </p>} */}
          <p>Report</p>
        </div>
      </div>
    </section>
  );
};

export default ActionBar;
