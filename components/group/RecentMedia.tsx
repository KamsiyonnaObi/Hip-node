import { getPostsByGroupId } from "@/utils/actions/post.action";
import React from "react";
import Media from "./Media";

const RecentMedia = async ({ groupId }: { groupId: string }) => {
  const posts = await getPostsByGroupId(groupId);

  return (
    <div className="flex w-[20.9375rem] flex-col gap-[0.625rem] rounded-[1rem] bg-background p-[1.25rem] shadow-lg dark:bg-dark3 sm:w-full">
      <div className="mb-[.62rem]">
        <h2 className="display-semibold text-secondary2 dark:text-background2">
          Recent Media
        </h2>
      </div>
      <div className="flex flex-wrap gap-[.62rem]">
        {posts?.map((post) => <Media key={post._id} media={post.image} />)}
      </div>
    </div>
  );
};

export default RecentMedia;
