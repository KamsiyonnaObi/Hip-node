import React from "react";
import { ImageFallback as Image } from "@/components/shared/ImageFallback";
import OutlineIcon from "../icons/OutlineIcon";
import Html from "../shared/html";

interface Props {
  type: string;
  avatar: string;
  name: string;
  comment?: string;
  title: string;
  postedAt: string;
  read: boolean;
}

const NotifCard = ({
  type,
  avatar,
  name,
  comment,
  title,
  postedAt,
  read,
}: Props) => {
  return (
    <article className="flex w-[295px] flex-row gap-5 text-secondary3 md:w-[529px]">
      <div className="relative flex h-[50px] w-[50px] items-center justify-center md:h-[60px] md:w-[60px]">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary5 dark:bg-secondary6 md:h-[50px] md:w-[50px]">
          <Image
            src={avatar}
            alt="avatar"
            width={50}
            height={50}
            className="rounded-full"
          />
        </div>
        <div className="absolute left-6 top-6 h-[26px] w-[26px] rounded-full bg-background2 dark:bg-dark3 md:left-8 md:top-8 md:h-8 md:w-8">
          <div className="mx-auto mt-[5px] flex h-4 w-4 flex-col items-center justify-center md:mt-[6px]  md:h-5 md:w-5 ">
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
        <h3 className="body-semibold md:h2-bold">
          {name}{" "}
          {type === "comment" && (
            <span className="caption-semibold md:body-semibold">
              commented on your post
            </span>
          )}
          {type === "reaction" && (
            <span className="caption-semibold md:body-semibold">
              liked your post
            </span>
          )}
          {type === "meetup" && (
            <span className="caption-semibold md:body-semibold">
              published a meetup
            </span>
          )}
          {type === "mention" && (
            <span className="caption-semibold md:body-semibold">
              mentioned you
            </span>
          )}
        </h3>
        <div className="flex flex-col gap-2">
          {type === "comment" && (
            <div className="w-[225px] gap-2.5 rounded-[4px] bg-background2 p-[14px] dark:bg-dark3 md:w-[449px]">
              <div className="caption-regular md:display-regular">
                &quot;
                <Html htmltext={comment || "No Comment"} />
                &quot;
              </div>
            </div>
          )}
          <div className="flex flex-col gap-1">
            <h3
              className={`h3-semibold body-semibold ${
                read ? "text-secondary3" : "text-red80"
              }`}
            >
              <Html htmltext={title} />
            </h3>
            <p className="text-sm-regular md:body-regular">{postedAt}</p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default NotifCard;
