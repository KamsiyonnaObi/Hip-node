import React from "react";

import InfoSection from "@/components/signup/InfoSection";
import SignUp from "@/components/signup/Signup";
import LogInInfoSection from "@/components/signin/LogInInfoSection";
import SignIn from "@/components/signin/SignIn";

const signIn = () => {
  return (
    <main className="flex h-screen w-screen flex-col md:flex-row">
      {/* Info Section */}
      <section className="flex h-full flex-col gap-[60px] bg-background2 px-6 dark:bg-dark2 md:w-1/2">
        <LogInInfoSection />
        {/* <InfoSection /> */}
      </section>
      {/* Login Section */}
      <section className=" bg-background2 dark:bg-dark2 md:bg-background md:dark:bg-dark3 flex h-full flex-col px-6 pt-20 md:w-1/2 md:py-0 ">
        {/* <SignUp /> */}
        <SignIn />
      </section>
    </main>
  );
};

export default signIn;
