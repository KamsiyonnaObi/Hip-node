import Categories from "@/components/Categories";
import Meetups from "@/components/home/Meetups";
import PodcastCardBig from "@/components/podcasts/PodcastCardBig";
import HostCard from "@/components/Meetups/HostCard";
import React from "react";
import { getAllPodcasts } from "@/utils/actions/podcast.action";

export default async function Home() {
  const result = await getAllPodcasts({});

  console.log(result);
  return (
    <main className="page-formatting">
      <section className="hidden flex-col md:flex md:gap-5">
        <Categories
          title="Filter By Show"
          categoryList={[
            { name: "Indie Bites", checked: false },
            { name: "Software Social", checked: false },
            { name: "Hipnode", checked: false },
            { name: "Free", checked: false },
          ]}
        />
      </section>
      <section className="flex flex-col md:hidden">
        <HostCard
          title="Start Your Podcasts"
          desc="Working on your own internet business? We'd love to interview you!"
          buttonText="Submit a Podcast"
          buttonLink="/podcast/new"
        />
      </section>
      <section className="flex flex-col gap-5">
        {result.podcast.length > 0
          ? result.podcast.map((podcast) => (
              <PodcastCardBig
                key={podcast._id}
                title={podcast.title}
                desc={podcast.desc}
                name={podcast.userId?.username || "unknown"}
                location="Sylhet, Bangladesh"
                avatar="/Avatar.Png"
              />
            ))
          : "No Posts to Show!"}
      </section>
      <section className="flex flex-col gap-5">
        <div className="hidden md:flex">
          <HostCard
            title="Start Your Podcasts"
            desc="Working on your own internet business? We'd love to interview you!"
            buttonText="Submit a Podcast"
            buttonLink="/podcast/new"
          />
        </div>

        <Meetups />
      </section>
    </main>
  );
}
