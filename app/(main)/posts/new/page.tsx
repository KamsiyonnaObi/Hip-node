import { InputPost } from "@/components/form";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Posts | Hipnode",
  description:
    "Discover posts from other users and share your journey in the tech industry",
  keywords: ["Hipnode", "posts", "community", "forum", "developers"],
};

const page = ({ searchParams }: { searchParams: { title: string } }) => {
  return (
    <section className="min-h-screen bg-background2 px-5 pb-7 pt-5 dark:bg-dark2 md:pb-[62px] md:pl-[270px] md:pr-[290px] md:pt-7">
      <InputPost title={searchParams.title} />
    </section>
  );
};

export default page;
