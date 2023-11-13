import { getInterview } from "@/utils/actions/interview.action";

import InterviewPage from "@/components/interviews/InterviewPage";

const InterviewArticle = async ({ params }) => {
  const result = await getInterview(params.id);
  return <InterviewPage result={result} />;
};

export default InterviewArticle;
