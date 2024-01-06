"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import PodcastBanner from "@/components/podcasts/PodcastBanner";

interface PodcastContextType {
  podcastData: any;
  setPodcastData: any;
  setPlayState: any;
  hidePodcastBanner: any;
}

const PodcastContext = createContext<PodcastContextType>(
  {} as PodcastContextType
);

export function PodcastProvider({ children }: { children: React.ReactNode }) {
  const [podcastData, setPodcastData] = useState<any>(null);
  const [playState, setPlayState] = useState<boolean>(false);
  const [showBottomBar, setShowBottomBar] = useState<boolean>(false);
  const [showPodcastBanner, setShowPodcastBanner] = useState(true);

  const pathname = usePathname();

  const hidePodcastBanner = () => {
    setShowPodcastBanner(false);
  };

  useEffect(() => {
    if (pathname?.startsWith("/podcast/")) {
      setShowBottomBar(false);
      setShowPodcastBanner(true);
    } else {
      setShowBottomBar(true);
    }

    if (
      pathname?.startsWith("/podcast/new") ||
      pathname?.startsWith("/podcast/edit")
    ) {
      setShowPodcastBanner(false);
    }
  }, [pathname]);

  useEffect(() => {
    setPlayState(false);
    setShowPodcastBanner(true);
  }, [podcastData?._id]);

  return (
    <PodcastContext.Provider
      value={{ podcastData, setPodcastData, setPlayState, hidePodcastBanner }}
    >
      {children}
      {podcastData && showPodcastBanner && (
        <PodcastBanner
          {...podcastData}
          showBottomBar={showBottomBar}
          setPlayState={setPlayState}
          playState={playState}
          hidePodcastBanner={hidePodcastBanner}
        />
      )}
    </PodcastContext.Provider>
  );
}

export function usePodcastContext() {
  return useContext(PodcastContext);
}
