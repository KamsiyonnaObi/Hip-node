import Categories from "@/components/Categories";
import HostCard from "@/components/Meetups/HostCard";
import RenderMeetup from "@/components/Meetups/RenderMeetup";
import Podcasts from "@/components/Podcasts";
import React, { Suspense } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meetups | Hipnode",
  description:
    "Find other Hipnoders in your area so you can learn, share, and work together.",
  keywords: ["Hipnode", "meetups", "community", "forum", "developers"],
};

export default async function Meetup({
  searchParams,
}: {
  searchParams: { jobType: string; search: string };
}) {
  return (
    <main className="mx-auto mt-2.5 flex w-full max-w-[1440px] flex-col gap-5 px-5 sm:px-10 md:mt-5 md:flex-row">
      <section className="order-2 md:order-1">
        <Categories
          title="Categories"
          categoryList={{
            "Full Time": false,
            "Part Time": false,
            Internship: false,
            Remote: false,
            Contract: false,
            Free: false,
          }}
          web="meetups"
          filter="jobType"
          searchFilter={searchParams.search}
        />
      </section>
      <section className="order-3 w-full md:order-2">
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
          <RenderMeetup searchParams={searchParams} />
        </Suspense>
      </section>
      <section className="order-1 flex flex-col gap-5 md:order-3">
        <HostCard
          title="Host a Meetup"
          desc="Find other Hipnoders in your area so you can learn, share, and work together."
          buttonText="Host a Meetup"
          buttonLink="/meetups/new"
        />
        <div className="hidden md:flex">
          <Podcasts />
        </div>
      </section>
      <div className="order-4 md:hidden">
        <Podcasts />
      </div>
    </main>
  );
}
