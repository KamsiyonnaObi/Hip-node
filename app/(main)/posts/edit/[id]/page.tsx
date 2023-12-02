import { InputPost } from "@/components/form";
import { getPostById } from "@/utils/actions/post.action";
import React from "react";

const page = async ({ params }: { params: { id: string } }) => {
  const result = await getPostById(params.id);
  return (
    <section className="min-h-screen bg-background2 px-5 pb-7 pt-5 dark:bg-dark2 md:pb-[62px] md:pl-[270px] md:pr-[290px] md:pt-7">
      <InputPost editDetail={JSON.stringify(result.data)} />
    </section>
  );
};

export default page;
