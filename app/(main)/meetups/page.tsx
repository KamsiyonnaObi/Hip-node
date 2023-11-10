import Categories from "@/components/Categories";
import HostCard from "@/components/Meetups/HostCard";
import MeetupCardBig from "@/components/Meetups/MeetupCardBig";
import Podcasts from "@/components/Podcasts";
import { getAllMeetups } from "@/utils/actions/meetup.action";
import React from "react";

export default async function Meetup() {
  const result = await getAllMeetups({});
  return (
    <main className="page-formatting">
      <section className="flex flex-col md:gap-5">
        <Categories
          title="Categories"
          categoryList={[
            { name: "Full Time", checked: false },
            { name: "Part Time", checked: false },
            { name: "Internship", checked: false },
            { name: "Remote", checked: false },
            { name: "Contract", checked: false },
            { name: "Free", checked: false },
          ]}
        />
      </section>
      <section className="flex flex-col gap-5">
        {result.meetups.length > 0
          ? result.meetups.map((meetup) => (
              <MeetupCardBig
                key={meetup._id}
                _id={meetup._id}
                image={meetup.image}
                title={meetup.title}
                jobType={meetup.jobType}
                subtitle={meetup.subtitle}
                desc={meetup.desc}
                month={meetup.month}
                day={meetup.day}
              />
            ))
          : "No Posts to Show!"}
      </section>
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
