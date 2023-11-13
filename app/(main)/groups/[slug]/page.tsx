import React from "react";
import {
  About,
  Admin,
  Cover,
  Frame,
  ActiveMembers,
  PopularTags,
  RecentMedia,
  Post,
  CreateGroup,
} from "@/components/group";
import { getGroupById } from "@/utils/actions/group.action";
import GroupError from "@/components/group/GroupError";
const page = async ({ params }: { params: { slug: string } }) => {
  const group = await getGroupById(params.slug);

  if (!group.success)
    return (
      <div className="flex justify-center">
        <GroupError />
      </div>
    );
  const { title, coverUrl, groupUrl, description } = group.data;
  const { username } = group.data.userId;
  return (
    <>
      <div className="grid md:grid-cols-2 md:grid-rows-5 lg:grid-cols-3 lg:grid-rows-3">
        <div className="  lg:row-start-1 lg:col-start-2 md:row-start-1 md:col-start-1">
          <Cover
            title={title}
            user={username}
            coverUrl={coverUrl}
            groupUrl={groupUrl}
            groupId={params.slug}
          />
        </div>
        <div className="  lg:row-start-1 lg:col-start-3 md:row-start-1 md:col-start-2">
          <CreateGroup
            title={"Create Group"}
            desc={
              "Create a community and unite with like-minded individuals. Embark on exciting journeys together."
            }
            buttonText={"Create Group"}
          />
        </div>
        <div className="  lg:row-start-2 lg:col-start-2 md:row-start-2 md:col-start-1">
          <Frame />
        </div>
        <div className="  lg:row-start-3 lg:col-start-2 md:row-start-3 md:col-start-1">
          <Post
            postImage="/PostImage.png"
            title="Bitcoin has tumbled from its record high of $58,000 after words from three wise men and women..."
            tags={["remote", "part time", "test"]}
            avatar="/Avatar.png"
            username={"John Smith"}
            createdAt={"2 month ago"}
            views={420}
            likes={69}
            comments={75}
          />
        </div>
        <div className="  lg:row-start-2 lg:col-start-3 md:row-start-2 md:col-start-2">
          <ActiveMembers avatar={"/Avatar.png"} />
        </div>
        <div className="  lg:row-start-3 lg:col-start-3 md:row-start-3 md:col-start-2">
          <RecentMedia media={"/bird.png"} />
        </div>
        <div className="h-[10rem]  lg:row-start-1 lg:col-start-1 md:row-start-4 md:col-start-2">
          <About description={description} />
        </div>
        <div className="  lg:row-start-2 lg:col-start-1 md:row-start-5 md:col-start-2">
          <Admin />
        </div>
        <div className="  hidden lg:block lg:row-start-3 lg:col-start-1">
          <PopularTags />
        </div>
      </div>
    </>
  );
};

export default page;
