import { postData } from "@/constants/dummy";
import { FormatDate } from "@/lib/formatDate";
import React from "react";

const PostDate = () => {
  return (
    <section className="items-start justify-start rounded-2xl bg-background p-5 dark:bg-dark3">
      <p className="md:display-semibold body-semibold  text-secondary3">
        <span className="text-blue80">{postData[0].name} </span>Posted on{" "}
        <span className="text-blue80">
          <FormatDate dateStr={postData[0].postedDate} />
        </span>
      </p>
    </section>
  );
};

export default PostDate;
