import { InputPodcast } from "@/components/form/InputPodcast";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "New Podcasts",
  description:
    "Listen to podcasts from indie hackers, makers, and bootstrappers",
  keywords: ["Hipnode", "podcasts", "community", "forum", "developers"],
};

const page = () => {
  return (
    <section className="min-h-screen bg-background2 px-5 pb-7 pt-5 dark:bg-dark2 md:pb-[62px] md:pl-[270px] md:pr-[290px] md:pt-7">
      <InputPodcast />
    </section>
  );
};

export default page;
