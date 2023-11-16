"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Meetups } from "..";
import Categories from "../Categories";
import HostCard from "../Meetups/HostCard";
import PodcastCardBig from "./PodcastCardBig";
import { getAllPodcasts } from "@/utils/actions/podcast.action";

const PodcastShowPage = () => {
  const [result, setResult] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const podcasts = await getAllPodcasts({});
        setResult(podcasts);
      } catch (error) {
        console.error("Error fetching podcasts:", error);
      }
    };

    fetchData();
  }, []); // Run once on component mount
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const handleCategoryChange = (categoryName: string) => {
    setSelectedCategories((prevCategories) => {
      if (prevCategories.includes(categoryName)) {
        return prevCategories.filter((category) => category !== categoryName);
      } else {
        // Add the category if it's not present
        return [...prevCategories, categoryName];
      }
    });
  };

  const filteredPodcasts =
    selectedCategories.length > 0
      ? result?.podcast?.filter(
          (podcast: any) =>
            podcast?.categoryList?.some(
              (podcastCategory: any) =>
                selectedCategories.includes(podcastCategory?.type) &&
                podcastCategory?.checked
            )
        )
      : result?.podcast;

  return (
    <>
      {result ? (
        <>
          <section className="hidden flex-col md:flex md:gap-5">
            <Categories
              title="Filter By Show"
              categoryList={[
                {
                  name: "Indie Bites",
                  checked: selectedCategories.includes("Indie Bites"),
                },
                {
                  name: "Software Social",
                  checked: selectedCategories.includes("Software Social"),
                },
                {
                  name: "Hipnode",
                  checked: selectedCategories.includes("Hipnode"),
                },
                { name: "Free", checked: selectedCategories.includes("Free") },
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
            {filteredPodcasts.length > 0
              ? filteredPodcasts.map((podcast: any) => (
                  <Link key={podcast._id} href={`/podcast/${podcast.id}`}>
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
        </>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default PodcastShowPage;
