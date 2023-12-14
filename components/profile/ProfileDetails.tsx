"use client";
import React, { useState } from "react";
import moment from "moment";

import { userProfileData } from "@/types/component";
import FillIcon from "../icons/FillIcon";
import OutlineIcon from "../icons/OutlineIcon";
import { Button } from "../ui/Button";
import EditProfile from "./EditProfile";

type Props = { JSONProfileData: string };
const ProfileDetails = ({ JSONProfileData }: Props) => {
  const profileData: userProfileData = JSON.parse(JSONProfileData);

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
  };

  const onEdit = () => setIsProfileEdit(true);
  const onCancel = () => setIsProfileEdit(false);
  return (
    <>
      {isProfileEdit ? (
        <EditProfile
          JSONProfileData={JSONProfileData}
          onCancel={onCancel}
          isEdit={setIsProfileEdit}
        />
      ) : (
        <>
          <div className="flex flex-col items-center justify-center">
            <p className="h1-semibold text-secondary2 dark:text-background2">
              {profileData?.name}
            </p>
            <p className="display-regular text-secondary3">
              {profileData?.occupation}
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
            <p className="body-semibold text-secondary2 dark:text-background2">{`${profileData?.points} Points`}</p>
          </div>
          <div className="flex flex-col gap-[15px]">
            <p className="body-semibold text-center text-secondary2 dark:text-background2">
              {`Following ${profileData?.following.length} `}
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
              {profileData?.bio}
            </p>
          </div>
          <div className="flex gap-5">
            {profileData?.website && (
              <>
                <a href={profileData.website} target="_blank">
                  <div className="flex gap-2.5">
                    <OutlineIcon.Web />
                  </div>
                </a>
              </>
            )}

            {/* display socials based on user's profile */}
            <div className="flex gap-5">
              {profileData?.twitter && (
                <a href={profileData.twitter} target="_blank">
                  <OutlineIcon.Twitter className="fill-secondary4 dark:fill-secondary6" />
                </a>
              )}
              {profileData?.facebook && (
                <a href={profileData.facebook} target="_blank">
                  <OutlineIcon.Facebook className="fill-secondary4 dark:fill-secondary6" />
                </a>
              )}
              {profileData?.instagram && (
                <a href={profileData.instagram} target="_blank">
                  <OutlineIcon.Instagram className="fill-secondary4 dark:fill-secondary6" />
                </a>
              )}
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
