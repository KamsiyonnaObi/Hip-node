import PodcastCardBig from "@/components/podcasts/PodcastCardBig";
import { getAllPodcasts } from "@/utils/actions/podcast.action";
import React from "react";
import Link from "next/link";

const PodcastRender = async ({
  searchParams,
}: {
  searchParams: { type: string; search: string };
}) => {
  const result = await getAllPodcasts({ ...searchParams });
  return (
    <div className="flex flex-col gap-5 lg:w-[784px] lg:flex-row">
      <section className="flex flex-col gap-5">
        {result.podcast.length > 0
          ? result.podcast.map((podcast, index) => (
              <Link
                key={podcast._id}
                className={index % 2 === 0 ? "" : "hidden"}
                href={`/podcast/${podcast.id}`}
              >
                <PodcastCardBig
                  key={podcast._id}
                  title={podcast.title}
                  desc={podcast.desc}
                  name={podcast.userId?.username || "unknown"}
                  location={podcast.location}
                  avatar={podcast.userId?.profileImage || "unknown"}
                />
              </Link>
            ))
          : "No Posts to Show!"}
      </section>
      <section className="flex flex-col gap-5">
        {result.podcast.length > 0
          ? result.podcast.map((podcast, index) => (
              <Link
                key={podcast._id}
                className={index % 2 === 0 ? "hidden" : ""}
                href={`/podcast/${podcast.id}`}
              >
                <PodcastCardBig
                  key={podcast._id}
                  title={podcast.title}
                  desc={podcast.desc}
                  name={podcast.userId?.username || "unknown"}
                  location={podcast.location}
                  avatar="/Avatar.Png"
                />
              </Link>
            ))
          : ""}
      </section>
    </div>
  );
};

export default PodcastRender;
