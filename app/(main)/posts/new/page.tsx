import { InputPost } from "@/components/form";
import PostCategory from "@/components/home/PostCategory";
import React from "react";

const page = () => {
  return (
    <section className="min-h-screen bg-background2 px-5 pb-7 pt-5 dark:bg-dark2 md:pb-[62px] md:pl-[270px] md:pr-[290px] md:pt-7">
      <InputPost />
    </section>
  );
};

export default page;
