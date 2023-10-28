"use client";
import Link from "next/link";
import React, { useState } from "react";

import CoverImage from "./CoverImage";
import GroupImage from "./GroupImage";
import TagInput from "./TagInput";

type Props = {};

const AddGroup = (props: Props) => {
  const [formData, setFormData] = useState({
    groupName: "",
    description: "",
    admins: "",
    members: "",
  });

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
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
      <div className="flex max-w-[20.9375rem] xs:max-w-[30rem] sm:max-w-[38rem] md:max-w-[46rem]  flex-col gap-[1.25em] p-[1.25rem] bg-background dark:bg-dark3 lg:max-w-[55rem] w-full rounded-[1rem] mb-[13.44rem] lg:mb-[5.37rem] mt-[1.25rem] lg:mt-[1.88rem] sm">
        <div>
          <CoverImage />
        </div>
        <div>
          <GroupImage />
        </div>
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
              className="border-background2 dark:border-dark4 flex w-full min-w-[18.4375rem] max-w-[52.5rem] items-center rounded-[.5rem] border-[2px] px-[1.25rem] py-[.75rem] caption-regular text-secondary3 dark:bg-dark3"
            />
          </div>
        </div>
        <div className="flex flex-col gap-[.62rem]">
          <label className="text-secondary2 caption-semibold dark:text-background2">
            Description
          </label>
          <div>
            <textarea
              name="description"
              placeholder="Provide a short description..."
              value={formData.description}
              onChange={handleChange}
              className="border-background2 dark:border-dark4 caption-regular text-secondary3 dark:bg-dark3 top-[0rem] flex h-[6.875rem] w-full min-w-[18.4375rem] max-w-[52.5rem] rounded-[.5rem] border-[2px] px-[1.25rem] py-[.75rem] lg:h-[9rem]"
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
              className="border-background2 dark:border-dark4 flex min-w-[18.4375rem] w-full max-w-[52.5rem] items-center rounded-[.5rem] border-[2px] px-[1.25rem] py-[.75rem] caption-regular text-secondary3 dark:bg-dark3"
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
              className="border-background2 dark:border-dark4 flex min-w-[18.4375rem] w-full max-w-[52.5rem] items-center rounded-[.5rem] border-[2px] px-[1.25rem] py-[.75rem] caption-regular text-secondary3 dark:bg-dark3"
            />
          </div>
        </div>

        <div className="flex gap-[1.25rem]">
          <Link href={""}>
            <button className="flex w-[7.5rem] items-center justify-center gap-[0.625rem] rounded-[0.5rem] bg-blue px-[2.5rem] py-[0.625rem]">
              <p className="body-semibold  text-background">Create</p>
            </button>
          </Link>
          <button className="my-auto flex items-center">
            <p className="body-semibold  text-secondary3">Cancel</p>
          </button>
        </div>
      </div>
    </>
  );
};

export default AddGroup;
