import React from "react";
import Admins from "./Admins";

const Admin = () => {
  return (
    <div className="flex w-[210px] flex-col rounded-[1rem] bg-background p-[1.25rem] dark:bg-dark3">
      <p className="display-semibold mb-[1.25rem] text-secondary2 dark:text-background2">
        Admins
      </p>
      <div className="flex flex-col gap-[.52rem] dark:bg-dark3">
        <Admins username={"Austin M"} avatar={""} link={""} />
      </div>
    </div>
  );
};

export default Admin;
