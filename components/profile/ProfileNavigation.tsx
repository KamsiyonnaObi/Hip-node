import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ProfileNavigation = () => {
  return (
    <Tabs defaultValue="posts" className="w-full">
      <TabsList className="h-[50px] w-full justify-between gap-x-5 overflow-hidden rounded-[14px] bg-background px-2.5 text-secondary3 hover:overflow-x-auto dark:bg-dark3 dark:text-background lg:h-20 lg:rounded-[20px] lg:px-[30px]">
        <TabsTrigger value="posts">Posts</TabsTrigger>
        <TabsTrigger value="meetups">Meetups</TabsTrigger>
        <TabsTrigger value="podcasts">Podcasts</TabsTrigger>
        <TabsTrigger value="interviews">Interviews</TabsTrigger>
        <TabsTrigger value="history">History</TabsTrigger>
      </TabsList>
      <TabsContent value="posts">View your Posts here.</TabsContent>
      <TabsContent value="meetups">View your Meetups here.</TabsContent>
      <TabsContent value="podcasts">View your Podcasts here.</TabsContent>
      <TabsContent value="interviews">View your Interviews here.</TabsContent>
      <TabsContent value="history">No recent views</TabsContent>
    </Tabs>
  );
};

export default ProfileNavigation;
