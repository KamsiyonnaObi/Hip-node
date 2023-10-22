import { InterviewCategory } from "@/components";

const InterviewHomePage = () => {
  return (
    <main className="bg-bkg-2">
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
      <section></section>
      <aside></aside>
    </main>
  );
};

export default InterviewHomePage;
