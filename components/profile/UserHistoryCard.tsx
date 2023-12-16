import React from "react";
import { FormatDate } from "@/lib/formatDate";

interface Props {
  username: string;
  type: string;
  postedAt: Date;
  avatar?: string;
  comment?: string;
  title?: string;
}

const UserHistoryCard = ({
  type,
  avatar,
  username,
  comment,
  title,
  postedAt,
}: Props) => {
  return (
    <>
      <article className=" flex justify-between gap-5">
        <div>
          {type === "comment" && (
            <p className="caption-semibold md:body-semibold">
              You commented on{" "}
              <span className="body-semibold md:h2-bold">{username}</span>
              &apos;s post
            </p>
          )}
          {type === "reaction" && (
            <p className="caption-semibold md:body-semibold">
              You liked{" "}
              <span className="body-semibold md:h2-bold">{username}</span>
              &apos;s post
            </p>
          )}
          {type === "meetup" && (
            <span className="caption-semibold md:body-semibold">
              You published a meetup
            </span>
          )}
          {type === "mention" && (
            <p className="caption-semibold md:body-semibold">
              You mentioned{" "}
              <span className="body-semibold md:h2-bold">{username}</span>
            </p>
          )}{" "}
        </div>
        <div>
          <p className="caption-semibold md:body-semibold">
            <FormatDate date={postedAt} />
          </p>
        </div>
      </article>
    </>
  );
};

export default UserHistoryCard;
