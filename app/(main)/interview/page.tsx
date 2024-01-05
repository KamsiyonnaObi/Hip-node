import { InterviewCategory, StartInterview } from "@/components";
import PageWrapper from "@/components/PageWrapper";
import UserModel from "@/models/User";

import Podcasts from "@/components/Podcasts";
import PostsRender from "@/components/interviews/posts/PostsRender";
import ArticleSkeleton from "@/components/interviews/skeleton/ArticleSkeleton";
import { getAllInterviews } from "@/utils/actions/interview.action";
import { Suspense } from "react";
import { getServerSession } from "next-auth";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Interview | Hipnode",
  description:
    "Interview with developers and learn about their journey in the tech industry",
  keywords: ["Hipnode", "interview", "community", "forum", "developers"],
};

const InterviewHomePage = async ({
  searchParams,
}: {
  searchParams: { tags: string; search: string };
}) => {
  const result = getAllInterviews({ ...searchParams });

  const categories = [
    "technology",
    "marketing",
    "finance",
    "education",
    "healthcare",
  ];

  const currentUser: any = await getServerSession();
  const { email } = currentUser?.user;
  const User = await UserModel.findOne({ email });
  const currentUserId = User?._id.toString();

  return (
    <PageWrapper>
      <aside className="order-2 md:order-1">
        <InterviewCategory
          categories={categories}
          search={result}
          query={searchParams.search}
        />
      </aside>
      <Suspense
        key={JSON.stringify(searchParams)}
        fallback={<ArticleSkeleton />}
      >
        <PostsRender search={result} currUser={currentUserId} />
      </Suspense>
      {/* Right Side Content */}
      <aside className="order-1 flex w-full flex-col gap-5 md:order-3 md:max-w-[325px]">
        {/* Start your interview */}
        <StartInterview />
        {/* Podcasts */}
        <Podcasts />
      </aside>
    </PageWrapper>
  );
};

export default InterviewHomePage;
