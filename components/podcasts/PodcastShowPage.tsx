"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Meetups } from "..";
import Categories from "../Categories";
import HostCard from "../Meetups/HostCard";
import PodcastCardBig from "./PodcastCardBig";
import { getAllPodcasts } from "@/utils/actions/podcast.action";

const PodcastShowPage = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const [podcasts, setPodcasts] = useState<any>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getAllPodcasts({});
        setPodcasts(result.podcast);
        setLoading(false);
        console.log(result.podcast);
      } catch (error) {
        console.error("Error fetching podcasts:", error);
      }
    };

    fetchData();
  }, []);

  const handleCategoryChange = ({ categoryName, checked }: any) => {
    // Update the selectedCategories array based on user selection
    if (checked) {
      setSelectedCategories([...selectedCategories, categoryName]);
    } else {
      setSelectedCategories(
        selectedCategories.filter((cat: any) => cat !== categoryName)
      );
    }
  };

  const filteredPodcasts = podcasts.filter((podcast: { type: any }) => {
    // If no categories are selected, show all podcasts
    if (selectedCategories.length === 0) {
      return true;
    }
    // Otherwise, filter by selected categories
    return selectedCategories.includes(podcast.type);
  });

  return (
    <main className="page-formatting">
      <section className="hidden flex-col md:flex md:gap-5">
        <Categories
          title="Filter By Show"
          categoryList={[
            { name: "Indie Bites", checked: false },
            { name: "Software Social", checked: false },
            { name: "Hipnode", checked: false },
            { name: "Free", checked: false },
          ]}
          onCategoryChange={handleCategoryChange}
        />
      </section>
      <section className="flex flex-col md:hidden">
        <HostCard
          title="Start Your Podcasts"
          desc="Working on your own internet business? We'd love to interview you!"
          buttonText="Submit a Podcast"
          buttonLink="/podcast/new"
        />
      </section>
      <section className="flex flex-col gap-5">
        {loading
          ? "Loading..."
          : filteredPodcasts.length > 0
          ? filteredPodcasts.map(({ podcast, index }: any) => (
              <Link
                key={podcast._id}
                className={index % 2 === 0 ? "" : "hidden"}
                href={`/podcast/${podcast._id}`}
              >
                <PodcastCardBig
                  key={podcast._id}
                  title={podcast.title}
                  desc={podcast.desc}
                  name={podcast.userId?.username || "unknown"}
                  location={podcast.location}
                  avatar="/Avatar.Png"
                />
              </Link>
            ))
          : "No Posts to Show!"}
      </section>
      <section className="flex flex-col gap-5">
        {loading
          ? ""
          : filteredPodcasts.length > 0
          ? filteredPodcasts.map(({ podcast, index }: any) => (
              <Link
                key={podcast._id}
                className={index % 2 === 0 ? "hidden" : ""}
                href={`/podcast/${podcast._id}`}
              >
                <PodcastCardBig
                  key={podcast._id}
                  title={podcast.title}
                  desc={podcast.desc}
                  name={podcast.userId?.username || "unknown"}
                  location={podcast.location}
                  avatar="/Avatar.Png"
                />
              </Link>
            ))
          : ""}
      </section>
      <section className="flex flex-col gap-5">
        <div className="hidden md:flex">
          <HostCard
            title="Start Your Podcasts"
            desc="Working on your own internet business? We'd love to interview you!"
            buttonText="Submit a Podcast"
            buttonLink="/podcast/new"
          />
        </div>
        <Meetups />
      </section>
    </main>
  );
};

export default PodcastShowPage;
