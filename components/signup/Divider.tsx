import React from "react";

const Divider = () => {
  return (
    <>
      <section className="flex w-full items-center justify-center gap-[21px]">
        <div className="h-[1px] w-2/5 bg-secondary5 dark:bg-secondary2"></div>
        <div>
          <h3 className="h3-semibold text-center text-secondary2 dark:text-background2">
            or
          </h3>
        </div>
        <div className="h-[1px] w-2/5 bg-secondary5 dark:bg-secondary2"></div>
      </section>
    </>
  );
};

export default Divider;
