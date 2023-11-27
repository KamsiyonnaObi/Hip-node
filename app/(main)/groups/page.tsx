import React from "react";

import {
  Podcasts,
  PostGroup,
  GroupName,
  Meetups,
  CreateGroup,
} from "@/components/group";
import { getAllGroups } from "@/utils/actions/group.action";

const page = async ({ params }: { params: string }) => {
  const groups = await getAllGroups(params);
  const mapGroups = groups.groups.map((groups) => ({
    _id: groups._id.toString(),
    title: groups.title,
    groupUrl: groups.groupUrl,
    post: groups.post,
  }));

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
            {mapGroups.map((group: any) => (
              <div key={group._id}>
                <PostGroup
                  post={JSON.stringify(group.post)}
                  title={group.title}
                  _id={group._id}
                  groupUrl={group.groupUrl}
                />
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
