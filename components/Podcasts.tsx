"use client";
import React from "react";
import OutlineIcon from "./icons/OutlineIcon";
import PodcastCard from "./PodcastCard";

const Podcasts = () => {
  return (
    <div className="flex w-[210px] flex-col gap-[20px] rounded-[16px] bg-background p-[20px] dark:bg-dark3">
      <section className="display-semibold mb-5 flex flex-row gap-2">
        <p>Podcasts</p>
        <div className="mt-0.5">
          <OutlineIcon.ArrowLeft />
        </div>
      </section>
      <section className="flex flex-col rounded-[16px] dark:bg-dark3">
        <PodcastCard
          image="/PodcastDefault.png"
          title="Selling a Business and Scaling Another Amidst Tragedy."
          author="Michele Hansen"
        />
        <PodcastCard
          image="/PodcastDefault.png"
          title="Mental health as a founder and the importance of community..."
          author="Michele Hansen"
        />
      </section>
    </div>
  );
};

export default Podcasts;
