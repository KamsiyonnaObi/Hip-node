import { InputInterview } from "@/components/form/InputInterview";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "New Interview | Hipnode",
  description:
    "Create a new interview to share your journey in the tech industry",
  keywords: ["Hipnode", "interviews", "community", "forum", "developers"],
};

const page = () => {
  return (
    <section className="shaodw-lg min-h-screen bg-background2 px-5 pb-7 pt-5 dark:bg-dark2 md:pb-[62px] md:pl-[270px] md:pr-[290px] md:pt-7">
      <InputInterview />
    </section>
  );
};

export default page;
