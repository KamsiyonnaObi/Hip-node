import React from "react";
import {
  About,
  Admin,
  Cover,
  Frame,
  ActiveMembers,
  PopularTagsGroups,
  RecentMedia,
  CreateGroup,
} from "@/components/group";

import GroupError from "@/components/group/GroupError";

import { getGroupById } from "@/utils/actions/group.action";
import { getPostTagsByGroupId } from "@/utils/actions/post.action";
import PostByGroup from "@/components/group/PostByGroup";
import { getAllPinnedGroups } from "@/utils/actions/user.action";
import { Metadata, ResolvingMetadata } from "next";

export async function generateMetadata(
  { params }: { params: { slug: string } },
  parent: ResolvingMetadata
): Promise<Metadata> {
  // grab which group id

  const group = await getGroupById(params.slug);
  const tags = await getPostTagsByGroupId(params.slug);
  const tagName = tags.map((tag) => tag.name);

  return {
    title: group.data.title,
    keywords: tagName,
    description: group.data.description,
    openGraph: {
      images: [
        {
          url: group.data.coverUrl,
          width: 1200,
          height: 630,
          alt: "Hipnode",
        },
      ],
    },
  };
}

interface UserAdmin {
  _id: string;
  fullName?: string;
  profileImage: string;
}

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
  const admins = group.data.admins.map((admin: UserAdmin) => ({
    _id: admin._id,
    fullName: admin.fullName,
    profileImage: admin.profileImage,
  }));
  const members = group.data.members.map((member: UserAdmin) => ({
    _id: member._id,
    profileImage: member.profileImage,
  }));
  const tags = await getPostTagsByGroupId(params.slug);

  const pinnedGroup = await getAllPinnedGroups();
  const isPinned = pinnedGroup.some(
    (group) => group?._id.toString() === params.slug
  );

  return (
    <main className="mx-auto mt-4 flex max-w-7xl justify-center sm:max-w-[888px] md:min-w-[1143px]  md:max-w-[1250px] ">
      <div className="grid grid-cols-1 gap-[1.25rem] sm:px-[5rem] md:grid-cols-[65%_auto] lg:grid-cols-[auto_58%_auto] ">
        <section className="md:h-0 lg:col-start-2 lg:row-start-1">
          <div className="lg:w-[800px]">
            <Cover
              title={title}
              user={username}
              coverUrl={coverUrl}
              groupUrl={groupUrl}
              groupId={params.slug}
              pinnedGroup={isPinned}
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
            <PostByGroup groupId={params.slug} />
          </div>
        </section>
        <section className="md:col-start-2 md:row-start-2 lg:col-start-3">
          <ActiveMembers members={members} />
        </section>
        <section className="md:col-start-2 lg:col-start-3 lg:row-start-3">
          <RecentMedia groupId={params.slug} />
        </section>
        <section className="md:col-start-2 md:row-start-2 md:mt-[14.5rem] lg:col-start-1 lg:row-start-1 lg:mt-0">
          <About description={description} />
        </section>
        <section className="w-full md:col-start-2 lg:col-start-1 lg:row-start-2 lg:mb-0 lg:h-0">
          <Admin admins={admins} />
        </section>
        <section className="mb-[1.25rem] md:col-start-2 lg:col-start-3 lg:row-start-4">
          <PopularTagsGroups tags={tags} />
        </section>
      </div>
    </main>
  );
};

export default page;
