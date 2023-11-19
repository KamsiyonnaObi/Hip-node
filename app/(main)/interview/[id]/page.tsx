import Image from "next/image";
import parse from "html-react-parser";

import PageWrapper from "@/components/PageWrapper";
import { Tags } from "@/components";
import { getInterview } from "@/utils/actions/interview.action";
import { AspectRatio } from "@/components/ui/AspectRatio";

const InterviewArticle = async ({ params }: { params: { id: string } }) => {
  const interviewData = await getInterview(params.id);

  const { title, desc, tags, image } = interviewData;

  return (
    <PageWrapper>
      <article className="mx-auto w-full max-w-[785px] rounded-2xl bg-bkg-2">
        <div className="relative h-64 w-full">
          {/* <AspectRatio ratio={16 / 9}> */}
          <Image
            src={image}
            fill
            alt="Group Meeting"
            className="rounded-t-lg object-cover"
            priority
          />
          {/* </AspectRatio> */}
        </div>
        <div className="flex flex-col gap-5 px-5 pb-10 pt-5 sm:px-10">
          <h1 className="sm:h1-semibold font-semibold">{title}</h1>
          {tags.length > 0 && <Tags tags={tags} />}
          <div className="text-secondary3">{parse(desc)}</div>
        </div>
      </article>
    </PageWrapper>
  );
};

export default InterviewArticle;
