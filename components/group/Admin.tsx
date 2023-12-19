import React from "react";

import Admins from "./Admins";

const Admin = ({ admins }: { admins: any }) => {
  return (
    <div className="flex w-[20.9375rem] flex-col rounded-[1rem] bg-background p-[.625rem] shadow-lg dark:bg-dark3 sm:w-full md:p-[1.25rem] lg:w-[13.125rem]">
      <p className="display-semibold mb-[1.25rem] text-secondary2 dark:text-background2">
        Admins
      </p>
      <div className="flex flex-col gap-[.52rem] dark:bg-dark3">
        {admins.map(
          (admin: { _id: string; fullName: string; profileImage: string }) => (
            <Admins
              key={admin._id}
              fullName={admin.fullName}
              profileImage={admin.profileImage}
              _id={admin._id}
            />
          )
        )}
      </div>
    </div>
  );
};

export default Admin;
