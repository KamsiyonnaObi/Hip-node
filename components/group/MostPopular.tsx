import { ImageFallback as Image } from "@/components/shared/ImageFallback";
import { getMostPopularGroups } from "@/utils/actions/group.action";
import Link from "next/link";
import React from "react";

const MostPopular = async () => {
  try {
    const groups = await getMostPopularGroups();
    if (!Array.isArray(groups)) {
      return (
        <div>
          <p>Error: {groups.message}</p>
        </div>
      );
    }

    return (
      <section>
        {groups.map((group) => (
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
                      className="w-[34px]] m-auto h-[34px] rounded-full"
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
        <div className="rounded-b-[1rem] bg-white py-[.625rem] pl-[1.25rem] dark:bg-dark3">
          <Link
            href={"/groups?category=popular"}
            className="flex h-[.875rem] w-[2.125rem] gap-[.625rem] rounded-[.625rem] bg-purple20 px-[.25rem]"
          >
            <p className="text-xs-semibold text-purple">See all</p>
          </Link>
        </div>
      </section>
    );
  } catch (error) {
    console.error(error);
    return (
      <div>
        <p>Error: An unexpected error occurred.</p>
      </div>
    );
  }
};

export default MostPopular;
