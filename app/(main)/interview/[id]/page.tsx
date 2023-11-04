import { Tags } from "@/components";
import PageWrapper from "@/components/PageWrapper";
import { InterviewPostImage } from "@/utils/images";
import Image from "next/image";

const InterviewArticle = ({ params }: { params: { id: string } }) => {
  return (
    <PageWrapper>
      <article className="w-full bg-bkg-2 max-w-[785px] mx-auto rounded-2xl">
        <Image
          src={InterviewPostImage}
          alt="Group Meeting"
          className="rounded-t-2xl"
          priority
        />
        <div className="px-5 sm:px-10 pb-10 pt-5 flex flex-col gap-5">
          <h1 className="font-semibold sm:h1-semibold">
            Leading with Empathy: An Interview with HR and People Management
            Experts
          </h1>
          <Tags tags={["technology", "diversity", "hr"]} />
          <p className="text-secondary3">
            In a recent interview with HR and people management experts, we
            explored the significance of leading with empathy in today&apos;s
            business world. Here are the key takeaways: Empathy in Leadership:
            Empathy is foundational for effective leadership, creating a more
            supportive work culture. Mental Health: Prioritizing employee mental
            health is essential, especially in high-pressure work environments.
            Inclusivity and Diversity: Fostering inclusivity and diversity is a
            priority, ensuring everyone&apos;s voice is heard. Remote Work
            Challenges: Managing and engaging remote teams require adaptability
            and strong communication.
          </p>
        </div>
      </article>
    </PageWrapper>
  );
};

export default InterviewArticle;
