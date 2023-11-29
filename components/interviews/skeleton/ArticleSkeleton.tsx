import { Skeleton } from "@/components/ui/Skeleton";

const ArticleSkeleton = () => {
  return (
    <div className="order-2 flex w-full flex-col gap-5">
      {[...Array(3)].map((item) => (
        <Skeleton
          key={`skeleton-${item}`}
          className="h-96 w-full rounded-2xl bg-bkg-2 sm:h-56"
        />
      ))}
    </div>
  );
};

export default ArticleSkeleton;
