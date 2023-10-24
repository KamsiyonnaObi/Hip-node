"use client";
import React, { useState } from "react";

type Props = {};

const AddGroup = (props: Props) => {
  const [formData, setFormData] = useState({
    groupName: "",
    description: "",
    admins: "",
    members: "",
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
  newFormData.append("description", formData.description);
  newFormData.append("admins", formData.admins);
  newFormData.append("admins", formData.members);

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
              name="groupName"
              placeholder="Name..."
              value={formData.groupName}
              onChange={handleChange}
              className="border-background2 dark:border-dark4 flex w-[18.4375rem] lg:w-[52.5rem] items-center rounded-[.5rem] border-[2px] px-[1.25rem] py-[.75rem] caption-regular text-secondary3 dark:bg-dark3"
            />
          </div>
        </div>
        <div className="flex flex-col gap-[.62rem]">
          <label className="text-secondary2 caption-semibold dark:text-background2">
            Description
          </label>
          <div>
            <input
              type="text"
              name="description"
              placeholder="Provide a short description..."
              value={formData.description}
              onChange={handleChange}
              className="border-background2 dark:border-dark4 flex w-[18.4375rem] lg:w-[52.5rem] rounded-[.5rem] border-[2px] px-[1.25rem] py-[.75rem] caption-regular text-secondary3 dark:bg-dark3 h-[6.875rem] lg:h-[9rem]"
            />
          </div>
        </div>
        <div className="flex flex-col gap-[.62rem]">
          <label className="text-secondary2 caption-semibold dark:text-background2">
            Add admins
          </label>
          <div>
            <input
              type="text"
              name="admins"
              placeholder="Add admins..."
              value={formData.admins}
              onChange={handleChange}
              className="border-background2 dark:border-dark4 flex w-[18.4375rem] lg:w-[52.5rem] items-center rounded-[.5rem] border-[2px] px-[1.25rem] py-[.75rem] caption-regular text-secondary3 dark:bg-dark3"
            />
          </div>
        </div>
        <div className="flex flex-col gap-[.62rem]">
          <label className="text-secondary2 caption-semibold dark:text-background2">
            Add members
          </label>
          <div>
            <input
              type="text"
              name="members"
              placeholder="Add members..."
              value={formData.members}
              onChange={handleChange}
              className="border-background2 dark:border-dark4 flex w-[18.4375rem] lg:w-[52.5rem] items-center rounded-[.5rem] border-[2px] px-[1.25rem] py-[.75rem] caption-regular text-secondary3 dark:bg-dark3"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AddGroup;
