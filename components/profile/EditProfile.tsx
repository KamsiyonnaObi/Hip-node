"use client";
import React, { MouseEventHandler, useState } from "react";
import { Input } from "../form/Input";
import FillIcon from "../icons/FillIcon";
import OutlineIcon from "../icons/OutlineIcon";

const EditProfile = ({
  onCancel,
}: {
  onCancel: MouseEventHandler<HTMLButtonElement>;
}) => {
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
      <form className="flex w-full flex-col gap-4">
        <div>
          <h1 className="body-semibold text-secondary2 dark:text-background2">
            Name
          </h1>

          <Input
            name="username"
            type="text"
            divClassName="bg-background rounded-md px-3 py-[5px] border border-secondary2 md:bg-background2 md:dark:bg-dark2 dark:bg-dark3"
            className="body-regular w-full bg-transparent md:text-secondary2 md:placeholder:text-secondary2 md:dark:text-background2 "
            placeholder="Name"
            onChange={handleChange}
            value={formData.username}
          />
        </div>
        <div>
          <h1 className="body-semibold text-secondary2 dark:text-background2">
            Bio
          </h1>
          <textarea
            placeholder="Add a bio"
            className="body-regular w-full resize-none rounded-md border border-secondary2 bg-transparent px-3 py-2 "
          />
        </div>
        <article className="flex flex-col gap-2.5">
          <div className="flex h-7 w-full items-center gap-2">
            <FillIcon.Business className="h-6 w-5 stroke-secondary2 dark:stroke-background2" />
            <Input
              name="job"
              type="text"
              divClassName="bg-background w-full rounded-md px-3 py-[3px] border border-secondary2 md:bg-background2 md:dark:bg-dark2 dark:bg-dark3"
              className="caption-regular w-full bg-transparent md:text-secondary2 md:placeholder:text-secondary2 md:dark:text-background2 "
              placeholder="Occupation"
              onChange={handleChange}
              value={formData.job}
            />
          </div>
          <div className="flex h-7 w-full items-center gap-2">
            <OutlineIcon.Web />
            <Input
              name="web"
              type="text"
              divClassName="bg-background w-full rounded-md px-3 py-[3px] border border-secondary2 md:bg-background2 md:dark:bg-dark2 dark:bg-dark3"
              className="caption-regular w-full bg-transparent md:text-secondary2 md:placeholder:text-secondary2 md:dark:text-background2 "
              placeholder="Website"
              onChange={handleChange}
              value={formData.web}
            />
          </div>
          <div className="flex h-7 w-full items-center gap-2">
            <OutlineIcon.Twitter />
            <Input
              name="twitter"
              type="text"
              divClassName="bg-background w-full rounded-md px-3 py-[3px] border border-secondary2 md:bg-background2 md:dark:bg-dark2 dark:bg-dark3"
              className="caption-regular w-full bg-transparent md:text-secondary2 md:placeholder:text-secondary2 md:dark:text-background2 "
              placeholder="Link to social profile"
              onChange={handleChange}
              value={formData.twitter}
            />
          </div>
          <div className="flex h-7 w-full items-center gap-2">
            <OutlineIcon.Facebook />
            <Input
              name="facebook"
              type="text"
              divClassName="bg-background w-full rounded-md px-3 py-[3px] border border-secondary2 md:bg-background2 md:dark:bg-dark2 dark:bg-dark3"
              className="caption-regular w-full bg-transparent md:text-secondary2 md:placeholder:text-secondary2 md:dark:text-background2 "
              placeholder="Link to social profile"
              onChange={handleChange}
              value={formData.facebook}
            />
          </div>
          <div className="flex h-7 w-full items-center gap-2">
            <OutlineIcon.Instagram />
            <Input
              name="instagram"
              type="text"
              divClassName="bg-background w-full rounded-md px-3 py-[3px] border border-secondary2 md:bg-background2 md:dark:bg-dark2 dark:bg-dark3"
              className="caption-regular w-full bg-transparent md:text-secondary2 md:placeholder:text-secondary2 md:dark:text-background2 "
              placeholder="Link to social profile"
              onChange={handleChange}
              value={formData.instagram}
            />
          </div>
        </article>
        <div className="flex gap-1 ">
          <button
            className="caption-semibold flex rounded-md bg-blue px-2 py-1 text-background"
            type="submit"
          >
            Save
          </button>
          <button
            type="submit"
            onClick={onCancel}
            className="caption-semibold flex rounded-md bg-blue10 px-2 py-1 text-red dark:bg-dark4"
          >
            Cancel
          </button>
        </div>
      </form>
    </>
  );
};

export default EditProfile;
