import React from "react";

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="my-5 bg-bkg text-defaultText ">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-5 px-5 sm:px-10 md:flex-row">
        {children}
      </div>
    </main>
  );
};

export default PageWrapper;
