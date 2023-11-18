import Categories from "@/components/Categories";
import Meetups from "@/components/home/Meetups";
import HostCard from "@/components/Meetups/HostCard";
import React, { Suspense } from "react";
import PodcastRender from "@/components/interviews/podcasts/PodcastRender";

export default async function Home({
  searchParams,
}: {
  searchParams: URLSearchParams;
}) {
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
          web="podcast"
          filter="type"
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
      <Suspense
        key={searchParams.toString()}
        fallback={<p>Loading...</p>}
      ></Suspense>
      <PodcastRender searchParams={searchParams} />
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
