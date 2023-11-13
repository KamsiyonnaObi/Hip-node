import { IPost } from "@/models/post.model";

interface Props {
  posts: string;
  author: string;
}

const MoreFrom = ({ posts, author }: Props) => {
  const postsObj = JSON.parse(posts);
  return (
    <article className="flex flex-col gap-[15px] rounded-2xl bg-background p-5 dark:bg-dark3">
      <h3 className="h3-regular text-secondary2 dark:text-background2">
        More from {author}
      </h3>
      {postsObj && postsObj.length > 0 ? (
        postsObj?.slice(0, 3).map((postObj: IPost) => (
          <div
            key={postObj.title}
            className="border-t border-secondary6 pt-[15px] dark:border-secondary2"
          >
            <p className="caption-semibold line-clamp-2 text-secondary2 dark:text-background2">
              {postObj.title}
            </p>
            <p className="caption-semibold text-secondary3">
              #{postObj.tags.join(" #")}
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
