import { Comment, ReplyComment } from "@/components";
import { IComment } from "@/models/comment.model";

interface ThreadProps {
  currentUserId: string;
  comments: IComment[];
}

const Thread = ({ currentUserId, comments }: ThreadProps) => {
  // why isn't replies displayed
  console.log(comments[0]);
  return (
    <section className="flex flex-col gap-5 bg-background2 px-5 dark:bg-dark2 md:gap-[30px] md:rounded-b-lg md:bg-background md:px-[30px] md:pb-[30px] md:dark:bg-dark3">
      {comments.map((comment) => (
        <div key={JSON.stringify(comment._id)}>
          <Comment
            commentId={JSON.stringify(comment._id)}
            userId={JSON.stringify(comment.userId._id)}
            name={comment.userId.username}
            createdAt={comment.createdAt}
            updatedAt={comment.updatedAt}
            imgUrl={comment.userId.profileImage}
            text={comment.text}
            hasLiked={
              comment.likes?.includes(JSON.parse(currentUserId)) || false
            }
            hasReplied={
              comment.replies?.includes(JSON.parse(currentUserId)) || false
            }
          />
          {comment.replies?.map((reply) => (
            // <div key={JSON.stringify(reply._id)}>
            //   <ReplyComment
            //     name={reply.userId.username}
            //     createdAt={reply.createdAt}
            //     updatedAt={reply.updatedAt}
            //     imgUrl={reply.userId.profileImage}
            //     text={reply.text}
            //   />
            // </div>
            <div key={JSON.stringify(reply._id)} className="text-lg text-white">
              {JSON.stringify(reply.userId)}
            </div>
          ))}
        </div>
      ))}
    </section>
  );
};

export default Thread;
