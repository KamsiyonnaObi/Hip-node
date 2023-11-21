import React from "react";

import {
  Podcasts,
  PostGroup,
  GroupName,
  Meetups,
  CreateGroup,
} from "@/components/group";
import { getAllGroups } from "@/utils/actions/group.action";

interface AllGroups {
  description: string;
  _id: string;
  title: string;
  createdAt: string;
  coverUrl: string;
  groupUrl: string;
}

const page = async ({ params }: { params: { slug: string } }) => {
  const groups = await getAllGroups(params.slug);
  // if (!groups.success)
  //   return (
  //     <div className="flex justify-center">
  //       <GroupError />
  //     </div>
  //   );
  // const { title, description, createdAt, coverUrl, groupUrl } = groups;

  const mapGroups = groups.groups.map((groups: AllGroups) => ({
    _id: groups._id,
    description: groups.description,
    title: groups.title,
    createdAt: groups.createdAt,
    coverUrl: groups.coverUrl,
    groupUrl: groups.groupUrl,
  }));
  console.log(groups);
  return (
    <main className="page-formatting xs:max-w-[320px] mx-auto sm:max-w-[550px] md:max-w-[700px] xl:max-w-[1100px] lg:max-w-[950px]">
      <section>
        <div>
          <GroupName />
        </div>
      </section>
      <div className="flex flex-col sm:flex-row sm:gap-[1.25rem]">
        <section>
          <div className="mx-auto flex flex-col flex-wrap gap-5 lg:w-[800px] lg:flex-row">
            {/* <PostGroup
              avatar={groupUrl}
              image={coverUrl}
              title={title}
              name={"Moinul Hassan"}
              desc={description}
              date={createdAt}
              descTitle={title}
            /> */}
            {mapGroups.map((group) => (
              <div key={group._id}>
                <PostGroup
                  avatar={group.groupUrl}
                  image={group.coverUrl}
                  title={group.title}
                  descTitle={group.description}
                  desc={"group"}
                  date={"date"}
                  name={"name"}
                />
                {/* Add more group properties here */}
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
