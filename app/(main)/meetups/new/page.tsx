import { InputMeetup } from "@/components/form/InputMeetup";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "New Meetups | Hipnode",
  description: "Create a new meetup to share your journey in the tech industry",
  keywords: ["Hipnode", "meetups", "community", "forum", "developers"],
};

const page = () => {
  return (
    <section className="min-h-screen bg-background2 px-5 pb-7 pt-5 dark:bg-dark2 md:pb-[62px] md:pl-[270px] md:pr-[290px] md:pt-7">
      <InputMeetup />
    </section>
  );
};

export default page;
