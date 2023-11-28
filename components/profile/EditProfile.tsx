"use client";
import React, { MouseEventHandler } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { profileSchema } from "@/lib/validations";
import { userProfileData } from "@/types/component";
import { updateProfileDetails } from "@/utils/actions/user.action";
import { Input } from "../form/Input";
import FillIcon from "../icons/FillIcon";
import OutlineIcon from "../icons/OutlineIcon";

export type ProfileSchema = z.infer<typeof profileSchema>;

interface EditProfileProps {
  JSONProfileData: string;
  onCancel: MouseEventHandler<HTMLButtonElement>;
  isEdit: any;
}
const EditProfile = ({
  JSONProfileData,
  onCancel,
  isEdit,
}: EditProfileProps) => {
  const profileData: userProfileData = JSON.parse(JSONProfileData);
  // extract register, handleSubmit from useForm
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileSchema>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      username: profileData.name,
      occupation: profileData.occupation,
      bio: profileData.bio,
      website: profileData.website,
      twitter: profileData.twitter,
      facebook: profileData.facebook,
      instagram: profileData.instagram,
    },
  });

  // create onSubmit function
  const onSubmit = (data: ProfileSchema) => {
    updateProfileDetails(profileData.id, data);
    isEdit(false);
  };
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full flex-col gap-4"
      >
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
            register={register}
          />
        </div>
        <div>
          <h1 className="body-semibold text-secondary2 dark:text-background2">
            Bio
          </h1>
          <textarea
            {...register("bio")}
            placeholder="Add a bio"
            className="body-regular w-full resize-none rounded-md border border-secondary2 bg-transparent px-3 py-2 "
          />
        </div>
        <article className="flex flex-col gap-2.5">
          <div className="flex h-7 w-full items-center gap-2">
            <FillIcon.Business className="h-6 w-5 stroke-secondary2 dark:stroke-background2" />
            <Input
              name="occupation"
              type="text"
              divClassName="bg-background w-full rounded-md px-3 py-[3px] border border-secondary2 md:bg-background2 md:dark:bg-dark2 dark:bg-dark3"
              className="caption-regular w-full bg-transparent md:text-secondary2 md:placeholder:text-secondary2 md:dark:text-background2 "
              placeholder="Occupation"
              register={register}
            />
          </div>
          <div className="flex h-7 w-full items-center gap-2">
            <OutlineIcon.Web />
            <Input
              name="website"
              type="text"
              divClassName="bg-background w-full rounded-md px-3 py-[3px] border border-secondary2 md:bg-background2 md:dark:bg-dark2 dark:bg-dark3"
              className="caption-regular w-full bg-transparent md:text-secondary2 md:placeholder:text-secondary2 md:dark:text-background2 "
              placeholder="Website"
              register={register}
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
              register={register}
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
              register={register}
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
              register={register}
            />
          </div>
          <div>
            {errors.username && (
              <p className="caption-regular text-red">
                {errors.username.message}
              </p>
            )}
            {errors.website && (
              <p className="caption-regular text-red">
                {errors.website.message}
              </p>
            )}
            {errors.bio && (
              <p className="caption-regular text-red">{errors.bio.message}</p>
            )}
            {errors.occupation && (
              <p className="caption-regular text-red">
                {errors.occupation.message}
              </p>
            )}
            {errors.facebook && (
              <p className="caption-regular text-red">
                {errors.facebook.message}
              </p>
            )}
            {errors.instagram && (
              <p className="caption-regular text-red">
                {errors.instagram.message}
              </p>
            )}
            {errors.twitter && (
              <p className="caption-regular text-red">
                {errors.twitter.message}
              </p>
            )}
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
            type="button"
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
