import React from "react";
import { getMeetupsByUserId } from "@/utils/actions/meetup.action";
import MeetupCardBig from "@/components/Meetups/MeetupCardBig";
import { Button } from "../ui/Button";
import Link from "next/link";

type Props = { userId?: string };
const RenderProfileMeetups = async ({ userId }: Props) => {
  const userMeetups = await getMeetupsByUserId(userId!);

  return (
    <section className="flex w-full flex-col gap-5">
      {userMeetups.data!.length > 0 ? (
        userMeetups.data!.map((meetup) => (
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
      ) : (
        <>
          <section className="flex flex-row items-center justify-between gap-[10px] rounded-[16px] bg-background p-[14px] dark:bg-dark3 md:gap-[20px] md:p-[20px]">
            <p className="md:h3-regular caption-regular">
              Host your first Meetup!
            </p>
            <div className="flex flex-row ">
              <Link href={`/meetups/new`}>
                <Button
                  color="orange"
                  className="caption-semibold md:body-semibold gap-2.5 rounded-[6px] px-3 py-2 text-center md:px-4 md:py-3"
                >
                  Host a Meetup
                </Button>
              </Link>
            </div>
          </section>
        </>
      )}
    </section>
  );
};

export default RenderProfileMeetups;
