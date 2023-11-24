"use client";

// import clsx from "clsx";
import { useState } from "react";

import { ImageFallback as Image } from "@/components/shared/ImageFallback";
import FillIcon from "../icons/FillIcon";
import { format } from "date-fns";
import { VerticalLine } from "../icons/outlineIcons/VerticalLine";
import { ChatInput } from "@/components";
import { IComments } from "@/models/post.model";
// import { likeComment } from "@/utils/actions/post.action";

interface CommentProps {
  commentId: any;
  postId: string;
  userId: string;
  currentUserId: string;
  currentUserImage: string;
  name?: string;
  createdAt?: Date;
  updatedAt?: Date;
  imgUrl?: string;
  text?: string;
  replies?: string;
  hasLiked?: boolean | false;
  hasReplied?: boolean | false;
}

const Comment = ({
  commentId,
  postId,
  userId,
  currentUserId,
  currentUserImage,
  name,
  createdAt,
  updatedAt,
  imgUrl,
  text,
  replies,
  hasLiked,
  hasReplied,
}: CommentProps) => {
  const formattedDate = format(new Date(createdAt ?? new Date()), "MMM dd");
  // const [isLiked, setIsLiked] = useState(hasLiked || false);
  const [showComment, setShowComment] = useState(false);
  // const [isPending, startTransition] = useTransition();
  const [showAllReplies, setShowAllReplies] = useState(false);
  const replyList = JSON.parse(replies || "");
  const repliesToShow = showAllReplies ? replyList : replyList.slice(0, 3);

  // const handleLike = async () => {
  //   if (currentUserId) {
  //     startTransition(async () => {
  //       const liked = await likeComment({
  //         postId,
  //         commentId,
  //         currentUserId,
  //         hasLiked,
  //       });
  //       if (!liked) return;
  //       setIsLiked(liked.status);
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
          {/* <button disabled={isPending} onClick={handleLike}>
            <FillIcon.Heart
              className={clsx({
                "fill-red80": isLiked,
                "fill-secondary3": !isLiked,
              })}
            />
          </button> */}
          <button onClick={() => setShowComment(!showComment)}>
            <FillIcon.Reply className="h-5 w-5 fill-secondary3" />
          </button>

          {replyList.length > 5 && !showAllReplies ? (
            <button onClick={() => setShowAllReplies(true)}>
              <p className="md:h3-semibold body-semibold  text-secondary3">
                View all comments
              </p>
            </button>
          ) : (
            showAllReplies && (
              <button onClick={() => setShowAllReplies(false)}>
                <p className="md:h3-semibold body-semibold text-secondary3">
                  Hide comments
                </p>
              </button>
            )
          )}
        </div>
        {showComment && (
          <ChatInput
            postId={postId}
            commentId={commentId}
            currentUserImage={currentUserImage}
          />
        )}
        {repliesToShow.map((reply: IComments) => (
          <div key={JSON.stringify(reply._id)} className="text-lg text-white">
            <Comment
              commentId={reply._id}
              postId={postId}
              userId={JSON.stringify(reply.userId)}
              currentUserId={currentUserId}
              currentUserImage={currentUserImage}
              name={reply?.name}
              createdAt={reply.createdAt}
              updatedAt={reply.updatedAt}
              imgUrl={reply?.imgUrl}
              text={reply.text}
              replies={JSON.stringify(reply.replies)}
              hasLiked={reply.likes?.includes(JSON.parse(userId)) || false}
              hasReplied={reply.replies?.includes(JSON.parse(userId)) || false}
            />
          </div>
        ))}
      </section>
    </section>
  );
};

export default Comment;
