"use client";
import React, { useState } from "react";
import { Schema } from "mongoose";

import { Input } from "../form/Input";
import FillIcon from "../icons/FillIcon";
import OutlineIcon from "../icons/OutlineIcon";
import { Button } from "../ui/Button";

interface userProfileData {
  id: string;
  name: string;
  email: string;
  profileImage: string;
  job: string;
  followers: Schema.Types.ObjectId[];
  following: Schema.Types.ObjectId[];
  points: number;
  bio: string;
}

type Props = { profileData: userProfileData | null };
const ProfileDetails = ({ profileData }: Props) => {
  const [isProfileEdit, setIsProfileEdit] = useState(false);

  // format timestamp to months
  function monthsSinceJoined(joinedDate: Date): number {
    const today = new Date();
    const joined = new Date(joinedDate);
    const todayMonth = today.getMonth();
    const joinedMonth = joined.getMonth();
    const months =
      (today.getFullYear() - joined.getFullYear()) * 12 +
      todayMonth -
      joinedMonth;
    return Math.abs(months);
  }

  // Use dummy data for remaining user data
  const dummyProfileData = {
    imgUrl: "/ExampleAvatar.png",
    profileUrl: "/",
    joinedDate: "2-28-2023",
    points: 501,
    bio: "Hey there... I'm AR Jakir! I'm here to learn from and support the other members of this community!",
    website: "www.uikit.to",
  };

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

  function onEdit() {
    setIsProfileEdit(true);
  }
  function onCancel() {
    setIsProfileEdit(false);
  }
  return (
    <>
      {isProfileEdit ? (
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
                className="resize-none body-regular w-full rounded-md border border-secondary2 bg-transparent px-3 py-2 "
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
      ) : (
        <>
          <div className="flex flex-col items-center justify-center">
            <p className="h1-semibold text-secondary2 dark:text-background2">
              {profileData?.name}
            </p>
            <p className="display-regular text-secondary3">
              {profileData?.job}
            </p>
          </div>
          <div className="flex gap-2.5">
            <Button
              className="display-semibold flex rounded-md bg-blue px-[38.5px] py-1.5 text-background"
              color="blue"
            >
              Follow
            </Button>
            <Button className="flex items-center p-2" color="blackBlue">
              <FillIcon.Message className="fill-blue" />
            </Button>
          </div>
          <div className="flex-center gap-3">
            <p className="body-semibold text-secondary2 dark:text-background2">
              {`${profileData?.followers.length} Followers`}
            </p>
            <p className="body-semibold text-secondary2 dark:text-background2">{`${dummyProfileData.points} Points`}</p>
          </div>
          <div className="flex flex-col gap-[15px]">
            <p className="body-semibold text-center text-secondary2 dark:text-background2">
              Following 47
            </p>
            <div className="flex flex-wrap gap-2.5">
              <div className="h-[30px] w-[30px] rounded-full bg-secondary6"></div>
              <div className="h-[30px] w-[30px] rounded-full bg-secondary6"></div>
              <div className="h-[30px] w-[30px] rounded-full bg-secondary6"></div>
              <div className="h-[30px] w-[30px] rounded-full bg-secondary6"></div>
              <div className="h-[30px] w-[30px] rounded-full bg-secondary6"></div>
            </div>
          </div>
          <div>
            <p className="body-semibold text-center text-secondary3">
              {dummyProfileData?.bio}
            </p>
          </div>
          <div className="flex gap-5">
            <div className="flex gap-2.5">
              <OutlineIcon.Web />
              <p className="body-semibold text-secondary2 dark:text-background2">
                {dummyProfileData.website}
              </p>
            </div>

            {/* display socials based on user's profile */}
            <div className="flex gap-5">
              <OutlineIcon.Twitter className="fill-secondary4 dark:fill-secondary6" />
              <OutlineIcon.Facebook className="fill-secondary4 dark:fill-secondary6" />
              <OutlineIcon.Instagram className="fill-secondary4 dark:fill-secondary6" />
            </div>
          </div>
          <div className="h-[1px] w-[170px] bg-secondary6 dark:bg-secondary3"></div>
          <p className="text-secondary3">
            Joined {monthsSinceJoined(new Date(dummyProfileData.joinedDate))}{" "}
            months ago
          </p>
          <Button
            onClick={onEdit}
            className="h3-semibold flex h-11 w-full items-center justify-center gap-2.5 rounded-md bg-blue text-background"
          >
            Edit Profile
          </Button>
        </>
      )}
    </>
  );
};

export default ProfileDetails;
