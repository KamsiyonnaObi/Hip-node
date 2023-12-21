import ProfileDetails from "@/components/profile/ProfileDetails";
import { getCurrentUser } from "@/utils/actions/user.action";
import React from "react";

const page = async () => {
  const profileData = await getCurrentUser(["followers"]);

  return (
    <section className=" xs:max-w-[320px] mx-auto max-w-[325px] sm:max-w-[550px] md:max-w-[700px] lg:max-w-[850px]">
      <div className="my-[1.25rem]">
        <ProfileDetails JSONProfileData={JSON.stringify(profileData)} />
      </div>
    </section>
  );
};

export default page;
