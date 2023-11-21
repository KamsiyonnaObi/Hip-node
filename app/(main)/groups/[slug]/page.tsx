import React from "react";
import {
  About,
  Admin,
  Cover,
  Frame,
  ActiveMembers,
  PopularTagsGroups as PopularTags,
  RecentMedia,
  Post,
  CreateGroup,
} from "@/components/group";
import {
  getGroupById,
  getUsersBySimilarEmail,
} from "@/utils/actions/group.action";
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
    <main className="mx-auto mt-4 flex max-w-7xl justify-center sm:max-w-[888px] md:min-w-[1143px]  md:max-w-[1250px] lg:max-w-[1400px]">
      <div className="grid grid-cols-1 gap-[1.25rem] sm:px-[5rem] md:grid-cols-[65%_auto] lg:grid-cols-[auto_58%_auto] ">
        <section className="md:h-0 lg:col-start-2 lg:row-start-1">
          <div className="lg:w-[800px]">
            <Cover
              title={title}
              user={username}
              coverUrl={coverUrl}
              groupUrl={groupUrl}
              groupId={params.slug}
            />
          </div>
        </section>
        <section className="md:col-start-2 md:row-start-1 lg:col-start-3 lg:h-0">
          <CreateGroup
            title={"Create Group"}
            desc={
              "Create a community and unite with like-minded individuals. Embark on exciting journeys together."
            }
            buttonText={"Create Group"}
          />
        </section>
        <section className="flex w-fit flex-col gap-5 sm:w-full md:row-start-2 md:mt-32 lg:col-start-2 lg:mt-28">
          <Frame />
          <div className="flex flex-col gap-[1.25rem] max-md:overflow-hidden md:h-0">
            <Post
              postImage="/PostImage.png"
              title="Bitcoin has tumbled from its record high of $58,000 after words from three wise men and women..."
              tags={["remote", "part time", "test"]}
              avatar="/Avatar.png"
              username={"John Smith"}
              createdAt={"2 months ago"}
              views={420}
              likes={69}
              comments={75}
            />
            <Post
              postImage="/PostImage.png"
              title="Bitcoin has tumbled from its record high of $58,000 after words from three wise men and women..."
              tags={["remote", "part time", "test"]}
              avatar="/Avatar.png"
              username={"John Smith"}
              createdAt={"2 months ago"}
              views={420}
              likes={69}
              comments={75}
            />
            <Post
              postImage="/PostImage.png"
              title="Bitcoin has tumbled from its record high of $58,000 after words from three wise men and women..."
              tags={["remote", "part time", "test"]}
              avatar="/Avatar.png"
              username={"John Smith"}
              createdAt={"2 months ago"}
              views={420}
              likes={69}
              comments={75}
            />
            <Post
              postImage="/PostImage.png"
              title="Bitcoin has tumbled from its record high of $58,000 after words from three wise men and women..."
              tags={["remote", "part time", "test"]}
              avatar="/Avatar.png"
              username={"John Smith"}
              createdAt={"2 months ago"}
              views={420}
              likes={69}
              comments={75}
            />
          </div>
        </section>
        <section className="md:col-start-2 md:row-start-2 lg:col-start-3 lg:mt-[-1rem]">
          <ActiveMembers avatar={"/Avatar.png"} />
        </section>
        <section className="md:col-start-2 lg:col-start-3 lg:row-start-3">
          <RecentMedia media={"/bird.png"} />
        </section>
        <section className="md:col-start-2 md:row-start-2 md:mt-[14.5rem] lg:col-start-1 lg:row-start-1 lg:mt-0">
          <About description={description} />
        </section>
        <section className="w-full md:col-start-2 lg:col-start-1 lg:row-start-2 lg:mb-0 lg:h-0">
          <Admin />
        </section>
        <section className="mb-[1.25rem] md:col-start-2 lg:col-start-3 lg:row-start-4">
          <PopularTags />
        </section>
      </div>
    </main>
  );
};

export default page;
