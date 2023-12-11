import React from "react";
import Link from "next/link";

import { Button } from "../ui/Button";
import { InterviewPost } from "../interviews/posts";
import { getInterviewByUserId } from "@/utils/actions/interview.action";

type Props = { JSONUser: string };
const RenderProfileInterviews = async ({ JSONUser }: Props) => {
  const userData = JSON.parse(JSONUser);
  const { userId, username, profileImage } = userData;
  const userInterviews = await getInterviewByUserId(userId!);

  return (
    <section className="order-3 flex w-full flex-col gap-5 md:order-2">
      {userInterviews.data!.length > 0 ? (
        userInterviews.data!.map((interview) => (
          <InterviewPost
            key={interview._id.toString()}
            avatar={profileImage}
            _id={interview._id?.toString() || "unknown"}
            image={interview.image}
            title={interview.title}
            username={username}
            createdAt={new Date(interview.createdAt)}
            revenue={interview.revenue}
            updates={interview.updates}
            website={interview.website}
            showEdit={true}
          />
        ))
      ) : (
        <>
          <section className="flex flex-row items-center justify-between gap-[10px] rounded-[16px] bg-background p-[14px] dark:bg-dark3 md:gap-[20px] md:p-[20px]">
            <p className="md:h3-regular caption-regular">
              Host your first Interview!
            </p>
            <div className="flex flex-row ">
              <Link href={`/interview/new`}>
                <Button
                  color="orange"
                  className="caption-semibold md:body-semibold gap-2.5 rounded-[6px] px-3 py-2 text-center md:px-4 md:py-3"
                >
                  Submit a Story
                </Button>
              </Link>
            </div>
          </section>
        </>
      )}
    </section>
  );
};

export default RenderProfileInterviews;
