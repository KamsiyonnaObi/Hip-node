import Meetups from "@/components/Groups/Meetups";
import Podcasts from "@/components/Podcasts";
import React from "react";

const page = () => {
  return (
    <main className="page-formatting">
      <section className="flex flex-col md:gap-5"></section>
      <div className="flex-col">
        <section className="flex flex-col gap-5">
          <Meetups />
          <Podcasts />
        </section>
      </div>
    </main>
  );
};

export default page;
