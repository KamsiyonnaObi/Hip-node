import React from "react";
import { PostGroup, CreateGroup, NewlyLaunched } from "@/components/group";
import { getAllGroups } from "@/utils/actions/group.action";
import Podcasts from "@/components/Podcasts";
import Meetups from "@/components/home/Meetups";
import GroupDropdown from "@/components/group/GroupDropdown";
import FillIcon from "@/components/icons/FillIcon";

const page = async ({ params }: { params: string }) => {
  const groups = await getAllGroups(params);
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
        <div>
          <GroupDropdown
            name={"Newly Launched"}
            icon={<FillIcon.Growing className="fill-black" />}
          >
            <NewlyLaunched />
          </GroupDropdown>
          <GroupDropdown
            name={"Newly Launched"}
            icon={<FillIcon.Growing className="fill-black" />}
          >
            <NewlyLaunched />
          </GroupDropdown>
        </div>
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
