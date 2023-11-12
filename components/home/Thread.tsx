import { Comment, ReplyComment } from "@/components";
import { IComment } from "@/models/comment.model";

interface ThreadProps {
  comments: IComment[];
}

const Thread = ({ comments }: ThreadProps) => {
  return (
    <section className="flex flex-col gap-5 bg-background2 px-5 dark:bg-dark2 md:gap-[30px] md:rounded-b-lg md:bg-background md:px-[30px] md:pb-[30px] md:dark:bg-dark3">
      {comments.map((comment) => (
        <div key={JSON.stringify(comment._id)}>
          <Comment
            name={comment.userId.username}
            createdAt={comment.createdAt}
            updatedAt={comment.updatedAt}
            imgUrl={comment.userId.profileImage}
            text={comment.text}
          />
          {comment.replies?.map((reply) => (
            <div key={JSON.stringify(reply._id)}>
              <ReplyComment
                name={reply.userId.username}
                createdAt={reply.createdAt}
                updatedAt={reply.updatedAt}
                imgUrl={reply.userId.profileImage}
                text={reply.text}
              />
            </div>
          ))}
        </div>
      ))}
    </section>
  );
};

export default Thread;
