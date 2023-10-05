import {
  Calendar,
  Home,
  Comment,
  Rocket,
  Message,
  Profile,
  Facebook,
  Google,
  Twitter,
  Send,
  Settings,
  Share,
  Thunderbolt,
  Heart,
  Feedback,
  Sun,
  Moon,
  Report,
  Reply,
  Post,
  Menu,
  Leave,
  Interviews,
  Inbox,
  Growing,
  Group,
  Notifications,
  Follow,
  Fire,
  Business,
  Podcast,
} from "./fillIcons";

import React from "react";

type FillIconProps = {
  children: React.ReactNode;
};

const FillIcon = ({ children }: FillIconProps) => (
  <svg
    className="mr-2 h-6 w-6 fill-black"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {children}
  </svg>
);

FillIcon.Calendar = () => (
  <FillIcon>
    <Calendar />
  </FillIcon>
);
FillIcon.Comment = () => (
  <FillIcon>
    <Comment />
  </FillIcon>
);
FillIcon.Rocket = () => (
  <FillIcon>
    <Rocket />
  </FillIcon>
);
FillIcon.Home = () => (
  <FillIcon>
    <Home />
  </FillIcon>
);
FillIcon.Message = () => (
  <FillIcon>
    <Message />
  </FillIcon>
);
FillIcon.Profile = () => (
  <FillIcon>
    <Profile />
  </FillIcon>
);
FillIcon.Facebook = () => (
  <FillIcon>
    <Facebook />
  </FillIcon>
);
FillIcon.Google = () => (
  <FillIcon>
    <Google />
  </FillIcon>
);
FillIcon.Twitter = () => (
  <FillIcon>
    <Twitter />
  </FillIcon>
);
FillIcon.Send = () => (
  <FillIcon>
    <Send />
  </FillIcon>
);
FillIcon.Settings = () => (
  <FillIcon>
    <Settings />
  </FillIcon>
);
FillIcon.Share = () => (
  <FillIcon>
    <Share />
  </FillIcon>
);
FillIcon.Thunderbolt = () => (
  <FillIcon>
    <Thunderbolt />
  </FillIcon>
);
FillIcon.Heart = () => (
  <FillIcon>
    <Heart />
  </FillIcon>
);
FillIcon.Feedback = () => (
  <FillIcon>
    <Feedback />
  </FillIcon>
);
FillIcon.Sun = () => (
  <FillIcon>
    <Sun />
  </FillIcon>
);
FillIcon.Moon = () => (
  <FillIcon>
    <Moon />
  </FillIcon>
);
FillIcon.Report = () => (
  <FillIcon>
    <Report />
  </FillIcon>
);
FillIcon.Reply = () => (
  <FillIcon>
    <Reply />
  </FillIcon>
);
FillIcon.Post = () => (
  <FillIcon>
    <Post />
  </FillIcon>
);
FillIcon.Menu = () => (
  <FillIcon>
    <Menu />
  </FillIcon>
);
FillIcon.Leave = () => (
  <FillIcon>
    <Leave />
  </FillIcon>
);
FillIcon.Interviews = () => (
  <FillIcon>
    <Interviews />
  </FillIcon>
);
FillIcon.Inbox = () => (
  <FillIcon>
    <Inbox />
  </FillIcon>
);
FillIcon.Growing = () => (
  <FillIcon>
    <Growing />
  </FillIcon>
);
FillIcon.Group = () => (
  <FillIcon>
    <Group />
  </FillIcon>
);
FillIcon.Notifications = () => (
  <FillIcon>
    <Notifications />
  </FillIcon>
);
FillIcon.Follow = () => (
  <FillIcon>
    <Follow />
  </FillIcon>
);
FillIcon.Fire = () => (
  <FillIcon>
    <Fire />
  </FillIcon>
);
FillIcon.Business = () => (
  <FillIcon>
    <Business />
  </FillIcon>
);
FillIcon.Podcast = () => (
  <FillIcon>
    <Podcast />
  </FillIcon>
);

export default FillIcon;
