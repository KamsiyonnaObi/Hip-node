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
  const interviews = JSON.parse(result.interviews);

  return (
    <section className="order-3 flex w-full flex-col gap-5 md:order-2">
      {interviews.length > 0
        ? interviews.map((interview: interviewData) => (
            <InterviewPost
              key={interview._id.toString()}
              avatar={interview.userId?.profileImage || "unknown"}
              _id={interview._id?.toString() || "unknown"}
              image={interview.image}
              title={interview.title}
              username={interview.userId?.username || "unknown"}
              createdAt={new Date(interview.createdAt)}
              revenue={interview.revenue}
              updates={interview.updates}
              website={interview.website}
              showEdit={interview.userId?._id.toString() === currUser || false}
            />
          ))
        : "No Posts to Show!"}
    </section>
  );
};

export default PostsRender;
