"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import PodcastBanner from "@/components/podcasts/PodcastBanner";

interface PodcastContextType {
  podcastData: any;
  setPodcastData: any;
  setPlayState: any;
}

const PodcastContext = createContext<PodcastContextType>(
  {} as PodcastContextType
);

export function PodcastProvider({ children }: { children: React.ReactNode }) {
  const [podcastData, setPodcastData] = useState<any>(null);
  const [playState, setPlayState] = useState<boolean>(false);
  const [showBottomBar, setShowBottomBar] = useState<boolean>(false);

  const pathname = usePathname();

  useEffect(() => {
    if (pathname?.startsWith("/podcast/")) {
      setShowBottomBar(false);
    } else {
      setShowBottomBar(true);
    }
  }, [pathname]);

  useEffect(() => {
    setPlayState(false);
  }, [podcastData?._id]);

  return (
    <PodcastContext.Provider
      value={{ podcastData, setPodcastData, setPlayState }}
    >
      {children}
      <PodcastBanner
        {...podcastData}
        showBottomBar={showBottomBar}
        setPlayState={setPlayState}
        playState={playState}
      />
    </PodcastContext.Provider>
  );
}

export function usePodcastContext() {
  return useContext(PodcastContext);
}
