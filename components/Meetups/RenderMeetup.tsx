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
    <div className="flex flex-col gap-5">
      <section className="flex w-[335px] flex-col gap-5 md:w-[785px]">
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
    </div>
  );
};

export default PodcastRender;
