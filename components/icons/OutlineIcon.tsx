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
import { DownArrow2 } from "./outlineIcons/DownArrow2";
import { Edit } from "./outlineIcons/Edit";
import { Ellipse } from "./outlineIcons/Ellipse";
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
import { VerticalDots } from "./outlineIcons/VerticalDots";
import { View } from "./outlineIcons/View";
import { Voice } from "./outlineIcons/Voice";
import { Web } from "./outlineIcons/Web";
import { Like } from "./outlineIcons/Like";
import { RightArrow } from "./outlineIcons/RightArrow";
import { Send } from "./fillIcons";
import { ReactNode } from "react";
import { cn } from "@/utils";
import { Trash } from "./outlineIcons/Trash";
import { Copy } from "./outlineIcons/Copy";
import { Pin } from "./outlineIcons/Pin";
import { Play } from "./outlineIcons/Play";
import { Pause } from "./outlineIcons/Pause";
import { UpArrow } from "./outlineIcons/UpArrow";
import { Volume } from "./outlineIcons/Volume";
import { Content } from "./outlineIcons/Content";

interface Props {
  children?: ReactNode;
  className?: string;
}
const OutlineIcon = ({ children, className }: Props) => {
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

OutlineIcon.Content = ({ className }: Props) => {
  return (
    <svg
      viewBox="0 0 91 91"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <Content />
    </svg>
  );
};

OutlineIcon.Send = ({ className }: Props) => (
  <OutlineIcon className={className}>
    <Send />
  </OutlineIcon>
);

OutlineIcon.Volume = ({ className }: Props) => (
  <OutlineIcon className={className}>
    <Volume />
  </OutlineIcon>
);

OutlineIcon.UpArrow = ({ className }: Props) => (
  <OutlineIcon className={className}>
    <UpArrow />
  </OutlineIcon>
);

OutlineIcon.Play = ({ className }: Props) => (
  <OutlineIcon className={className}>
    <Play />
  </OutlineIcon>
);

OutlineIcon.Pause = ({ className }: Props) => (
  <OutlineIcon className={className}>
    <Pause />
  </OutlineIcon>
);

OutlineIcon.ArrowLeft = ({ className }: Props) => (
  <OutlineIcon className={className}>
    <ArrowLeft />
  </OutlineIcon>
);

OutlineIcon.Arrow = ({ className }: Props) => (
  <OutlineIcon className={className}>
    <Arrow />
  </OutlineIcon>
);

OutlineIcon.RightArrow = ({ className }: Props) => (
  <OutlineIcon
    className={cn("w-10 stroke-black dark:stroke-secondary3", className)}
  >
    <RightArrow />
  </OutlineIcon>
);

OutlineIcon.BackArrow = ({ className }: Props) => (
  <OutlineIcon className={className}>
    <BackArrow />
  </OutlineIcon>
);

OutlineIcon.Bitcoin = ({ className }: Props) => (
  <OutlineIcon className={className}>
    <Bitcoin />
  </OutlineIcon>
);

OutlineIcon.Blogging = ({ className }: Props) => (
  <OutlineIcon className={className}>
    <Blogging />
  </OutlineIcon>
);

OutlineIcon.Bold = ({ className }: Props) => (
  <OutlineIcon className={className}>
    <Bold />
  </OutlineIcon>
);

OutlineIcon.Checkmark = ({ className }: Props) => (
  <OutlineIcon className={className}>
    <Checkmark />
  </OutlineIcon>
);

OutlineIcon.Close = ({ className }: Props) => (
  <OutlineIcon className={className}>
    <Close />
  </OutlineIcon>
);

OutlineIcon.Comment = ({ className }: Props) => (
  <OutlineIcon className={className}>
    <Comment />
  </OutlineIcon>
);

OutlineIcon.Design = ({ className }: Props) => (
  <OutlineIcon className={className}>
    <Design />
  </OutlineIcon>
);

OutlineIcon.Dev = ({ className }: Props) => (
  <OutlineIcon className={className}>
    <Dev />
  </OutlineIcon>
);

OutlineIcon.DownArrow = ({ className }: Props) => (
  <OutlineIcon className={className}>
    <DownArrow />
  </OutlineIcon>
);

OutlineIcon.DownArrow2 = ({ className }: Props) => (
  <OutlineIcon className={className}>
    <DownArrow2 />
  </OutlineIcon>
);

OutlineIcon.Edit = ({ className }: Props) => (
  <OutlineIcon className={className}>
    <Edit />
  </OutlineIcon>
);

OutlineIcon.Ellipse = ({ className }: Props) => (
  <OutlineIcon className={className}>
    <Ellipse />
  </OutlineIcon>
);

OutlineIcon.Expand = ({ className }: Props) => (
  <OutlineIcon className={className}>
    <Expand />
  </OutlineIcon>
);

OutlineIcon.Facebook = ({ className }: Props) => (
  <OutlineIcon className={className}>
    <Facebook />
  </OutlineIcon>
);

OutlineIcon.Follow = ({ className }: Props) => (
  <OutlineIcon className={className}>
    <Follow />
  </OutlineIcon>
);

OutlineIcon.Following = ({ className }: Props) => (
  <OutlineIcon className={className}>
    <Following />
  </OutlineIcon>
);

OutlineIcon.Headline = ({ className }: Props) => (
  <OutlineIcon className={className}>
    <Headline />
  </OutlineIcon>
);

OutlineIcon.Image1 = ({ className }: Props) => (
  <OutlineIcon className={className}>
    <Image1 />
  </OutlineIcon>
);

OutlineIcon.Image2 = ({ className }: Props) => (
  <OutlineIcon className={className}>
    <Image2 />
  </OutlineIcon>
);

OutlineIcon.Info = ({ className }: Props) => (
  <OutlineIcon className={className}>
    <Info />
  </OutlineIcon>
);

OutlineIcon.Instagram = ({ className }: Props) => (
  <OutlineIcon className={className}>
    <Instagram />
  </OutlineIcon>
);

OutlineIcon.Italic = ({ className }: Props) => (
  <OutlineIcon className={className}>
    <Italic />
  </OutlineIcon>
);

OutlineIcon.Left = ({ className }: Props) => (
  <OutlineIcon className={className}>
    <Left />
  </OutlineIcon>
);

OutlineIcon.Like = ({ className }: Props) => (
  <OutlineIcon className={className}>
    <Like />
  </OutlineIcon>
);

OutlineIcon.LinkIcon = ({ className }: Props) => (
  <OutlineIcon className={className}>
    <LinkIcon />
  </OutlineIcon>
);

OutlineIcon.Linkedin = ({ className }: Props) => (
  <OutlineIcon className={className}>
    <LinkedIn />
  </OutlineIcon>
);

OutlineIcon.Mention = ({ className }: Props) => (
  <OutlineIcon className={className}>
    <Mention />
  </OutlineIcon>
);

OutlineIcon.Middle = ({ className }: Props) => (
  <OutlineIcon className={className}>
    <Middle />
  </OutlineIcon>
);

OutlineIcon.More = ({ className }: Props) => (
  <OutlineIcon className={className}>
    <More />
  </OutlineIcon>
);

OutlineIcon.New = ({
  className,
  textColor,
}: {
  className: string;
  textColor?: string;
}) => (
  <OutlineIcon className={className}>
    <New textColor={textColor || ""} />
  </OutlineIcon>
);

OutlineIcon.Number = ({ className }: Props) => (
  <OutlineIcon className={className}>
    <Number />
  </OutlineIcon>
);

OutlineIcon.Point = ({ className }: Props) => (
  <OutlineIcon className={className}>
    <Point />
  </OutlineIcon>
);

OutlineIcon.Popular = ({ className }: Props) => (
  <OutlineIcon className={className}>
    <Popular />
  </OutlineIcon>
);

OutlineIcon.Post = ({ className }: Props) => (
  <OutlineIcon className={className}>
    <Post />
  </OutlineIcon>
);

OutlineIcon.Pin = ({ className }: Props) => (
  <OutlineIcon className={className}>
    <Pin />
  </OutlineIcon>
);

OutlineIcon.Right = ({ className }: Props) => (
  <OutlineIcon className={className}>
    <Right />
  </OutlineIcon>
);

OutlineIcon.SearchIcon = ({ className }: Props) => (
  <OutlineIcon className={className}>
    <SearchIcon />
  </OutlineIcon>
);

OutlineIcon.Seo = ({ className }: Props) => (
  <OutlineIcon className={className}>
    <Seo />
  </OutlineIcon>
);

OutlineIcon.Share2 = ({ className }: Props) => (
  <OutlineIcon className={className}>
    <Share2 />
  </OutlineIcon>
);

OutlineIcon.Strikethrough = ({ className }: Props) => (
  <OutlineIcon className={className}>
    <Strikethrough />
  </OutlineIcon>
);

OutlineIcon.Trash = ({ className }: Props) => (
  <OutlineIcon className={className}>
    <Trash />
  </OutlineIcon>
);

OutlineIcon.Tutorial = ({ className }: Props) => (
  <OutlineIcon className={className}>
    <Tutorial />
  </OutlineIcon>
);

OutlineIcon.Twitter = ({ className }: Props) => (
  <OutlineIcon className={className}>
    <Twitter />
  </OutlineIcon>
);

OutlineIcon.Uncheck = ({ className }: Props) => (
  <OutlineIcon className={className}>
    <Uncheck />
  </OutlineIcon>
);

OutlineIcon.Underline = ({ className }: Props) => (
  <OutlineIcon className={className}>
    <Underline />
  </OutlineIcon>
);

OutlineIcon.Upload = ({ className }: Props) => (
  <OutlineIcon className={className}>
    <Upload />
  </OutlineIcon>
);

OutlineIcon.Vector = ({ className }: Props) => (
  <OutlineIcon className={className}>
    <Vector />
  </OutlineIcon>
);

OutlineIcon.VerticalDots = ({ className }: Props) => (
  <OutlineIcon className={className}>
    <VerticalDots />
  </OutlineIcon>
);

OutlineIcon.View = ({ className }: Props) => (
  <OutlineIcon className={className}>
    <View />
  </OutlineIcon>
);

OutlineIcon.Voice = ({ className }: Props) => (
  <OutlineIcon className={className}>
    <Voice />
  </OutlineIcon>
);

OutlineIcon.Web = ({ className }: Props) => (
  <OutlineIcon className={className}>
    <Web />
  </OutlineIcon>
);

OutlineIcon.Copy = ({ className }: Props) => (
  <OutlineIcon className={className}>
    <Copy />
  </OutlineIcon>
);

export default OutlineIcon;
