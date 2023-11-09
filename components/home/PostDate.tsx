import { FormatDate } from "@/lib/formatDate";

const PostDate = ({
  username,
  createdAt,
}: {
  username: string;
  createdAt: Date;
}) => {
  return (
    <section className="items-start justify-start rounded-2xl bg-background p-5 dark:bg-dark3">
      <p className="md:display-semibold body-semibold  text-secondary3">
        <span className="text-blue80">{username} </span>Posted on{" "}
        <span className="text-blue80">
          <FormatDate date={createdAt} />
        </span>
      </p>
    </section>
  );
};

export default PostDate;
