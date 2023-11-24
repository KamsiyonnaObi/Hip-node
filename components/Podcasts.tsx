import React from "react";
import OutlineIcon from "./icons/OutlineIcon";
import PodcastCard from "./PodcastCard";
import { getAllPodcasts } from "@/utils/actions/podcast.action";
import Link from "next/link";

const Podcasts = async () => {
  const result = await getAllPodcasts({});
  return (
    <article className="flex w-[325px] flex-col gap-[10px] rounded-[16px] bg-background p-[20px] text-secondary2 dark:bg-dark3 dark:text-background2">
      <div className="gap-[20px]">
        <section className="display-semibold mb-5 flex flex-row items-center gap-1">
          <span>Podcasts</span>
          <Link href="./podcast">
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
