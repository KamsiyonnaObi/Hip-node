import {
  Calendar,
  Home,
  Comment,
  Rocket,
  Message,
  Profile,
  Facebook,
  GitHub,
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
  Grid,
  User,
} from "./fillIcons";

import React from "react";
import { Emoji } from "./fillIcons/Emoji";

interface FillIconProps {
  children?: React.ReactNode;
  className?: string;
}

const FillIcon = ({ children, className }: FillIconProps) => {
  const styles = className || "fill-secondary6 dark:fill-background2 w-6 h-6";
  return (
    <svg
      width="20"
      height="20"
      className={styles}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {children}
    </svg>
  );
};

const FillIconFit = ({ children, className }: FillIconProps) => {
  const styles = className || "fill-secondary6 dark:fill-background2 w-4 h-4";
  return (
    <svg className={styles} xmlns="http://www.w3.org/2000/svg">
      {children}
    </svg>
  );
};

FillIcon.User = ({ className }: FillIconProps) => (
  <FillIconFit className={className}>
    <User />
  </FillIconFit>
);
FillIcon.Grid = ({ className }: FillIconProps) => (
  <FillIconFit className={className}>
    <Grid />
  </FillIconFit>
);
FillIcon.Calendar = ({ className }: FillIconProps) => (
  <FillIcon className={className}>
    <Calendar />
  </FillIcon>
);
FillIcon.Comment = ({ className }: FillIconProps) => (
  <FillIcon className={className}>
    <Comment />
  </FillIcon>
);
FillIcon.Rocket = ({ className }: FillIconProps) => (
  <FillIcon className={className}>
    <Rocket />
  </FillIcon>
);
FillIcon.Home = ({ className }: FillIconProps) => (
  <FillIcon className={className}>
    <Home />
  </FillIcon>
);
FillIcon.Message = ({ className }: FillIconProps) => (
  <FillIcon className={className}>
    <Message />
  </FillIcon>
);
FillIcon.Profile = ({ className }: FillIconProps) => (
  <FillIcon className={className}>
    <Profile />
  </FillIcon>
);
FillIcon.Facebook = ({ className }: FillIconProps) => (
  <FillIcon className={className}>
    <Facebook />
  </FillIcon>
);
FillIcon.GitHub = ({ className }: FillIconProps) => (
  <FillIcon className={className}>
    <GitHub />
  </FillIcon>
);
FillIcon.Google = ({ className }: FillIconProps) => (
  <FillIcon className={className}>
    <Google />
  </FillIcon>
);
FillIcon.Twitter = ({ className }: FillIconProps) => (
  <FillIcon className={className}>
    <Twitter />
  </FillIcon>
);
FillIcon.Send = ({ className }: FillIconProps) => (
  <FillIcon className={className}>
    <Send />
  </FillIcon>
);
FillIcon.Settings = ({ className }: FillIconProps) => (
  <FillIcon className={className}>
    <Settings />
  </FillIcon>
);
FillIcon.Share = ({ className }: FillIconProps) => (
  <FillIcon className={className}>
    <Share />
  </FillIcon>
);
FillIcon.Thunderbolt = ({ className }: FillIconProps) => (
  <FillIcon className={className}>
    <Thunderbolt />
  </FillIcon>
);
FillIcon.Heart = ({ className }: FillIconProps) => (
  <FillIcon className={className}>
    <Heart />
  </FillIcon>
);
FillIcon.Feedback = ({ className }: FillIconProps) => (
  <FillIcon className={className}>
    <Feedback />
  </FillIcon>
);
FillIcon.Sun = ({ className }: FillIconProps) => (
  <FillIcon className={className}>
    <Sun />
  </FillIcon>
);
FillIcon.Moon = ({ className }: FillIconProps) => (
  <FillIcon className={className}>
    <Moon />
  </FillIcon>
);
FillIcon.Report = ({ className }: FillIconProps) => (
  <FillIcon className={className}>
    <Report />
  </FillIcon>
);
FillIcon.Reply = ({ className }: FillIconProps) => (
  <FillIcon className={className}>
    <Reply />
  </FillIcon>
);
FillIcon.Post = ({ className }: FillIconProps) => (
  <FillIcon className={className}>
    <Post />
  </FillIcon>
);
FillIcon.Menu = ({ className }: FillIconProps) => (
  <FillIcon className={className}>
    <Menu />
  </FillIcon>
);
FillIcon.Leave = ({ className }: FillIconProps) => (
  <FillIcon className={className}>
    <Leave />
  </FillIcon>
);
FillIcon.Interviews = ({ className }: FillIconProps) => (
  <FillIcon className={className}>
    <Interviews />
  </FillIcon>
);
FillIcon.Inbox = ({ className }: FillIconProps) => (
  <FillIcon className={className}>
    <Inbox />
  </FillIcon>
);
FillIcon.Growing = ({ className }: FillIconProps) => (
  <FillIcon className={className}>
    <Growing />
  </FillIcon>
);
FillIcon.Group = ({ className }: FillIconProps) => (
  <FillIcon className={className}>
    <Group />
  </FillIcon>
);
FillIcon.Notifications = ({ className }: FillIconProps) => (
  <FillIcon className={className}>
    <Notifications />
  </FillIcon>
);
FillIcon.Follow = ({ className }: FillIconProps) => (
  <FillIcon className={className}>
    <Follow />
  </FillIcon>
);
FillIcon.Fire = ({ className }: FillIconProps) => (
  <FillIcon className={className}>
    <Fire />
  </FillIcon>
);
FillIcon.Business = ({ className }: FillIconProps) => (
  <FillIcon className={className}>
    <Business />
  </FillIcon>
);
FillIcon.Podcast = ({ className }: FillIconProps) => (
  <FillIcon className={className}>
    <Podcast />
  </FillIcon>
);
FillIcon.Emoji = ({ className }: FillIconProps) => (
  <FillIcon className={className}>
    <Emoji />
  </FillIcon>
);

export default FillIcon;
