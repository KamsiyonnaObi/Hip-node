"use client";
import React, { useEffect } from "react";

import { usePodcastContext } from "@/providers/PodcastProvider";

interface Props {
  image: string;
  type: string;
  episode: number;
  name: string;
  audioPath: string;
  showEdit: boolean;
  _id: string;
  title: string;
  desc: string;
}

const PodcastSetter = ({
  image,
  type,
  episode,
  name,
  audioPath,
  showEdit,
  _id,
  title,
  desc,
}: Props) => {
  const { setPodcastData } = usePodcastContext();

  useEffect(() => {
    setPodcastData({
      image,
      type,
      episode,
      name,
      audioPath,
      showEdit,
      _id,
      title,
      desc,
    });
  }, []);

  return (
    <div className="w-[335px] gap-2.5 rounded-[16px] bg-background p-[14px] text-secondary2 dark:bg-dark3 dark:text-background2 md:h-[190px] md:w-[785px] md:p-5"></div>
  );
};

export default PodcastSetter;
