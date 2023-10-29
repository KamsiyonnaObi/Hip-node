import { InterviewCategory, InterviewPost, StartInterview } from "@/components";
import PodcastsPreview from "@/components/interviews/podcasts/PodcastsPreview";

const InterviewHomePage = () => {
  return (
    <main className="bg-bkg pt-5 text-defaultText">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-5 px-5 sm:px-10 md:flex-row">
        <aside className="order-2 md:order-1">
          <InterviewCategory
            categories={[
              "technology",
              "marketing",
              "finance",
              "education",
              "healthcare",
            ]}
          />
        </aside>
        <section className="order-3 flex w-full flex-col md:order-2">
          <InterviewPost />
        </section>
        {/* Right Side Content */}
        <aside className="order-1 flex w-full flex-col gap-5 md:order-3 md:max-w-[325px]">
          {/* Start your interview */}
          <StartInterview />
          {/* Podcasts */}
          <PodcastsPreview />
        </aside>
      </div>
    </main>
  );
};

export default InterviewHomePage;
