import ActiveMembers from "@/components/group/ActiveMembers";
import Admin from "@/components/group/Admin";
import Frame from "@/components/group/Frame";
import Cover from "@/components/group/Cover";
import About from "@/components/group/About";
import PopularTags from "@/components/group/PopularTags";
import RecentMedia from "@/components/group/RecentMedia";
import React from "react";
import CreateGroup from "@/components/group/CreateGroup";

const page = () => {
  return (
    <main>
      {/* Desktop */}
      <div className="mx-auto hidden items-center justify-center gap-5 md:mt-5 md:flex md:max-w-[700px] md:flex-row md:items-start xl:max-w-[1100px] lg:max-w-[950px]">
        <section>
          <div>
            <About />
            <Admin />
            <PopularTags />
          </div>
        </section>
        <div className="flex flex-col sm:flex-row sm:gap-[1.25rem]">
          <section>
            <div className="mx-auto flex flex-col flex-wrap gap-5 lg:w-[800px] lg:flex-row">
              <Cover />
              <div className="w-full">
                <Frame />
              </div>
              {/* <Post /> */}
            </div>
          </section>
          <section>
            <div className="flex flex-col gap-5">
              <CreateGroup
                title={"Create Group"}
                desc={
                  "Create a community and unite with like-minded individuals. Embark on exciting journeys together."
                }
                buttonText={"Create Group"}
              />
              <ActiveMembers />
              <RecentMedia />
            </div>
          </section>
        </div>
      </div>
      {/* Mobile */}
      <div className="xs:max-w-[320px] mx-auto mt-2.5 flex flex-col items-center justify-center gap-5 sm:max-w-[550px] md:hidden">
        <Cover />
        <CreateGroup
          title={"Create Group"}
          desc={
            "Create a community and unite with like-minded individuals. Embark on exciting journeys together."
          }
          buttonText={"Create Group"}
        />
        <Frame />
        {/* <Post /> */}
        <ActiveMembers />
        <RecentMedia />
        <About />
        <Admin />
      </div>
    </main>
  );
};

export default page;
