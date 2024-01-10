import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import RenderProfilePosts from "./RenderProfilePosts";

import RenderProfileMeetups from "./RenderProfileMeetups";
import RenderProfilePodcasts from "./RenderProfilePodcasts";
import RenderProfileInterviews from "./RenderProfileInterviews";
import UserHistory from "./UserHistory";

type Props = { JSONProfileData: string };
const ProfileNavigation = async ({ JSONProfileData }: Props) => {
  const { profileData } = JSON.parse(JSONProfileData) || {};

  const user = {
    userId: profileData?._id,
    username: profileData?.username,
    profileImage: profileData?.profileImage,
  };
  return (
    <Tabs defaultValue="posts" className="w-full gap-x-10 shadow-lg">
      <TabsList className="mb-5 h-[50px] w-full justify-between gap-x-5 overflow-hidden rounded-[14px] bg-background px-2.5 text-secondary3 hover:overflow-x-auto dark:bg-dark3 dark:text-background lg:h-20 lg:rounded-[20px] lg:px-[30px]">
        <TabsTrigger value="posts">Posts</TabsTrigger>
        <TabsTrigger value="meetups">Meetups</TabsTrigger>
        <TabsTrigger value="podcasts">Podcasts</TabsTrigger>
        <TabsTrigger value="interviews">Interviews</TabsTrigger>
        <TabsTrigger value="history">History</TabsTrigger>
      </TabsList>
      <TabsContent value="posts">
        <RenderProfilePosts JSONUser={JSON.stringify(user)} />
      </TabsContent>
      <TabsContent value="meetups">
        <RenderProfileMeetups userId={profileData?._id.toString()} />
      </TabsContent>
      <TabsContent value="podcasts">
        <RenderProfilePodcasts userId={profileData?._id.toString()} />
      </TabsContent>
      <TabsContent value="interviews">
        <RenderProfileInterviews JSONUser={JSON.stringify(user)} />
      </TabsContent>
      <TabsContent value="history">
        <UserHistory userId={profileData?._id.toString()} />
      </TabsContent>
    </Tabs>
  );
};

export default ProfileNavigation;
