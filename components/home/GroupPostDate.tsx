import { FormatDate } from "@/lib/formatDate";
import React from "react";

const PostDate = ({
  username,
  createdAt,
  groupTitle,
}: {
  username: string;
  createdAt: Date;
  groupTitle: string;
}) => {
  return (
    <section className="items-start justify-start rounded-2xl bg-background p-5 dark:bg-dark3">
      <p className="md:display-semibold body-semibold  text-secondary3">
        <span className="text-blue80">{username} </span>Posted to{" "}
        <span className="text-blue80">{groupTitle} </span> on{" "}
        <FormatDate date={createdAt} />
      </p>
    </section>
  );
};

export default PostDate;
