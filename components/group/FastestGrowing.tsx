import { ImageFallback as Image } from "@/components/shared/ImageFallback";
import { getFastestGrowingGroups } from "@/utils/actions/group.action";
import Link from "next/link";

const FastestGrowing = async () => {
  const groups = await getFastestGrowingGroups();
  if (!Array.isArray(groups)) {
    return (
      <div>
        <p>Error: {groups.message}</p>
      </div>
    );
  }
  return (
    <section>
      {groups?.map((group) => (
        <div key={group._id}>
          <div className="bg-white px-[.62rem] dark:bg-dark3">
            <Link href={`/groups/${group._id}`}>
              <div className="flex gap-[.5rem] p-[.62rem]">
                <div className="my-auto w-[20%] sm:w-[10%] md:w-[20%]">
                  <Image
                    src={group.groupUrl}
                    alt="icon"
                    width={34}
                    height={34}
                    className="m-auto h-[34px] w-[34px] rounded-full"
                  />
                </div>
                <div className="w-[80%] flex-col sm:w-[90%] md:w-[80%]">
                  <h3 className="caption-semibold line-clamp-1 text-secondary2 dark:text-background2">
                    {group.title}
                  </h3>
                  <p className="text-sm-regular line-clamp-1 text-secondary3">
                    {group.description}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
};

export default FastestGrowing;
