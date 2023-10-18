import ActiveMembers from "@/components/group/ActiveMembers";
import Admin from "@/components/group/Admin";
import Frame from "@/components/group/Frame";
import RecentMedia from "@/components/group/RecentMedia";
import React from "react";

const page = () => {
  return (
    <main className="page-formatting xs:max-w-[320px] mx-auto sm:max-w-[550px] md:max-w-[700px] xl:max-w-[1100px] lg:max-w-[950px]">
      <section>
        <div>Left</div>
      </section>
      <div className="flex flex-col sm:flex-row sm:gap-[1.25rem]">
        <section>
          <div className="mx-auto flex flex-col flex-wrap gap-5 lg:w-[800px] lg:flex-row">
            <ActiveMembers />
            <Admin />
            <Frame />
            <RecentMedia />
          </div>
        </section>
        <section>
          <div className="flex flex-col gap-5">Right</div>
        </section>
      </div>
    </main>
  );
};

export default page;
