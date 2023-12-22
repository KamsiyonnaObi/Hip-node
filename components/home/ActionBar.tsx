"use client";

import { useEffect, useState, useTransition } from "react";
import clsx from "clsx";

import FillIcon from "../icons/FillIcon";
import { likePost } from "@/utils/actions/post.action";
import ShareModal from "./ShareModal";
import ReportModal from "./ReportModal";

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
  title: string;
  body: string;
}

const ActionBar = ({
  postId,
  userId,
  hasLiked,
  hasCommented,
  hasReported,
  likes,
  comments,
  title,
  body,
}: Props) => {
  const [isLiked, setIsLiked] = useState<boolean | null>(hasLiked || null);
  const [numberLiked, setNumberLiked] = useState<number>(likes || 0);
  const [isPending, startTransition] = useTransition();
  const [showShareModal, setShowShareModal] = useState(false);
  const [showReportModal, setShowReportModal] = useState(false);

  useEffect(() => {
    if (showShareModal || showReportModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showShareModal, showReportModal]);

  const handleLike = async () => {
    if (userId) {
      startTransition(async () => {
        const liked = await likePost({
          postId,
          hasLiked: isLiked,
        });
        if (!liked) return;

        setIsLiked(liked.status);
        setNumberLiked(liked.number);
      });
    }
  };

  const openShareModal = () => {
    setShowShareModal(true);
  };

  const closeShareModal = () => {
    setShowShareModal(false);
  };

  const openReportModal = () => {
    setShowReportModal(true);
  };

  const closeReportModal = () => {
    setShowReportModal(false);
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
          className="h-7 w-7 rounded-md bg-background2 p-1 dark:bg-dark4"
          onClick={openShareModal}
        >
          <FillIcon.Share className="fill-secondary3" />
        </button>

        <p className="text-secondary3">Share</p>
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

      <div className="flex gap-[14px] rounded-md">
        <button
          disabled={isPending}
          className={clsx("h-7 w-7 rounded-md p-1", {
            "bg-red10": hasReported,
            "bg-background2 dark:bg-dark4": !hasReported,
          })}
          onClick={openReportModal}
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
          <p>Report</p>
        </div>
      </div>

      {showReportModal && (
        <>
          <div
            className="fixed inset-0 z-10 bg-black opacity-50"
            onClick={openReportModal}
          ></div>
          <ReportModal
            postId={postId}
            userId={userId}
            close={closeReportModal}
          />
        </>
      )}
    </section>
  );
};

export default ActionBar;
