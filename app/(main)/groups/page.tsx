import Podcasts from "@/components/Podcasts";
import PostGroup from "@/components/group/PostGroup";
import Meetups from "@/components/group/Meetups";
import React from "react";
import GroupName from "@/components/group/GroupName";

const page = () => {
  return (
    <main className="page-formatting">
      <section>
        <GroupName />
      </section>
      <section className="flex flex-col md:gap-5">
        <PostGroup
          avatar={"/Avatar.png"}
          image={"/bird.png"}
          title={"Browser Extension Makers"}
          name={"Moinul Hassan"}
          descTitle={"Database Backups as a Service?"}
          desc={
            "I wouldn't mind a daily (or more) backup of my database to be done automatically. I've had a google around, and there are services; but none I've heard of..."
          }
          date={"wed, 15 Fabruary 2022"}
        />
        <PostGroup
          avatar={"/Avatar.png"}
          image={"/bird.png"}
          title={"Browser Extension Makers"}
          name={"Moinul Hassan"}
          descTitle={"Database Backups as a Service?"}
          desc={
            "I wouldn't mind a daily (or more) backup of my database to be done automatically. I've had a google around, and there are services; but none I've heard of..."
          }
          date={"wed, 15 Fabruary 2022"}
        />
        <PostGroup
          avatar={"/Avatar.png"}
          image={"/bird.png"}
          title={"Browser Extension Makers"}
          name={"Moinul Hassan"}
          descTitle={"Database Backups as a Service?"}
          desc={
            "I wouldn't mind a daily (or more) backup of my database to be done automatically. I've had a google around, and there are services; but none I've heard of..."
          }
          date={"wed, 15 Fabruary 2022"}
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
