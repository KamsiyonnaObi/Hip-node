"use client";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { z } from "zod";
import CoverImage from "./CoverImage";
import GroupImage from "./GroupImage";
import { GroupSchema } from "@/lib/validations";
import { formDataToObject } from "@/utils";
import { updateGroup } from "@/utils/actions/group.action";
import UserSelect from "./UserSelect";
import Link from "next/link";

type Props = {
  title: string;
  description: string;
  admins: string;
  members: string;
  coverUrl: string;
  groupUrl: string;
  groupId: string;
};

const ChangeGroup: React.FC<Props> = ({
  title,
  description,
  admins,
  members,
  coverUrl,
  groupUrl,
  groupId,
}) => {
  const router = useRouter();

  const parsedAdmins = JSON.parse(admins);
  const parsedUsers = JSON.parse(members);

  const [formData, setFormData] = useState({
    title,
    description,
    admins: parsedAdmins || [],
    members: parsedUsers || [],
    coverUrl,
    groupUrl,
  });

  const [submitStatus, setSubmitStatus] = useState<string>("");

  const [validationErrors, setValidationErrors] = useState<
    Record<string, string>
  >({});

  const submitForm = async (e: any) => {
    e.preventDefault();

    setSubmitStatus("Submitting");

    const newFormData = new FormData();
    newFormData.append("title", formData.title);
    newFormData.append("coverUrl", formData.coverUrl);
    newFormData.append("groupUrl", formData.groupUrl);
    newFormData.append("description", formData.description);

    newFormData.append("admins", JSON.stringify(formData.admins));
    newFormData.append("members", JSON.stringify(formData.members));

    const dataObject = formDataToObject(newFormData);

    try {
      console.log("Sending data to updateGroup:", dataObject);

      const validatedData = GroupSchema.parse(dataObject);
      const response = await updateGroup(groupId, validatedData);

      if (response.success) {
        setSubmitStatus("Success");
        setValidationErrors({});
        setTimeout(() => router.push(`/groups/${groupId}`), 500);
      }
    } catch (e) {
      console.error("Error in form submission:", e);

      if (e instanceof z.ZodError) {
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

  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (divRef.current && !divRef.current.contains(event.target)) {
        setShowList(false);
      }
    };
    document.removeEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function setShowList(arg0: boolean) {
    throw new Error("Function not implemented.");
  }

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

  return (
    <main className="xs:max-w-[30rem] sm mb-[13.44rem] mt-[1.25rem] flex  w-full max-w-[20.9375rem] flex-col gap-[1.25em] rounded-[1rem] bg-background p-[1.25rem] shadow-lg dark:bg-dark3 sm:max-w-[38rem] md:max-w-[46rem] lg:mb-[5.37rem] lg:mt-[1.88rem] lg:max-w-[55rem]">
      <CoverImage
        setParentFormData={setFormData}
        defaultImage={formData.coverUrl}
      />
      <GroupImage
        setParentFormData={setFormData}
        defaultImage={formData.groupUrl}
      />
      <form>
        <section className="flex flex-col gap-[.62rem]">
          <label className="caption-semibold text-secondary2 dark:text-background2">
            Group Name
          </label>
          <input
            type="text"
            name="title"
            placeholder="Name..."
            value={formData.title}
            onChange={handleChange}
            className={`caption-regular flex w-full min-w-[18.4375rem] max-w-[52.5rem] items-center rounded-[.5rem] border-[2px] border-background2 px-[1.25rem] py-[.75rem] text-secondary3 dark:border-dark4 dark:bg-dark3 ${
              validationErrors.title ? "border-red" : ""
            }`}
          />
          {validationErrors.title && (
            <p className="text-sm-regular my-[.62rem] text-red">
              {validationErrors.title}
            </p>
          )}
        </section>
        <section className="my-[1.25rem] flex flex-col gap-[.62rem]">
          <label className="caption-semibold text-secondary2 dark:text-background2">
            Description
          </label>
          <textarea
            name="description"
            placeholder="Provide a short description..."
            value={formData.description}
            onChange={handleChange}
            className={`caption-regular flex w-full min-w-[18.4375rem] max-w-[52.5rem] items-center rounded-[.5rem] border-[2px] border-background2 px-[1.25rem] py-[.75rem] text-secondary3 dark:border-dark4 dark:bg-dark3 ${
              validationErrors.description ? "border-red" : ""
            }`}
          />
          {validationErrors.description && (
            <p className="text-sm-regular my-[.62rem] text-red">
              {validationErrors.description}
            </p>
          )}
        </section>
        <section className="flex flex-col gap-[.62rem]">
          <label className="caption-semibold text-secondary2 dark:text-background2">
            Add admins
          </label>
          <UserSelect
            setter={setFormData}
            initialUserArray={parsedAdmins}
            formKey="admins"
          />
          {validationErrors.admins && (
            <p className="text-sm-regular my-[.62rem] text-red">
              {validationErrors.admins}
            </p>
          )}
        </section>
        <section className="my-[1.25rem] flex flex-col gap-[.62rem]">
          <label className="caption-semibold text-secondary2 dark:text-background2">
            Add members
          </label>
          <UserSelect
            setter={setFormData}
            initialUserArray={parsedUsers}
            formKey="members"
          />
          {validationErrors.members && (
            <p className="text-sm-regular my-[.62rem] text-red">
              {validationErrors.members}
            </p>
          )}
        </section>
        <section className="flex gap-[1.25rem]">
          <button
            type="button"
            onClick={submitForm}
            className="body-semibold flex w-[7.5rem] items-center justify-center gap-[0.625rem] rounded-[0.5rem] bg-blue px-[2.5rem] py-[0.625rem] text-background"
          >
            Update
          </button>
          <Link href={`/groups/${groupId}`} className="my-auto">
            <button className="body-semibold my-auto flex items-center  text-secondary3">
              Cancel
            </button>
          </Link>
        </section>
        <p
          className={`text-sm-regular mt-[.1rem] ${
            submitStatus === "Success" ? "text-green" : "text-red"
          }`}
        >
          {formStatus()}
        </p>
      </form>
    </main>
  );
};

export default ChangeGroup;
