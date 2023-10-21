import React from "react";

import Admins from "./Admins";

const Admin = () => {
  return (
    <div className="flex w-[20.9375rem] flex-col rounded-[1rem] bg-background p-[.625rem] dark:bg-dark3 sm:w-[16rem] md:w-[20.938rem] md:p-[1.25rem] lg:w-[13.125rem]">
      <p className="display-semibold mb-[1.25rem] text-secondary2 dark:text-background2">
        Admins
      </p>
      <div className="flex flex-col gap-[.52rem] dark:bg-dark3">
        <Admins username={"Austin M"} avatar={"/Avatar.png"} link={""} />
        <Admins username={"Austin M"} avatar={"/Avatar.png"} link={""} />
        <Admins username={"Austin M"} avatar={"/Avatar.png"} link={""} />
        <Admins username={"Austin M"} avatar={"/Avatar.png"} link={""} />
        <Admins username={"Austin M"} avatar={"/Avatar.png"} link={""} />
      </div>
    </div>
  );
};

export default Admin;
