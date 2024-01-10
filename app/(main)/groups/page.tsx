import React from "react";
import { PostGroup, CreateGroup } from "@/components/group";
import { getAllGroups } from "@/utils/actions/group.action";
import Podcasts from "@/components/Podcasts";
import Meetups from "@/components/home/Meetups";
import GroupFilter from "@/components/group/GroupFilter";
import { getCurrentUser } from "@/utils/actions/user.action";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Groups | Hipnode",
  description:
    "Explore the latest groups on Hipnode a social media forum for developers",
  keywords: ["Hipnode", "groups", "community", "forum", "developers"],
};

interface Props {
  searchParams: { search: string; category: string };
}

const page = async ({ searchParams }: Props) => {
  const currentUser = await getCurrentUser();

  const groups = await getAllGroups(searchParams);
  const mapGroups = groups.groups.map((group) => ({
    _id: group._id.toString(),
    title: group.title,
    groupUrl: group.groupUrl,
    post: group.post,
  }));

  const numberOfColumns = 3;
  return (
    <main className="page-formatting xs:max-w-[320px] mx-auto sm:max-w-[550px] md:max-w-[700px] xl:max-w-[1100px] lg:max-w-[950px]">
      <section>
        <GroupFilter />
      </section>
      <div className="flex flex-col sm:flex-row sm:gap-[1.25rem]">
        <section>
          <div className="mx-auto flex flex-col flex-wrap gap-5 lg:w-[800px] lg:flex-row">
            {mapGroups
              .reduce((columns: React.JSX.Element[][], group, index) => {
                const columnIndex = index % numberOfColumns;
                if (!columns[columnIndex]) {
                  columns[columnIndex] = [];
                }
                columns[columnIndex].push(
                  <div key={group._id}>
                    <PostGroup
                      post={JSON.stringify(group.post)}
                      title={group.title}
                      _id={group._id}
                      groupUrl={group.groupUrl}
                      body={"body"}
                      hasLiked={group.post.likes
                        .map((likes: string) => likes.toString())
                        .includes(currentUser?._id.toString())}
                      likes={group.post.likes.length}
                      postUser={group.post.userId?._id.toString() || null}
                      currentUserId={currentUser?._id.toString() || ""}
                    />
                  </div>
                );
                return columns;
              }, [])
              .map((column, columnIndex) => (
                <div key={columnIndex} className="flex flex-col gap-5">
                  {column}
                </div>
              ))}
          </div>
        </section>
        <section>
          <div className="flex flex-col gap-5">
            <div className="sm:w-[325px]">
              <CreateGroup
                title={"Create Group"}
                desc={
                  "Create a community and unite with like-minded individuals. Embark on exciting journeys together."
                }
                buttonText={"Create Group"}
              />
            </div>
            <Meetups />
            <Podcasts />
          </div>
        </section>
      </div>
    </main>
  );
};

export default page;
