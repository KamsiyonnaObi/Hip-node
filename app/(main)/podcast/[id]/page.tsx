import PodcastBanner from "@/components/podcasts/PodcastBanner";
import Html from "@/components/shared/html";
import UserModel from "@/models/User";
import { getPodcast } from "@/utils/actions/podcast.action";
import { getServerSession } from "next-auth";
import React from "react";

const page = async ({ params }: { params: { id: string } }) => {
  const result = await getPodcast(params.id);

  const currentUser: any = await getServerSession();
  const { email } = currentUser?.user;
  const User = await UserModel.findOne({ email });
  const currentUserId = User?._id.toString();
  return (
    <main className="flex flex-col items-center gap-5 p-5">
      <PodcastBanner
        image={result.image}
        type={result.type}
        episode={result.episode}
        name={result.userId?.username || "unknown"}
        audioPath={result.audoPath}
        showEdit={result.userId?._id.toString() === currentUserId}
        _id={result._id.toString()}
      />
      <div className="w-[335px] rounded-[16px] bg-background p-5 dark:bg-dark3 md:w-[785px]">
        <div className="gap-5">
          <h1 className="h1-semibold dark:text-background2">{result.title}</h1>
          <div className="display-regular text-secondary3">
            <Html htmltext={result.desc} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;