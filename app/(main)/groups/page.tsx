import React from "react";

import {
  Podcasts,
  PostGroup,
  GroupName,
  Meetups,
  CreateGroup,
} from "@/components/group";

const page = () => {
  return (
    <main className="page-formatting xs:max-w-[320px] mx-auto sm:max-w-[550px] md:max-w-[700px] xl:max-w-[1100px] lg:max-w-[950px]">
      <section>
        <div>
          <GroupName />
        </div>
      </section>
      <div className="flex flex-col sm:flex-row sm:gap-[1.25rem]">
        <section>
          <div className="mx-auto flex flex-col flex-wrap gap-5 lg:w-[800px] lg:flex-row">
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
          </div>
        </section>
        <section>
          <div className="flex flex-col gap-5">
            <div className="sm:w-[325px]">
              <CreateGroup
                title={"Create Group"}
                desc={
                  "Create a community and unite with like-minded individuals. Embark on exciting journeys together."
                }
                buttonText={"Create Group"}
              />
            </div>
            <Meetups />
            <Podcasts />
          </div>
        </section>
      </div>
    </main>
  );
};

export default page;
