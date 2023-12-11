import Comment from "@/components/home/Comment";
import { IComments } from "@/models/post.model";
import { Curve } from "../icons/outlineIcons/Curve";

interface ThreadProps {
  currentUserId?: string;
  currentUserImage: string;
  postId: string;
  comments: IComments[];
}

const Thread = ({
  currentUserId,
  currentUserImage,
  comments,
  postId,
}: ThreadProps) => {
  return (
    <section className="flex flex-col bg-background2 dark:bg-dark2 md:rounded-b-lg md:bg-background md:px-[30px] md:pb-[30px] md:dark:bg-dark3">
      {comments?.map((comment) => {
        if (!comment.parentId && comment.createdAt) {
          const commentDate = comment.createdAt;
          const isLastReply = !comments.some((r) => {
            const date = r.createdAt || 0;
            return (
              r?.parentId?.toString() === comment?._id?.toString() &&
              date > commentDate
            );
          });
          return (
            <>
              <Comment
                key={comment?._id?.toString()}
                commentId={comment?._id?.toString()}
                postId={postId}
                userId={comment?.userId?.toString() || "unknown"}
                currentUserId={currentUserId}
                currentUserImage={currentUserImage}
                name={comment?.name}
                createdAt={comment?.createdAt}
                updatedAt={comment?.updatedAt}
                imgUrl={comment?.imgUrl}
                text={comment?.text}
                hasLiked={
                  comment?.likes?.toString().includes(currentUserId || "") ||
                  false
                }
                isLastReply={isLastReply}
              />

              {comments.map((reply) => {
                if (reply?.parentId?.toString() === comment?._id?.toString()) {
                  const replyDate = reply.createdAt || 0;

                  const isFirstReply = !comments.some((r) => {
                    const date = r.createdAt || 0;
                    return (
                      r?.parentId?.toString() === comment?._id?.toString() &&
                      date < replyDate
                    );
                  });
                  const isLastReply = !comments.some((r) => {
                    const date = r.createdAt || 0;
                    return (
                      r?.parentId?.toString() === comment?._id?.toString() &&
                      date > replyDate
                    );
                  });

                  return (
                    <div className="flex" key={reply?._id?.toString()}>
                      {isFirstReply && (
                        <Curve className="h-9 w-9 stroke-secondary5 md:h-11 md:w-11" />
                      )}

                      {!isFirstReply && (
                        <div className="h-9 w-9 md:h-11 md:w-11" />
                      )}
                      <Comment
                        commentId={reply?._id?.toString()}
                        parentId={reply?.parentId?.toString()}
                        postId={postId}
                        userId={comment?.userId?.toString() || "unknown"}
                        currentUserId={currentUserId}
                        currentUserImage={currentUserImage}
                        name={reply?.name}
                        createdAt={reply?.createdAt}
                        updatedAt={reply?.updatedAt}
                        imgUrl={reply?.imgUrl}
                        text={reply?.text}
                        hasLiked={
                          reply?.likes
                            ?.toString()
                            .includes(currentUserId || "") || false
                        }
                        isLastReply={isLastReply}
                      />
                    </div>
                  );
                }

                return null;
              })}
            </>
          );
        }
        return null;
      })}
    </section>
  );
};

export default Thread;
