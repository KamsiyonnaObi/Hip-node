import { getInterview } from "@/utils/actions/interview.action";

import InterviewPage from "@/components/interviews/InterviewPage";
import { notFound } from "next/navigation";
import { StartInterview, Podcasts } from "@/components";
import { Metadata, ResolvingMetadata } from "next";

export async function generateMetadata(
  { params }: { params: { slug: string } },
  parent: ResolvingMetadata
): Promise<Metadata> {
  // grab which group id

  const result = await getInterview(params.slug);
  return {
    title: result.title,
    keywords: result.title,
    description: result.desc,
    openGraph: {
      images: [
        {
          url: result.image,
          width: 1200,
          height: 630,
          alt: "Hipnode",
        },
      ],
    },
  };
}

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
