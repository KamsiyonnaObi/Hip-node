import Podcasts from "@/components/Podcasts";
import PostGroup from "@/components/groups/PostGroup";
import Meetups from "@/components/home/Meetups";
import React from "react";

const page = () => {
  return (
    <main className="page-formatting">
      <section className="flex flex-col md:gap-5">
        <PostGroup
          avatar={""}
          image={""}
          title={"title"}
          name={"name"}
          descTitle={"descTitle"}
          desc={"desc"}
          date={"OCT/13/2023"}
        />
      </section>
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
