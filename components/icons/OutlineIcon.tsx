/* eslint-disable react/display-name */
import { ArrowLeft } from "./outlineIcons/ArrowLeft";
import { Arrow } from "./outlineIcons/Arrow";
import { BackArrow } from "./outlineIcons/BackArrow";
import { Bitcoin } from "./outlineIcons/Bitcoin";
import { Blogging } from "./outlineIcons/Blogging";
import { Bold } from "./outlineIcons/Bold";
import { Checkmark } from "./outlineIcons/Checkmark";
import { Close } from "./outlineIcons/Close";
import { Comment } from "./outlineIcons/Comment";
import { Design } from "./outlineIcons/Design";
import { Dev } from "./outlineIcons/Dev";
import { DownArrow } from "./outlineIcons/DownArrow";
import { Edit } from "./outlineIcons/Edit";
import { Expand } from "./outlineIcons/Expand";
import { Facebook } from "./outlineIcons/Facebook";
import { Follow } from "./outlineIcons/Follow";
import { Following } from "./outlineIcons/Following";
import { Headline } from "./outlineIcons/Headline";
import { Image1 } from "./outlineIcons/Image1";
import { Image2 } from "./outlineIcons/Image2";
import { Info } from "./outlineIcons/Info";
import { Instagram } from "./outlineIcons/Instagram";
import { Italic } from "./outlineIcons/Italic";
import { Left } from "./outlineIcons/Left";
import { LinkIcon } from "./outlineIcons/LinkIcon";
import { LinkedIn } from "./outlineIcons/LinkedIn";
import { Mention } from "./outlineIcons/Mention";
import { Middle } from "./outlineIcons/Middle";
import { More } from "./outlineIcons/More";
import { New } from "./outlineIcons/New";
import { New2 } from "./outlineIcons/New2";
import { Number } from "./outlineIcons/Number";
import { Point } from "./outlineIcons/Point";
import { Popular } from "./outlineIcons/Popular";
import { Post } from "./outlineIcons/Post";
import { Right } from "./outlineIcons/Right";
import { SearchIcon } from "./outlineIcons/SearchIcon";
import { Seo } from "./outlineIcons/Seo";
import { Share2 } from "./outlineIcons/Share2";
import { Strikethrough } from "./outlineIcons/Strikethrough";
import { Tutorial } from "./outlineIcons/Tutorial";
import { Twitter } from "./outlineIcons/Twitter";
import { Uncheck } from "./outlineIcons/Uncheck";
import { Underline } from "./outlineIcons/Underline";
import { Upload } from "./outlineIcons/Upload";
import { Vector } from "./outlineIcons/Vector";
import { View } from "./outlineIcons/View";
import { Voice } from "./outlineIcons/Voice";
import { Web } from "./outlineIcons/Web";
import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  className?: string;
}
const FillIcon = ({ children, className }: Props) => {
  const styles = className || "fill-secondary2 dark:fill-background2";
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      className={styles}
      xmlns="http://www.w3.org/2000/svg"
    >
      {children}
    </svg>
  );
};

FillIcon.ArrowLeft = ({ className }: Props) => (
  <FillIcon className={className}>
    <ArrowLeft />
  </FillIcon>
);

FillIcon.Arrow = ({ className }: Props) => (
  <FillIcon className={className}>
    <Arrow />
  </FillIcon>
);

FillIcon.BackArrow = ({ className }: Props) => (
  <FillIcon className={className}>
    <BackArrow />
  </FillIcon>
);

FillIcon.Bitcoin = ({ className }: Props) => (
  <FillIcon className={className}>
    <Bitcoin />
  </FillIcon>
);

FillIcon.Blogging = ({ className }: Props) => (
  <FillIcon className={className}>
    <Blogging />
  </FillIcon>
);

FillIcon.Bold = ({ className }: Props) => (
  <FillIcon className={className}>
    <Bold />
  </FillIcon>
);

FillIcon.Checkmark = ({ className }: Props) => (
  <FillIcon className={className}>
    <Checkmark />
  </FillIcon>
);

FillIcon.Close = ({ className }: Props) => (
  <FillIcon className={className}>
    <Close />
  </FillIcon>
);

FillIcon.Comment = ({ className }: Props) => (
  <FillIcon className={className}>
    <Comment />
  </FillIcon>
);

FillIcon.Design = ({ className }: Props) => (
  <FillIcon className={className}>
    <Design />
  </FillIcon>
);

FillIcon.Dev = ({ className }: Props) => (
  <FillIcon className={className}>
    <Dev />
  </FillIcon>
);

FillIcon.DownArrow = ({ className }: Props) => (
  <FillIcon className={className}>
    <DownArrow />
  </FillIcon>
);

FillIcon.Edit = ({ className }: Props) => (
  <FillIcon className={className}>
    <Edit />
  </FillIcon>
);

