import { StartInterview } from "@/components";

import ProfileNavigation from "@/components/profile/ProfileNavigation";
import ProfileDetails from "@/components/profile/ProfileDetails";

import { getCurrentUser, getUserProfile } from "@/utils/actions/user.action";
import Meetups from "@/components/home/Meetups";
import React from "react";
import { notFound } from "next/navigation";
import { Metadata, ResolvingMetadata } from "next";
import { isIdInFollowers } from "@/utils";
import { userProfileData } from "@/types/component";

export async function generateMetadata(
  { params }: { params: { id: string } },
  parent: ResolvingMetadata
): Promise<Metadata> {
  // grab which group id

  const currentUser = await getCurrentUser();
  return {
    title: currentUser?.username,
    keywords: currentUser?.businessType,
    description: currentUser?.username,
    openGraph: {
      images: [
        {
          url: currentUser?.profileImage as string,
          height: 630,
          alt: "Hipnode",
        },
      ],
    },
  };
}

export default async function Profile({ params }: { params: { id: string } }) {
  const profileData = await getUserProfile(params.id, ["followers"]);
  const currentUser = await getCurrentUser();

  // Error handling if profile does not exist
  if (!profileData?.profileData) {
    notFound();
  }

  // Check if current user is included in profile user's followers
  const hasFollowed = isIdInFollowers(
    currentUser?.id,
    profileData?.profileData?.followers as unknown as userProfileData[]
  );

  // Check if profile user is included in current user's following
  const isFollow = currentUser!.following?.includes(
    profileData.profileData._id
  );

  return (
    <main className="xs:max-w-[320px] mx-auto mt-5 grid w-full max-w-[335px] grid-cols-1 justify-center gap-[1.25rem] sm:max-w-[550px] md:max-w-[1100px] md:grid-cols-[30%_auto] lg:max-w-[1400px] lg:grid-cols-[20%_56%_auto]">
      {/* Profile */}
      <section className="md:col-start-1 md:row-span-2 md:row-start-1">
        <ProfileDetails
          JSONProfileData={JSON.stringify(profileData)}
          hasFollowed={hasFollowed}
          isFollow={isFollow}
        />
      </section>

      {/* Start Your interview */}
      <section className="md:col-start-2 md:row-start-1 lg:col-start-3 lg:h-[168px]">
        <StartInterview />
      </section>

      {/* Profile Navigation */}
      <section className=" flex flex-col gap-[1.25rem] md:col-start-2 md:row-span-2 md:h-0 lg:row-span-2 lg:row-start-1">
        <ProfileNavigation JSONProfileData={JSON.stringify(profileData)} />
      </section>

      {/* Meetups */}
      <section className="md:hidden">
        <Meetups />
      </section>

      {/* Performance */}
      <section className="hidden lg:col-start-3 lg:row-span-2 lg:flex">
        <div>
          {/* <div>Performance</div> */}
          <Meetups />
        </div>
      </section>
    </main>
  );
}
