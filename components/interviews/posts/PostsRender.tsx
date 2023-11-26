import { InterviewPost } from ".";
import { interviewData } from "@/types/component";

const PostsRender = async ({
  search,
  currUser,
}: {
  search: Promise<any>;
  currUser: string | undefined;
}) => {
  const result = await search;
  return (
    <section className="order-3 flex w-full flex-col gap-5 md:order-2">
      {result.interviews.length > 0
        ? result.interviews.map((interview: interviewData) => (
            <InterviewPost
              key={interview._id}
              _id={interview._id}
              image={interview.image}
              title={interview.title}
              username={interview.userId?.username || "unknown"}
              createdAt={interview.createdAt}
              content={interview.desc}
              revenue={interview.revenue}
              updates={interview.updates}
              website={interview.website}
              showEdit={interview.userId?._id.toString() === currUser}
            />
          ))
        : "No Posts to Show!"}
    </section>
  );
};

export default PostsRender;
