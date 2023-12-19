"use client";
import React, { useState } from "react";
import { userProfileData } from "@/types/component";
import { Button } from "../ui/Button";
import EditProfile from "./EditProfile";
import { ImageFallback as Image } from "../shared/ImageFallback";
import OutlineIcon from "../icons/OutlineIcon";
import { getTimestamp } from "@/utils";

type Props = { JSONProfileData: string };
const ProfileDetails = ({ JSONProfileData }: Props) => {
  const profileData: userProfileData = JSON.parse(JSONProfileData);
  const followers = profileData?.followers;

  const [isProfileEdit, setIsProfileEdit] = useState(false);

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
          <section className="flex max-h-[70px] w-[270px] flex-wrap justify-center gap-2.5 lg:w-[170px]">
            {followers.length > 0 &&
              followers.slice(0, 7).map((follower: userProfileData) => (
                <div key={follower._id} className="flex">
                  <div className="relative flex h-[30px] w-[30px] items-center justify-center rounded-full bg-secondary6">
                    <Image
                      className="rounded-full"
                      src={follower.profileImage}
                      alt={follower.username}
                      fallback="/ExampleAvatar.png"
                      fill
                    />
                  </div>
                </div>
              ))}
          </section>
          <div>
            <p className="body-semibold text-center text-secondary3">
              {profileData?.bio}
            </p>
          </div>
          <section className="flex gap-5">
            {profileData?.website && (
              <a href={profileData.website} target="_blank">
                <div className="flex gap-2.5">
                  <OutlineIcon.Web />
                </div>
              </a>
            )}
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
          </section>
          <div className="h-[1px] w-[170px] bg-secondary6 dark:bg-secondary3"></div>
          <p className="text-secondary3">
            Joined {getTimestamp(new Date(profileData?.createdAt))}
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
