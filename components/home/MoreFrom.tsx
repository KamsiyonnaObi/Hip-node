import { IPost } from "@/models/post.model";

interface Props {
  posts?: IPost[];
  author: string;
}

const MoreFrom = ({ posts, author }: Props) => {
  return (
    <article className="flex flex-col gap-[15px] rounded-2xl bg-background p-5 dark:bg-dark3">
      <h3 className="h3-regular text-secondary2 dark:text-background2">
        More from {author}
      </h3>
      {posts && posts.length > 0 ? (
        posts?.slice(0, 3).map((i) => (
          <div
            key={i.title}
            className="border-t border-secondary6 pt-[15px] dark:border-secondary2"
          >
            <p className="caption-semibold line-clamp-2 text-secondary2 dark:text-background2">
              {i.title}
            </p>
            <p className="caption-semibold text-secondary3">
              #{i.tags.join(" #")}
            </p>
          </div>
        ))
      ) : (
        <p className="caption-semibold line-clamp-2 text-secondary2 dark:text-background2">
          No posts found
        </p>
      )}
    </article>
  );
};

export default MoreFrom;
