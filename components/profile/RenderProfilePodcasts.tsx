import React from "react";
import Link from "next/link";

import { Button } from "../ui/Button";
import PodcastCardBig from "../podcasts/PodcastCardBig";
import { getPodcastByUserId } from "@/utils/actions/podcast.action";

type Props = { userId: string | undefined };
const RenderProfilePodcasts = async ({ userId }: Props) => {
  const userPodcasts = await getPodcastByUserId(userId!);

  return (
    <section className="flex w-full flex-col gap-5">
      {userPodcasts.data!.length > 0 ? (
        userPodcasts.data!.map((podcast) => (
          <PodcastCardBig
            key={podcast._id}
            title={podcast.title}
            desc={podcast.desc}
            name={podcast.name}
            location={podcast.location}
            avatar=""
          />
        ))
      ) : (
        <>
          <section className="flex flex-row items-center justify-between gap-[10px] rounded-[16px] bg-background p-[14px] dark:bg-dark3 md:gap-[20px] md:p-[20px]">
            <p className="md:h3-regular caption-regular">
              Host your first Podcast!
            </p>
            <div className="flex flex-row ">
              <Link href={`/podcast/new`}>
                <Button
                  color="orange"
                  className="caption-semibold md:body-semibold gap-2.5 rounded-[6px] px-3 py-2 text-center md:px-4 md:py-3"
                >
                  Submit a Podcast
                </Button>
              </Link>
            </div>
          </section>
        </>
      )}
    </section>
  );
};

export default RenderProfilePodcasts;
