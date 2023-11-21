"use client";
import React, { useState } from "react";
import { Schema } from "mongoose";
import moment from "moment";

import FillIcon from "../icons/FillIcon";
import OutlineIcon from "../icons/OutlineIcon";
import { Button } from "../ui/Button";
import EditProfile from "./EditProfile";

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
  function monthsSinceJoined(joinedDate: Date) {
    return moment().diff(moment(joinedDate), "months");
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

  const onEdit = () => setIsProfileEdit(true);
  const onCancel = () => setIsProfileEdit(false);
  return (
    <>
      {isProfileEdit ? (
        <EditProfile onCancel={onCancel} />
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