FillIcon.Expand = ({ className }: Props) => (
  <FillIcon className={className}>
    <Expand />
  </FillIcon>
);

FillIcon.Facebook = ({ className }: Props) => (
  <FillIcon className={className}>
    <Facebook />
  </FillIcon>
);

FillIcon.Follow = ({ className }: Props) => (
  <FillIcon className={className}>
    <Follow />
  </FillIcon>
);

FillIcon.Following = ({ className }: Props) => (
  <FillIcon className={className}>
    <Following />
  </FillIcon>
);

FillIcon.Headline = ({ className }: Props) => (
  <FillIcon className={className}>
    <Headline />
  </FillIcon>
);

FillIcon.Image1 = ({ className }: Props) => (
  <FillIcon className={className}>
    <Image1 />
  </FillIcon>
);

FillIcon.Image2 = ({ className }: Props) => (
  <FillIcon className={className}>
    <Image2 />
  </FillIcon>
);

FillIcon.Info = ({ className }: Props) => (
  <FillIcon className={className}>
    <Info />
  </FillIcon>
);

FillIcon.Instagram = ({ className }: Props) => (
  <FillIcon className={className}>
    <Instagram />
  </FillIcon>
);

FillIcon.Italic = ({ className }: Props) => (
  <FillIcon className={className}>
    <Italic />
  </FillIcon>
);

FillIcon.Left = ({ className }: Props) => (
  <FillIcon className={className}>
    <Left />
  </FillIcon>
);

FillIcon.LinkIcon = ({ className }: Props) => (
  <FillIcon className={className}>
    <LinkIcon />
  </FillIcon>
);

FillIcon.Linkedin = ({ className }: Props) => (
  <FillIcon className={className}>
    <LinkedIn />
  </FillIcon>
);

FillIcon.Mention = ({ className }: Props) => (
  <FillIcon className={className}>
    <Mention />
  </FillIcon>
);

FillIcon.Middle = ({ className }: Props) => (
  <FillIcon className={className}>
    <Middle />
  </FillIcon>
);

FillIcon.More = ({ className }: Props) => (
  <FillIcon className={className}>
    <More />
  </FillIcon>
);

FillIcon.New = ({ className }: Props) => (
  <FillIcon className={className}>
    <New />
  </FillIcon>
);

FillIcon.New2 = ({ className }: Props) => (
  <FillIcon className={className}>
    <New2 />
  </FillIcon>
);

FillIcon.Number = ({ className }: Props) => (
  <FillIcon className={className}>
    <Number />
  </FillIcon>
);

FillIcon.Point = ({ className }: Props) => (
  <FillIcon className={className}>
    <Point />
  </FillIcon>
);

FillIcon.Popular = ({ className }: Props) => (
  <FillIcon className={className}>
    <Popular />
  </FillIcon>
);

FillIcon.Post = ({ className }: Props) => (
  <FillIcon className={className}>
    <Post />
  </FillIcon>
);

FillIcon.Right = ({ className }: Props) => (
  <FillIcon className={className}>
    <Right />
  </FillIcon>
);

FillIcon.SearchIcon = ({ className }: Props) => (
  <FillIcon className={className}>
    <SearchIcon />
  </FillIcon>
);

FillIcon.Seo = ({ className }: Props) => (
  <FillIcon className={className}>
    <Seo />
  </FillIcon>
);

FillIcon.Share2 = ({ className }: Props) => (
  <FillIcon className={className}>
    <Share2 />
  </FillIcon>
);

FillIcon.Strikethrough = ({ className }: Props) => (
  <FillIcon className={className}>
    <Strikethrough />
  </FillIcon>
);

FillIcon.Tutorial = ({ className }: Props) => (
  <FillIcon className={className}>
    <Tutorial />
  </FillIcon>
);

FillIcon.Twitter = ({ className }: Props) => (
  <FillIcon className={className}>
    <Twitter />
  </FillIcon>
);

FillIcon.Uncheck = ({ className }: Props) => (
  <FillIcon className={className}>
    <Uncheck />
  </FillIcon>
);

FillIcon.Underline = ({ className }: Props) => (
  <FillIcon className={className}>
    <Underline />
  </FillIcon>
);

FillIcon.Upload = ({ className }: Props) => (
  <FillIcon className={className}>
    <Upload />
  </FillIcon>
);

FillIcon.Vector = ({ className }: Props) => (
  <FillIcon className={className}>
    <Vector />
  </FillIcon>
);

FillIcon.View = ({ className }: Props) => (
  <FillIcon className={className}>
    <View />
  </FillIcon>
);

FillIcon.Voice = ({ className }: Props) => (
  <FillIcon className={className}>
    <Voice />
  </FillIcon>
);

FillIcon.Web = ({ className }: Props) => (
  <FillIcon className={className}>
    <Web />
  </FillIcon>
);

export default FillIcon;
