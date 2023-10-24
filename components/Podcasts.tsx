"use client";
import React from "react";
import OutlineIcon from "./icons/OutlineIcon";
import PodcastCard from "./PodcastCard";

const Podcasts = () => {
  const podcastList = [
    {
      image: "/PodcastDefault.png",
      title: "Selling a Business and Scaling Another Amidst Tragedy.",
      author: "1Michele Hansen",
    },
    {
      image: "/PodcastDefault.png",
      title: "Mental health as a founder and the importance of community...",
      author: "2Michele Hansen",
    },
    {
      image: "/PodcastDefault.png",
      title: "1Mental health as a founder and the importance of community...",
      author: "3Michele Hansen",
    },
    {
      image: "/PodcastDefault.png",
      title: "2Mental health as a founder and the importance of community...",
      author: "4Michele Hansen",
    },
    {
      image: "/PodcastDefault.png",
      title: "3Mental health as a founder and the importance of community...",
      author: "5Michele Hansen",
    },
  ];

  return (
    <article className="flex w-[325px] flex-col gap-[10px] rounded-[16px] bg-background p-[20px] text-secondary2 dark:bg-dark3 dark:text-background2">
      <div className="gap-[20px]">
        <section className="display-semibold mb-5 flex flex-row items-center gap-1">
          <span>Podcasts</span>
          <OutlineIcon.ArrowLeft className=" stroke-secondary3" />
        </section>
        <section className="flex flex-col gap-5 rounded-[16px] dark:bg-dark3">
          {podcastList.map((podcastData, index) => (
            <PodcastCard
              key={index}
              image={podcastData.image}
              title={podcastData.title}
              author={podcastData.author}
            />
          ))}
        </section>
      </div>
    </article>
  );
};

export default Podcasts;
