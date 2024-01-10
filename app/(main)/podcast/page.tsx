import Categories from "@/components/Categories";
import Meetups from "@/components/home/Meetups";
import HostCard from "@/components/Meetups/HostCard";
import React, { Suspense } from "react";
import PodcastRender from "@/components/interviews/podcasts/PodcastRender";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Podcasts | Hipnode",
  description:
    "Listen to podcasts from indie hackers, makers, and bootstrappers",
  keywords: ["Hipnode", "podcasts", "community", "forum", "developers"],
};

export default async function Home({
  searchParams,
}: {
  searchParams: { type: string; search: string };
}) {
  return (
    <main className="page-formatting">
      <section className="hidden flex-col md:flex md:gap-5">
        <Categories
          title="Filter By Show"
          categoryList={{
            "Indie Bites": false,
            "Software Social": false,
            Hipnode: false,
            Free: false,
          }}
          web="podcast"
          filter="type"
          searchFilter={searchParams.search}
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
        key={JSON.stringify(searchParams)}
        fallback={
          <div className="flex flex-col flex-wrap gap-5 lg:w-[784px] lg:flex-row">
            <div className="h-60 w-[48%] animate-pulse rounded-md bg-black/10"></div>
            <div className="h-60 w-[48%] animate-pulse rounded-md bg-black/10"></div>
            <div className="h-60 w-[48%] animate-pulse rounded-md bg-black/10"></div>
          </div>
        }
      >
        <PodcastRender searchParams={searchParams} />
      </Suspense>

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
