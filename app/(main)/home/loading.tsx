import React from "react";
import { Skeleton } from "@/components/ui/Skeleton";

const Loading = () => {
  return (
    <main className="page-formatting">
      <section className="flex flex-col md:hidden lg:block lg:gap-5">
        <Skeleton className="h-[60px] w-[335px] rounded-lg md:h-[180px] md:w-[210px]" />
      </section>
      <section className="flex flex-col gap-5">
        <div className="hidden md:flex lg:hidden">
          <Skeleton className="h-[86px] w-[335px] rounded-lg md:w-[785px]" />
        </div>
        {[1, 2, 3, 4].map((item) => (
          <Skeleton
            key={item}
            className="h-[196px] w-[335px] rounded-lg md:w-[785px]"
          />
        ))}
      </section>
      <section className="flex flex-col gap-5">
        <Skeleton className="h-[325px] w-[335px] rounded-lg md:w-[320px]" />
        <Skeleton className="h-[325px] w-[335px] rounded-lg md:w-[320px]" />
      </section>
    </main>
  );
};

export default Loading;
