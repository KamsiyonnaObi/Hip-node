import { InterviewCategory, MainContent, RightContent } from "@/components";

const InterviewHomePage = () => {
  return (
    <main className="page-formatting bg-bkg">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-5 md:flex-row">
        <aside>
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
        <MainContent />
        <RightContent />
      </div>
    </main>
  );
};

export default InterviewHomePage;
