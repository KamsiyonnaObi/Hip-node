import React from "react";

import InfoSection from "@/components/signup/InfoSection";
import SignUp from "@/components/signup/Signup";

const signUp = () => {
  return (
    <main className="flex h-screen w-screen flex-col md:flex-row">
      {/* Info Section */}
      <section className="flex h-full flex-col gap-[60px] bg-background2 px-6 dark:bg-dark2 md:w-1/2">
        <InfoSection />
      </section>
      {/* Login Section */}
      <section className=" flex h-full flex-col bg-background2 px-6 py-20 dark:bg-dark2 md:w-1/2 md:bg-background md:py-0 md:dark:bg-dark3 ">
        <SignUp />
      </section>
    </main>
  );
};

export default signUp;
