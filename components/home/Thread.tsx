import { commentDataType } from "@/types/component";
import { Comment } from "./Comment";
import { ReplyComment } from "./ReplyComment";

interface ThreadProps {
  commentData: commentDataType[];
}

export const Thread = ({ commentData }: ThreadProps) => {
  return (
    <section className="flex flex-col gap-5 bg-background px-5 dark:bg-dark3 md:gap-[30px] md:px-[30px]">
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
