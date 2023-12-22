import React from "react";
import { getAllMeetups } from "@/utils/actions/meetup.action";
import MeetupCardBig from "./MeetupCardBig";

const PodcastRender = async ({
  searchParams,
}: {
  searchParams: { jobType: string; search: string };
}) => {
  const result = await getAllMeetups({ ...searchParams });
  return (
    <section className="flex w-full flex-col gap-5 shadow-lg">
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
  );
};

export default PodcastRender;
