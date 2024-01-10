"use client";
import React, { MouseEventHandler } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import * as z from "zod";

import { profileSchema } from "@/lib/validations";
import { userProfileData } from "@/types/component";
import { updateProfileDetails } from "@/utils/actions/user.action";
import { ImageFallback as Image } from "../shared/ImageFallback";
import { Input } from "../form/Input";
import FillIcon from "../icons/FillIcon";
import OutlineIcon from "../icons/OutlineIcon";
import ProfileImage from "./ProfileImage";

export type ProfileSchema = z.infer<typeof profileSchema>;

interface EditProfileProps {
  profileData: userProfileData;
  onCancel: MouseEventHandler<HTMLButtonElement>;
  isEdit: any;
}
const EditProfile = ({ profileData, onCancel, isEdit }: EditProfileProps) => {
  const [imageUrl, setImageUrl] = React.useState(
    profileData.profileImage || ""
  );
  const [bannerImageUrl, setBannerImageUrl] = React.useState(
    profileData.bannerImage || ""
  );

  // extract register, handleSubmit from useForm
  const {
    register,
    handleSubmit,
    setError,
    setValue,
    formState: { errors },
  } = useForm<ProfileSchema>({
    resolver: zodResolver(profileSchema),
    defaultValues: profileData,
  });

  // create onSubmit function
  const onSubmit = async (data: ProfileSchema) => {
    const res = await updateProfileDetails(profileData._id, data);
    if (res === "DuplicateKey") {
      setError("username", {
        type: "manual",
        message: "Username already exists. Choose a different one.",
      });

      return;
    }
    window.location.reload();
    isEdit(false);
  };

  return (
    <>
      <section className="flex-center w-full rounded-2xl bg-background shadow-lg dark:bg-dark3">
        <article className="flex-center w-full flex-col gap-5 rounded-2xl bg-background pb-10 dark:bg-dark3">
          <div className="flex w-full flex-col items-center">
            <div className="relative mb-[36px] h-[106px] w-full">
              <Image
                className="rounded-t-2xl object-fill"
                src={bannerImageUrl}
                alt="profile-banner"
                fallback="/Profilebg.png"
                fill
              />
              <div className="absolute left-[86%] top-[82%]">
                <ProfileImage
                  setImageUrl={setBannerImageUrl}
                  setParentFormData={setValue as any}
                  imgPropName="bannerImage"
                />
              </div>
            </div>
            <div className="absolute mt-[3.33rem] h-24 w-24 items-center justify-center rounded-full border-4 border-dark3 bg-yellow30">
              <Image
                className="absolute my-auto rounded-full"
                src={imageUrl}
                fallback="/ExampleAvatar.png"
                alt="profile"
                fill
              />
              {/* Pass function to set new profile picture and set image */}
              <div className="absolute left-[55%] top-[75%]">
                <ProfileImage
                  setImageUrl={setImageUrl}
                  setParentFormData={setValue as any}
                  imgPropName="profileImage"
                />
              </div>
            </div>
          </div>
          <section className="flex w-full flex-col items-center gap-5 px-5">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex w-full flex-col gap-4"
            >
              <div>
                <h1 className="body-semibold text-secondary2 dark:text-background2">
                  Name
                </h1>
                {errors.username && (
                  <p className="caption-regular text-red">
                    {errors.username.message}
                  </p>
                )}
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
                  {errors.website && (
                    <p className="caption-regular text-red">
                      {errors.website.message}
                    </p>
                  )}
                  {errors.bio && (
                    <p className="caption-regular text-red">
                      {errors.bio.message}
                    </p>
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
          </section>
        </article>
      </section>
    </>
  );
};

export default EditProfile;
