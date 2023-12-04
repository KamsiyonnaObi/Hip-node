import Categories from "@/components/Categories";
import HostCard from "@/components/Meetups/HostCard";
import RenderMeetup from "@/components/Meetups/RenderMeetup";
import Podcasts from "@/components/Podcasts";
import React, { Suspense } from "react";

export default async function Meetup({
  searchParams,
}: {
  searchParams: { jobType: string; search: string };
}) {
  return (
    <main className="page-formatting">
      <section className="flex flex-col md:gap-5">
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
      <section className="flex flex-col gap-5">
        <HostCard
          title="Host a Meetup"
          desc="Find other Hipnoders in your area so you can learn, share, and work together."
          buttonText="Host a Meetup"
          buttonLink="/meetups/new"
        />
        <Podcasts />
      </section>
    </main>
  );
}
