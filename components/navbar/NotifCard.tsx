import React from "react";
import Image from "next/image";
import OutlineIcon from "../icons/OutlineIcon";

interface Props {
  type: string;
  avatar: string;
  name: string;
  comment?: string;
  title: string;
  postedAt: string;
}

const NotifCard = ({ type, avatar, name, comment, title, postedAt }: Props) => {
  return (
    <article className="flex w-[529px] flex-row gap-5 text-secondary3">
      <div className="relative flex h-[60px] w-[60px] items-center justify-center">
        <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-secondary5 dark:bg-secondary6">
          <Image src={avatar} alt="avatar" width={40} height={40} />
        </div>
        <div className="absolute left-8 top-8 h-8 w-8 rounded-full bg-background2 dark:bg-dark3">
          <div className="flex flex-col items-center justify-center">
            {type === "comment" && (
              <OutlineIcon.Comment className="fill-background2 stroke-secondary2 dark:fill-dark3 dark:stroke-background2" />
            )}
            {type === "reaction" && (
              <OutlineIcon.Like className="fill-secondary2 dark:fill-background2" />
            )}
            {type === "meetup" && (
              <OutlineIcon.Post className="fill-secondary2 dark:fill-background2" />
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="h2-bold">
          {name}{" "}
          {type === "comment" && (
            <span className="body-semibold">commented on your post</span>
          )}
          {type === "reaction" && (
            <span className="body-semibold">liked your post</span>
          )}
          {type === "meetup" && (
            <span className="body-semibold">published a meetup</span>
          )}
        </h3>
        <div className="flex flex-col gap-2">
          {type === "comment" && (
            <div className="w-[449px] gap-2.5 rounded-[4px] bg-background2 p-[14px] dark:bg-dark3">
              <p className="display-regular">&quot;{comment}&quot;</p>
            </div>
          )}
          <div className="flex flex-col gap-1">
            <h3 className="h3-semibold text-red80">{title}</h3>
            <p className="body-regular">{postedAt}</p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default NotifCard;
