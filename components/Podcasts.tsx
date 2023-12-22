import React from "react";
import OutlineIcon from "./icons/OutlineIcon";
import PodcastCard from "./PodcastCard";
import { getAllPodcasts } from "@/utils/actions/podcast.action";
import Link from "next/link";

const Podcasts = async () => {
  const result = await getAllPodcasts({
    type: "",
    search: "",
  });
  return (
    <article className="flex w-full flex-col gap-[10px] rounded-[16px] bg-background p-[20px] text-secondary2 shadow-lg dark:bg-dark3 dark:text-background2 md:w-[325px]">
      <div className="gap-[20px]">
        <section className="display-semibold mb-5">
          <Link href="./podcast" className="flex flex-row items-center gap-1">
            <span>Podcasts</span>
            <OutlineIcon.ArrowLeft className=" stroke-secondary3" />
          </Link>
        </section>
        <section className="flex flex-col gap-5 rounded-[16px] dark:bg-dark3">
          {result.podcast.map((podcastData) => (
            <Link key={podcastData._id} href={`./podcast/${podcastData._id}`}>
              <PodcastCard
                key={podcastData._id}
                image={podcastData.image}
                title={podcastData.title}
                author={podcastData.userId?.username || "unknown"}
              />
            </Link>
          ))}
        </section>
      </div>
    </article>
  );
};

export default Podcasts;
