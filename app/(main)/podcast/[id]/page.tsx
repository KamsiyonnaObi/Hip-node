import PodcastBanner from "@/components/podcasts/PodcastBanner";
import Html from "@/components/shared/html";
import { getPodcast } from "@/utils/actions/podcast.action";
import React from "react";

const page = async ({ params }: { params: { id: string } }) => {
  const result = await getPodcast(params.id);
  return (
    <main className="flex flex-col items-center gap-5 p-5">
      <PodcastBanner
        image={result.image}
        type={result.type}
        episode={result.episode}
        name={result.userId?.username || "unknown"}
        audioPath={result.audoPath}
      />
      <div className="w-[335px] rounded-[16px] bg-background p-5 dark:bg-dark3 md:w-[785px]">
        <div className="gap-5">
          <h1 className="h1-semibold dark:text-background2">{result.title}</h1>
          <div className="display-regular text-secondary3">
            <Html htmltext={result.desc} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
