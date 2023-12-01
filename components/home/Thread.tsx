import { Comment } from "@/components";
import { IComments } from "@/models/post.model";
import Replies from "./Replies";

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
    <section className="flex flex-col gap-5 bg-background2 px-5 dark:bg-dark2 md:gap-[30px] md:rounded-b-lg md:bg-background md:px-[30px] md:pb-[30px] md:dark:bg-dark3">
      {comments?.map((comment) => {
        if (!comment.parentId) {
          return (
            <>
              <Comment
                key={comment?._id?.toString()}
                commentId={comment?._id?.toString()}
                postId={postId}
                userId={JSON.stringify(comment?.userId)}
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
              />
              {comments.map((reply) => {
                if (reply?.parentId?.toString() === comment?._id?.toString()) {
                  // console.log(
                  //   reply?.parentId?.toString() === comment?._id?.toString()
                  // );
                  <div className="ml-[65px]">
                    <Replies
                      key={reply?._id?.toString()}
                      commentId={reply?._id?.toString()}
                      postId={postId}
                      parentId={comment?._id?.toString()}
                      userId={JSON.stringify(comment?.userId)}
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
                    />
                  </div>;
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
