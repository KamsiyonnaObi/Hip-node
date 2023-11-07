"use client";
import React, { useState, ChangeEvent, useEffect } from "react";
import { useRouter } from "next/navigation";
import { z } from "zod";

import CoverImage from "./CoverImage";
import GroupImage from "./GroupImage";
import { GroupSchema } from "@/lib/validations";
import { formDataToObject } from "@/utils";
import {
  createGroup,
  getUsersBySimilarName,
} from "@/utils/actions/group.action";
import useDebounce from "./GetUser";

interface User {
  _id: string;
  username: string;
}

const AddGroup: React.FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    admins: "",
    members: "",
    coverUrl: "",
    groupUrl: "",
  });

  const [submitStatus, setSubmitStatus] = useState<string>("");

  const [validationErrors, setValidationErrors] = useState<
    Record<string, string>
  >({});

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    setValidationErrors((errors) => ({
      ...errors,
      [name]: "",
    }));
  };

  const submitForm = async () => {
    setSubmitStatus("Submitting");

    const newFormData = new FormData();
    newFormData.append("title", formData.title);
    newFormData.append("coverUrl", formData.coverUrl);
    newFormData.append("groupUrl", formData.groupUrl);
    newFormData.append("description", formData.description);

    const admins = formData.admins.split(",");
    const members = formData.members.split(",");

    newFormData.append("admins", JSON.stringify(admins));
    newFormData.append("members", JSON.stringify(members));

    const dataObject = formDataToObject(newFormData);

    try {
      const validatedData = GroupSchema.parse(dataObject);
      const response = JSON.parse(await createGroup(validatedData));
      if (response.success) {
        setSubmitStatus("Success");
        setValidationErrors({});
        setTimeout(() => router.push(`/groups/${response.id}`), 500);
      }
    } catch (e) {
      if (e instanceof z.ZodError) {
        console.log(e.issues);

        const errors: Record<string, string> = {};

        e.issues.forEach((issue) => {
          const fieldName = issue.path[0];

          const errorMessage = issue.message;

          errors[fieldName] = errorMessage;
        });

        setValidationErrors(errors);

        setSubmitStatus("Error");
      }
    }
  };

  function formStatus() {
    switch (submitStatus) {
      case "":
        return null;
      case "Success":
        return "Successfully submitted form";
      case "Submitting":
        return "Submitting form...";
      default:
        return "Errors in form";
    }
  }

  const [userSearch, setUserSearch] = useState<string>("");
  const debouncedUserSearch = useDebounce(userSearch, 300);

  const [suggestedUsers, setSuggestedUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = JSON.parse(
        await getUsersBySimilarName(debouncedUserSearch)
      );
      setSuggestedUsers(response);
    };
    fetchUsers();
  }, [debouncedUserSearch]);

  const handleUserSelection = (user: User) => {
    setFormData((prevData) => ({
      ...prevData,
      admins: prevData.admins
        ? prevData.admins + `,${user.username}`
        : user.username,
    }));
    // Clear the user suggestions
    setSuggestedUsers([]);
  };

  return (
    <>
      <div className="flex max-w-[20.9375rem] xs:max-w-[30rem] sm:max-w-[38rem] md:max-w-[46rem]  flex-col gap-[1.25em] p-[1.25rem] bg-background dark:bg-dark3 lg:max-w-[55rem] w-full rounded-[1rem] mb-[13.44rem] lg:mb-[5.37rem] mt-[1.25rem] lg:mt-[1.88rem] sm">
        <div>
          <CoverImage setParentFormData={setFormData} />
        </div>
        <div>
          <GroupImage setParentFormData={setFormData} />
        </div>
        <form>
          <div className="flex flex-col gap-[.62rem]">
            <label className="text-secondary2 caption-semibold dark:text-background2">
              Group Name
            </label>
            <div>
              <input
                type="text"
                name="title"
                placeholder="Name..."
                value={formData.title}
                onChange={handleChange}
                className={`border-background2 dark:border-dark4 flex w-full min-w-[18.4375rem] max-w-[52.5rem] items-center rounded-[.5rem] border-[2px] px-[1.25rem] py-[.75rem] caption-regular text-secondary3 dark:bg-dark3 ${
                  validationErrors.title ? "border-red" : ""
                }`}
              />
              {validationErrors.title && (
                <p className="text-red text-xs-regular mb-[.62rem]">
                  {validationErrors.title}
                </p>
              )}
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
                className={`border-background2 dark:border-dark4 flex w-full min-w-[18.4375rem] max-w-[52.5rem] items-center rounded-[.5rem] border-[2px] px-[1.25rem] py-[.75rem] caption-regular text-secondary3 dark:bg-dark3 ${
                  validationErrors.description ? "border-red" : ""
                }`}
              />
              {validationErrors.description && (
                <p className="text-red text-xs-regular mb-[.62rem]">
                  {validationErrors.description}
                </p>
              )}
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
                onInput={(e) => {
                  setUserSearch(e.target.value);
                }}
                className={`border-background2 dark:border-dark4 flex w-full min-w-[18.4375rem] max-w-[52.5rem] items-center rounded-[.5rem] border-[2px] px-[1.25rem] py-[.75rem] caption-regular text-secondary3 dark:bg-dark3 ${
                  validationErrors.admins ? "border-red" : ""
                }`}
              />
              <div className="caption-regular mb-[.62rem] flex gap-[.62rem]">
                {suggestedUsers.map((user) => (
                  <div
                    key={user._id}
                    onClick={() => handleUserSelection(user)}
                    className="border w-fit"
                  >
                    {user.username}
                  </div>
                ))}
              </div>

              {validationErrors.admins && (
                <p className="text-red text-xs-regular mb-[.62rem]">
                  {validationErrors.admins}
                </p>
              )}
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
                className={`border-background2 dark:border-dark4 flex w-full min-w-[18.4375rem] max-w-[52.5rem] items-center rounded-[.5rem] border-[2px] px-[1.25rem] py-[.75rem] caption-regular text-secondary3 dark:bg-dark3 ${
                  validationErrors.members ? "border-red" : ""
                }`}
              />
              {validationErrors.members && (
                <p className="text-red text-xs-regular mb-[.62rem]">
                  {validationErrors.members}
                </p>
              )}
            </div>
          </div>
          <div className="flex gap-[1.25rem]">
            <button
              type="button"
              onClick={submitForm}
              className="flex w-[7.5rem] items-center justify-center gap-[0.625rem] rounded-[0.5rem] bg-blue px-[2.5rem] py-[0.625rem]"
            >
              <p className="body-semibold text-background">Create</p>
            </button>
            <button className="my-auto flex items-center">
              <p className="body-semibold  text-secondary3">Cancel</p>
            </button>
          </div>
          <p
            className={`text-xs-regular mt-[.1rem] ${
              submitStatus === "Success" ? "text-green" : "text-red"
            }`}
          >
            {formStatus()}
          </p>
        </form>
      </div>
    </>
  );
};

export default AddGroup;
