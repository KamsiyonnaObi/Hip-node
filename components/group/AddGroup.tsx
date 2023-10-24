"use client";
import React, { useState } from "react";

type Props = {};

const AddGroup = (props: Props) => {
  const [formData, setFormData] = useState({
    groupName: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // create formData object
  const newFormData = new FormData();

  // append each formData value
  newFormData.append("groupName", formData.groupName);

  return (
    <>
      <div className="flex w-[20.9375rem] flex-col gap-[1.875rem] p-[1.25rem] bg-background dark:bg-dark3 lg:w-[55rem] rounded-[1rem]">
        <div>
          <div></div>
          <div></div>
        </div>
        <div></div>
        <div className="flex flex-col gap-[.62rem]">
          <label className="text-secondary2 caption-semibold dark:text-background2">
            Group Name
          </label>
          <div>
            <input
              type="text"
              name="Group Name"
              placeholder="GroupName"
              value={formData.groupName}
              onChange={handleChange}
              className="border-background2 dark:border-dark4 flex w-[18.4375rem] lg:w-[52.5rem] items-center rounded-[.5rem] border-[2px] px-[1.25rem] py-[.75rem] caption-regular text-secondary3 dark:bg-dark3"
            />
          </div>
        </div>
        <div className="flex flex-col gap-[.62rem]">
          <label className="text-secondary2 caption-semibold dark:text-background2">
            Group Name
          </label>
          <div>
            <input
              type="text"
              name="Group Name"
              placeholder="GroupName"
              value={formData.groupName}
              onChange={handleChange}
              className="border-background2 dark:border-dark4 flex w-[18.4375rem] lg:w-[52.5rem] items-center rounded-[.5rem] border-[2px] px-[1.25rem] py-[.75rem] caption-regular text-secondary3 dark:bg-dark3"
            />
          </div>
        </div>{" "}
        <div></div>
        <div></div>
      </div>
    </>
  );
};

export default AddGroup;
