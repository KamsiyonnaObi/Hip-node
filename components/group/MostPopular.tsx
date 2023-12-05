import { ImageFallback as Image } from "@/components/shared/ImageFallback";
import { getMostPopularGroups } from "@/utils/actions/group.action";
import React from "react";

const MostPopular = async () => {
  try {
    const groups = await getMostPopularGroups();

    if (!Array.isArray(groups)) {
      // Handle the error case here
      console.error(groups.message); // Log the error message
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
            </div>
          </div>
        ))}
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
