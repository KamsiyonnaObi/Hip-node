"use client";

import clsx from "clsx";
import { usePathname, useRouter } from "next/navigation";
import { ObjectId } from "mongoose";

import FillIcon from "../icons/FillIcon";
import { likePost } from "@/utils/actions/post.action";

interface Props {
  postId: ObjectId;
  userId?: ObjectId;
  hasLiked?: boolean;
  hasCommented?: boolean;
  hasShared?: boolean;
  hasreported?: boolean;
}

const ActionBar = ({
  postId,
  userId,
  hasLiked,
  hasCommented,
  hasShared,
  hasreported,
}: Props) => {
  const pathname = usePathname;
  const rounter = useRouter();

  const handleLike = async () => {
    if (userId) {
      await likePost({ postId, userId, hasLiked, path: pathname });
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
          {/* {a.value && <p>{new Intl.NumberFormat().format(a.value)} </p>} */}
          <p>Likes</p>
        </div>
      </div>

      <button className="flex gap-[14px] rounded-md">
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
          {/* {a.value && <p>{new Intl.NumberFormat().format(a.value)} </p>} */}
          <p>Comments</p>
        </div>
      </button>

      <button className="flex gap-[14px] rounded-md">
        <div
          className={clsx("h-7 w-7 rounded-md p-1", {
            "bg-red10": hasShared,
            "bg-background2 dark:bg-dark4": !hasShared,
          })}
        >
          <FillIcon.Share
            className={clsx({
              "fill-red80": hasShared,
              "fill-secondary3": !hasShared,
            })}
          />
        </div>
        <div
          className={clsx("flex gap-1", {
            "text-secondary2 dark:text-background": hasShared,
            "text-secondary3": !hasShared,
          })}
        >
          {/* {a.value && <p>{new Intl.NumberFormat().format(a.value)} </p>} */}
          <p>Shares</p>
        </div>
      </button>

      <button className="flex gap-[14px] rounded-md">
        <div
          className={clsx("h-7 w-7 rounded-md p-1", {
            "bg-red10": hasreported,
            "bg-background2 dark:bg-dark4": !hasreported,
          })}
        >
          <FillIcon.Report
            className={clsx({
              "fill-red80": hasreported,
              "fill-secondary3": !hasreported,
            })}
          />
        </div>
        <div
          className={clsx("flex gap-1", {
            "text-secondary2 dark:text-background": hasreported,
            "text-secondary3": !hasreported,
          })}
        >
          {/* {a.value && <p>{new Intl.NumberFormat().format(a.value)} </p>} */}
          <p>Report</p>
        </div>
      </button>
    </section>
  );
};

export default ActionBar;
