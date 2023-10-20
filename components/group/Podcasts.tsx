"use client";
import React from "react";

import OutlineIcon from "../icons/OutlineIcon";
import PodcastCard from "./PodcastCard";

const Podcasts = () => {
  return (
    <article className="flex w-[325px] flex-col gap-[10px] rounded-[16px] bg-background p-[20px] dark:bg-dark3">
      <div className="gap-[20px]">
        <section className="display-semibold mb-5 flex flex-row items-center gap-1">
          <span>Podcasts</span>
          <OutlineIcon.ArrowLeft className=" stroke-secondary3" />
        </section>
        <section className="flex flex-col gap-5 rounded-[16px] dark:bg-dark3">
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
          <PodcastCard
            image="/PodcastDefault.png"
            title="Mental health as a founder and the importance of community..."
            author="Michele Hansen"
          />
          <PodcastCard
            image="/PodcastDefault.png"
            title="Mental health as a founder and the importance of community..."
            author="Michele Hansen"
          />
          <PodcastCard
            image="/PodcastDefault.png"
            title="Mental health as a founder and the importance of community..."
            author="Michele Hansen"
          />
        </section>
      </div>
    </article>
  );
};

export default Podcasts;
