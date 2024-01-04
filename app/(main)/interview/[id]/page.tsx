import { getInterview } from "@/utils/actions/interview.action";

import InterviewPage from "@/components/interviews/InterviewPage";
import { notFound } from "next/navigation";
import { StartInterview, Podcasts } from "@/components";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Edit Interview",
  description: "Edit your interview to share your journey in the tech industry",
};

const InterviewArticle = async ({ params }: { params: { id: string } }) => {
  try {
    const result = await getInterview(params.id);
    return (
      <section className="mx-auto flex flex-col justify-center sm:max-w-[400px] sm:flex-row md:max-w-[850px] lg:max-w-[1100px]">
        <div className="mx-auto flex">
          <InterviewPage result={result} />
        </div>
        <div className="mx-auto mb-10 mt-[1.25rem] flex flex-col gap-[1.25rem] md:flex md:flex-col lg:max-w-[325px]">
          <StartInterview />
          <div className="mx-auto">
            <Podcasts />
          </div>
        </div>
      </section>
    );
  } catch (e) {
    notFound();
  }
};

export default InterviewArticle;
