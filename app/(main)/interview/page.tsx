import { InterviewCategory, StartInterview } from "@/components";
import PageWrapper from "@/components/PageWrapper";
import PodcastsPreview from "@/components/interviews/podcasts/PodcastsPreview";
import PostsRender from "@/components/interviews/posts/PostsRender";
import ArticleSkeleton from "@/components/interviews/skeleton/ArticleSkeleton";
import { getAllInterviews } from "@/utils/actions/interview.action";
import { Suspense } from "react";

const InterviewHomePage = async ({
  searchParams,
}: {
  searchParams: URLSearchParams;
}) => {
  const result = getAllInterviews(searchParams);

  const categories = [
    "technology",
    "marketing",
    "finance",
    "education",
    "healthcare",
  ];

  return (
    <PageWrapper>
      <aside className="order-2 md:order-1">
        <InterviewCategory categories={categories} search={result} />
      </aside>
      <Suspense
        key={JSON.stringify(searchParams)}
        fallback={<ArticleSkeleton />}
      >
        <PostsRender search={result} />
      </Suspense>
      {/* Right Side Content */}
      <aside className="order-1 flex w-full flex-col gap-5 md:order-3 md:max-w-[325px]">
        {/* Start your interview */}
        <StartInterview />
        {/* Podcasts */}
        <PodcastsPreview />
      </aside>
    </PageWrapper>
  );
};

export default InterviewHomePage;
