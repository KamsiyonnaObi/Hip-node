"use client";
import React, { useState } from "react";
import { userProfileData } from "@/types/component";
import OutlineIcon from "../icons/OutlineIcon";
import FillIcon from "../icons/FillIcon";
import { Button } from "../ui/Button";
import EditProfile from "./EditProfile";
import { ImageFallback as Image } from "../shared/ImageFallback";
import { getTimestamp } from "@/utils";
import { followAuthor } from "@/utils/actions/user.action";
import { profileData } from "@/constants/dummy";

type Props = {
  JSONProfileData: string;
  hasFollowed?: boolean;
  isFollow: boolean;
};
const ProfileDetails = ({ JSONProfileData, hasFollowed, isFollow }: Props) => {
  const {
    profileData,
    myProfile,
  }: { profileData: userProfileData; myProfile: boolean } =
    JSON.parse(JSONProfileData) || {};
  const followers = profileData?.followers;

  const [isProfileEdit, setIsProfileEdit] = useState(false);
  const [isFollowing, setIsFollowing] = useState(hasFollowed || false);

  const handleFollow = async () => {
    const followed = await followAuthor({
      followedUserId: profileData._id,
      hasFollowed: isFollowing,
      isFollow,
    });

    if (!followed) return;
    if (followed.status !== undefined) {
      setIsFollowing(followed.status);
    }
  };
  const onEdit = () => setIsProfileEdit(true);
  const onCancel = () => setIsProfileEdit(false);
  return (
    <>
      {isProfileEdit ? (
        <EditProfile
          profileData={profileData}
          onCancel={onCancel}
          isEdit={setIsProfileEdit}
        />
      ) : (
        <>
          <section className="flex-center w-full rounded-2xl bg-background shadow-lg dark:bg-dark3">
            <article className="flex-center w-full flex-col gap-5 rounded-2xl bg-background pb-10 dark:bg-dark3">
              <div className="flex w-full flex-col items-center">
                <div className="relative mb-[36px] h-[106px] w-full">
                  <Image
                    className="rounded-t-2xl object-fill"
                    src={profileData?.bannerImage}
                    alt="profile-banner"
                    fallback="/Profilebg.png"
                    fill
                  />
                </div>
                <div className="absolute mt-[3.33rem] h-24 w-24 items-center justify-center rounded-full border-4 border-dark3 bg-yellow30">
                  <Image
                    className="absolute my-auto rounded-full"
                    src={profileData?.profileImage}
                    fallback="/ExampleAvatar.png"
                    alt="profile"
                    fill
                  />
                </div>
              </div>
              <section className="flex flex-col items-center gap-5 px-5">
                <div className="flex flex-col items-center justify-center">
                  <p className="h1-semibold text-secondary2 dark:text-background2">
                    {profileData?.username}
                  </p>
                  <p className="display-regular text-secondary3">
                    {profileData?.occupation}
                  </p>
                </div>
                {!myProfile && (
                  <div className="flex gap-2.5">
                    {isFollowing ? (
                      <Button
                        className="display-semibold flex rounded-md px-[38.5px] py-1.5 text-background"
                        color="blackWhite"
                        onClick={handleFollow}
                      >
                        Following
                      </Button>
                    ) : (
                      <Button
                        className="display-semibold flex rounded-md bg-blue px-[38.5px] py-1.5 text-background"
                        color="blue"
                        onClick={handleFollow}
                      >
                        Follow
                      </Button>
                    )}

                    <Button className="flex items-center p-2" color="blackBlue">
                      <FillIcon.Message className="fill-blue" />
                    </Button>
                  </div>
                )}
                <div className="flex-center gap-3">
                  <p className="body-semibold text-secondary2 dark:text-background2">
                    {`${profileData?.followers.length} Followers`}
                  </p>
                  {/* <p className="body-semibold text-secondary2 dark:text-background2">{`${profileData?.points} Points`}</p> */}
                  <p className="body-semibold text-center text-secondary2 dark:text-background2">
                    {`Following ${profileData?.following.length} `}
                  </p>
                </div>

                <section className="flex max-h-[70px] w-[270px] flex-wrap justify-center gap-2.5 lg:w-[170px]">
                  {followers?.length > 0 &&
                    followers.slice(0, 7).map((follower: userProfileData) => (
                      <div key={follower._id} className="flex ">
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
                  Joined {getTimestamp(new Date(profileData?.createdAt))}
                </p>
                {myProfile && (
                  <Button
                    onClick={onEdit}
                    className="h3-semibold flex h-11 w-full items-center justify-center gap-2.5 rounded-md bg-blue text-background"
                  >
                    Edit Profile
                  </Button>
                )}
              </section>
            </article>
          </section>
        </>
      )}
    </>
  );
};

export default ProfileDetails;
