import React from "react";
import OutlineIcon from "../icons/OutlineIcon";
import { getAllMeetups } from "@/utils/actions/meetup.action";
import Link from "next/link";
import MeetupCard from "./MeetupCard";

const Meetups = async () => {
  const result = await getAllMeetups({
    jobType: "",
    search: "",
  });

  return (
    <div className="flex w-[350px] flex-col rounded-[16px] bg-background p-[20px] text-secondary2 shadow-lg dark:bg-dark3 dark:text-background2 sm:w-[325px]">
      <section className="display-semibold mb-5">
        <Link href="./meetups" className="flex flex-row items-center gap-[3px]">
          <p>Meetups</p>
          <OutlineIcon.ArrowLeft className="stroke-secondary2 dark:stroke-background2" />
        </Link>
      </section>
      <div className="flex flex-col gap-[20px] rounded-[16px] dark:bg-dark3">
        {result.meetups.length > 0
          ? result.meetups
              .slice(0, 3)
              .map((meetup: any) => (
                <MeetupCard
                  key={meetup._id}
                  _id={meetup._id}
                  title={meetup.title}
                  jobType={meetup.jobType}
                  desc={meetup.desc}
                  month={meetup.month}
                  day={meetup.day}
                />
              ))
          : "No Posts to Show!"}
      </div>
    </div>
  );
};

export default Meetups;
