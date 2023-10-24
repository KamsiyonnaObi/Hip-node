"use client";
import Link from "next/link";
import React, { useState } from "react";
import OutlineIcon from "../icons/OutlineIcon";

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
      <div className="flex w-[20.9375rem] flex-col gap-[1.875rem] p-[1.25rem] bg-background dark:bg-dark3 lg:w-[55rem] rounded-[1rem] mb-[13.44rem] lg:mb-[5.37rem] mt-[1.25rem] lg:mt-[1.88rem]">
        <div className="flex">
          <button className="w-[5.7rem] flex px-[.625rem] py-[.25rem] gap-[.625rem] items-center rounded-[.25rem] bg-background2 dark:bg-dark4">
            <OutlineIcon.Image1 className="fill-black dark:fill-white" />
            <p className="text-sm-regular text-secondary2 dark:text-background">
              Set Cover
            </p>
          </button>
        </div>
        <div className="w-full h-[8.25rem] lg:h-[10.4rem] flex justify-center items-center dark:bg-dark4 dark:border-dark4 bg-background2 border-background">
          <OutlineIcon.Image2 className="fill-white dark:stroke-secondary4 dark:fill-dark4 w-[1.875rem] h-[1.875rem] lg:w-[2.5rem] lg:h-[2.5rem]" />
        </div>
        <div className="flex gap-[.62rem]">
          <div className="rounded-full w-[3.75rem] h-[3.75rem] bg-background2 dark:bg-dark4">
            {" "}
            <OutlineIcon.Image2 className="fill-white dark:stroke-secondary4 dark:fill-dark4 m-auto mt-[1.2rem]" />
          </div>
          <div className="flex gap-[.62rem] items-center">
            <OutlineIcon.Image1 className="dark:fill-background2 fill-secondary2" />
            <p className="text-sm-regular dark:text-background2 text-secondary2">
              Set Profile Photo
            </p>
          </div>
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
      </div>
    </>
  );
};

export default AddGroup;
