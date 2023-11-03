import { postData } from "@/constants/dummy";

const MoreFrom = () => {
  return (
    <article className="flex flex-col gap-[15px] rounded-2xl bg-background p-5 dark:bg-dark3">
      <h3 className="h3-regular text-secondary2 dark:text-background2">
        More from AR. Jakir
      </h3>
      {postData.slice(1).map((i) => (
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
      ))}
    </article>
  );
};

export default MoreFrom;
