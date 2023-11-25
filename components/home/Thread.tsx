import { Comment } from "@/components";
import { IComments } from "@/models/post.model";

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
      {comments?.map((comment) => (
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
          replies={JSON.stringify(comment?.replies)}
          hasLiked={
            comment?.likes
              ?.map((id) => id.toString())
              .includes(currentUserId || "") || false
          }
          hasReplied={
            (comment?.replies || [])
              .map((reply) => reply?._id?.toString())
              .includes(currentUserId) || false
          }
        />
      ))}
    </section>
  );
};

export default Thread;
