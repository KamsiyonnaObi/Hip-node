"use client";
import ActiveMembers from "@/components/group/ActiveMembers";
import Admin from "@/components/group/Admin";
import Frame from "@/components/group/Frame";
import RecentMedia from "@/components/group/RecentMedia";
import React from "react";

export default function Home() {
  return (
    <div className="mx-auto flex bg-background2">
      <div className="flex flex-col">
        <ActiveMembers />
        <Admin />
        <Frame />
        <RecentMedia />
      </div>
    </div>
  );
}
