import { getInterview } from "@/utils/actions/interview.action";

import InterviewPage from "@/components/interviews/InterviewPage";
import { notFound } from "next/navigation";
import { Metadata, ResolvingMetadata } from "next";
import PageWrapper from "@/components/PageWrapper";

export async function generateMetadata(
  { params }: { params: { id: string } },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const result = await getInterview(params.id);
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
      <PageWrapper>
        <InterviewPage result={result} />
      </PageWrapper>
    );
  } catch (e) {
    notFound();
  }
};

export default InterviewArticle;
