import { commentDataType } from "@/types/component";
import { Comment, ReplyComment } from "@/components";

interface ThreadProps {
  commentData: commentDataType[];
}

const Thread = ({ commentData }: ThreadProps) => {
  return (
    <section className="md:rounded-b-lg flex flex-col gap-5 md:bg-background bg-background2 dark:bg-dark2 md:dark:bg-dark3 px-5 md:pb-[30px] md:gap-[30px] md:px-[30px]">
      {commentData.map((comment) => (
        <div key={comment.name}>
          <Comment {...comment} />
          {comment.reply.map((reply) => (
            <ReplyComment key={reply.name} {...reply} />
          ))}
        </div>
      ))}
    </section>
  );
};

export default Thread;
