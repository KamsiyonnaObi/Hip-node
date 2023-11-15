"use client";
import React, { useState } from "react";
import { Input } from "../form/Input";
import FillIcon from "../icons/FillIcon";
import OutlineIcon from "../icons/OutlineIcon";

const EditProfile = () => {
  const [formData, setFormData] = useState({
    username: "",
    job: "",
    web: "",
    twitter: "",
    facebook: "",
    instagram: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  return (
    <>
      <form>
        <h1 className="h3-semibold text-secondary2 dark:text-background2">
          Name
        </h1>

        <Input
          name="username"
          type="text"
          divClassName="bg-background rounded-lg px-5 py-[13px] md:bg-background2 md:dark:bg-dark2 dark:bg-dark3"
          className="w-full bg-transparent md:text-secondary2 md:placeholder:text-secondary2 md:dark:text-background2 "
          onChange={handleChange}
          value={formData.username}
        />
        <h1 className="h3-semibold text-secondary2 dark:text-background2">
          bio
        </h1>
        <textarea className="resize-none" />
        <div className="flex items-center">
          <FillIcon.Business />
          <Input
            name="job"
            type="text"
            divClassName="bg-background rounded-lg px-5 py-[13px] md:bg-background2 md:dark:bg-dark2 dark:bg-dark3"
            className="w-full bg-transparent md:text-secondary2 md:placeholder:text-secondary2 md:dark:text-background2 "
            onChange={handleChange}
            value={formData.job}
          />
        </div>
        <div className="flex items-center">
          <OutlineIcon.Web />
          <Input
            name="web"
            type="text"
            divClassName="bg-background rounded-lg px-5 py-[13px] md:bg-background2 md:dark:bg-dark2 dark:bg-dark3"
            className="w-full bg-transparent md:text-secondary2 md:placeholder:text-secondary2 md:dark:text-background2 "
            onChange={handleChange}
            value={formData.web}
          />
        </div>
        <div className="flex items-center">
          <OutlineIcon.Twitter />
          <Input
            name="twitter"
            type="text"
            divClassName="bg-background rounded-lg px-5 py-[13px] md:bg-background2 md:dark:bg-dark2 dark:bg-dark3"
            className="w-full bg-transparent md:text-secondary2 md:placeholder:text-secondary2 md:dark:text-background2 "
            onChange={handleChange}
            value={formData.twitter}
          />
        </div>
        <div className="flex items-center">
          <OutlineIcon.Facebook />
          <Input
            name="facebook"
            type="text"
            divClassName="bg-background rounded-lg px-5 py-[13px] md:bg-background2 md:dark:bg-dark2 dark:bg-dark3"
            className="w-full bg-transparent md:text-secondary2 md:placeholder:text-secondary2 md:dark:text-background2 "
            onChange={handleChange}
            value={formData.facebook}
          />
        </div>
        <div className="flex items-center">
          <OutlineIcon.Instagram />
          <Input
            name="instagram"
            type="text"
            divClassName="bg-background rounded-lg px-5 py-[13px] md:bg-background2 md:dark:bg-dark2 dark:bg-dark3"
            className="w-full bg-transparent md:text-secondary2 md:placeholder:text-secondary2 md:dark:text-background2 "
            onChange={handleChange}
            value={formData.instagram}
          />
        </div>
        <div className="flex gap-1 ">
          <button
            className="flex rounded-md bg-blue px-2 py-1 text-background"
            type="submit"
          >
            Save
          </button>
          <button
            className="flex rounded-md bg-blue10 px-2 py-1 text-red"
            type="submit"
          >
            Cancel
          </button>
        </div>
      </form>
    </>
  );
};

export default EditProfile;
