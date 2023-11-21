import { getInterview } from "@/utils/actions/interview.action";

import InterviewPage from "@/components/interviews/InterviewPage";
import { notFound } from "next/navigation";
const InterviewArticle = async ({ params }: { params: { id: string } }) => {
  try {
    const result = await getInterview(params.id);
    return <InterviewPage result={result} />;
  } catch (e) {
    notFound();
  }
};

export default InterviewArticle;
