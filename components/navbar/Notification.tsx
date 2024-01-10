"use client";

import React, { useState, useEffect } from "react";
import { Button } from "../ui/Button";
import OutlineIcon from "../icons/OutlineIcon";
import NotifCard from "./NotifCard";
import {
  readAllNotifications,
  readPost,
} from "@/utils/actions/notification.action";
import { getCurrentUser } from "@/utils/actions/user.action";
import Link from "next/link";
import { useSocketContext } from "@/providers/SocketProvider";
import { INotif } from "@/models/notification.model";

const Notification = ({
  toggle,
  type,
}: {
  toggle?: () => void;
  type?: string;
}) => {
  const { notifications } = useSocketContext();
  const [select, setSelect] = useState("all");
  const [notifList, setNotifList] = useState<null | INotif[]>(notifications);

  const slicedNotifList = type === "page" ? notifList : notifList?.slice(0, 3);

  useEffect(() => {
    if (select === "all") {
      setNotifList(notifications);
      return;
    }
    const filteredNotif = notifications.filter(
      (notif) => notif.type === select
    );
    setNotifList(filteredNotif);
  }, [select, notifications]);

  const toggleSelect = (val: string) => {
    setSelect(val);
  };

  const handleClick = async (val: string) => {
    if (toggle) {
      toggle();
    }

    await readPost(val);
  };

  const handleMarkRead = async () => {
    const currentUser = await getCurrentUser();
    const currentUserId = currentUser?._id.toString() || "unknown";
    await readAllNotifications(currentUserId);
  };
  return (
    <>
      {type !== "page" && (
        <div className="relative w-5 translate-x-[50%] overflow-hidden max-md:hidden">
          <div className=" h-3 w-3 origin-bottom-left rotate-45 rounded-md bg-background dark:bg-dark4"></div>
        </div>
      )}
      <article
        className={`${
          type !== "page"
            ? "fixed w-[335px] bg-background dark:bg-dark4 max-md:left-[50%] max-md:translate-x-[-50%] md:w-[589px]"
            : "w-full md:w-[785px] "
        } right-[10%] flex flex-col items-center rounded-[8px] text-secondary2  dark:text-background2  max-md:top-[3.5rem] md:right-[7%]`}
      >
        <div className="mt-2.5 gap-2.5 py-5 md:py-[30px]">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-5 md:gap-[30px]">
              <div className="flex flex-col gap-5 md:gap-[30px]">
                <div
                  className={`flex flex-row ${
                    type === "page" ? "justify-between" : "justify-center"
                  } gap-[63px] md:gap-[223px]`}
                >
                  <p className="display-semibold md:h1-semibold">
                    {notifList?.length || "No"} Notifications
                  </p>
                  <Button
                    color="blackBlue"
                    className="caption-semibold md:body-semibold gap-2.5 rounded-[6px] px-[10px] py-[7px] text-center"
                  >
                    <OutlineIcon.Vector className="fill-blue dark:fill-blue80" />{" "}
                    <span className="display-semibold" onClick={handleMarkRead}>
                      Mark All Read
                    </span>
                  </Button>
                </div>
                <hr className="border-background2 dark:border-dark3" />
              </div>
              <div className="flex flex-col">
                <ul
                  className={`flex flex-row ${
                    type === "page" ? "justify-start" : "justify-center"
                  } gap-[26px] text-secondary2 dark:text-secondary3`}
                >
                  <li
                    className="flex flex-col gap-2.5"
                    onClick={() => toggleSelect("all")}
                  >
                    <p
                      className={`display-semibold ${
                        select === "all" && "text-blue dark:text-blue80"
                      } cursor-pointer`}
                    >
                      All notifications
                    </p>
                    <hr
                      className={`${
                        select === "all"
                          ? "border-blue dark:border-blue80"
                          : "border-background2 dark:border-dark3"
                      } cursor-pointer`}
                    />
                  </li>
                  <li
                    className="flex flex-col gap-2.5"
                    onClick={() => toggleSelect("reaction")}
                  >
                    <div className="flex flex-row gap-2">
                      <OutlineIcon.Like
                        className={`${
                          select === "reaction"
                            ? "fill-blue dark:fill-blue80"
                            : "fill-secondary2 dark:fill-secondary3"
                        } cursor-pointer`}
                      />
                      <p
                        className={`display-semibold ${
                          select === "reaction" && "text-blue dark:text-blue80"
                        } hidden cursor-pointer md:flex`}
                      >
                        Reactions
                      </p>
                    </div>
                    <hr
                      className={`${
                        select === "reaction"
                          ? "border-blue dark:border-blue80"
                          : "border-background2 dark:border-dark3"
                      } cursor-pointer`}
                    />
                  </li>
                  <li
                    className="flex flex-col gap-2.5"
                    onClick={() => toggleSelect("comment")}
                  >
                    <div className="flex flex-row gap-2">
                      <OutlineIcon.Comment
                        className={`${
                          select === "comment"
                            ? "stroke-blue dark:stroke-blue80"
                            : "stroke-secondary2 dark:stroke-secondary3"
                        } cursor-pointer fill-background dark:fill-dark4`}
                      />
                      <p
                        className={`display-semibold ${
                          select === "comment" && "text-blue dark:text-blue80"
                        } hidden cursor-pointer md:flex`}
                      >
                        Comments
                      </p>
                    </div>
                    <hr
                      className={`${
                        select === "comment"
                          ? "border-blue dark:border-blue80"
                          : "border-background2 dark:border-dark3"
                      } cursor-pointer`}
                    />
                  </li>
                  <li
                    className="flex flex-col gap-2.5"
                    onClick={() => toggleSelect("mention")}
                  >
                    <div className="flex flex-row gap-2">
                      <OutlineIcon.Mention
                        className={`${
                          select === "mention"
                            ? "fill-blue dark:fill-blue80"
                            : "fill-secondary2 dark:fill-secondary3"
                        } cursor-pointer`}
                      />
                      <p
                        className={`display-semibold ${
                          select === "mention" && "text-blue dark:text-blue80"
                        } hidden cursor-pointer md:flex`}
                      >
                        Mentions
                      </p>
                    </div>
                    <hr
                      className={`${
                        select === "mention"
                          ? "border-blue dark:border-blue80"
                          : "border-background2 dark:border-dark3"
                      } cursor-pointer`}
                    />
                  </li>
                </ul>
                <hr className="border-background2 dark:border-dark3" />
              </div>
            </div>
            <div
              className={`flex flex-col ${
                type === "page"
                  ? "justify-start"
                  : "items-center justify-center"
              } gap-5 md:gap-[30px]`}
            >
              {notifList && notifList.length > 0
                ? slicedNotifList?.map((notif: any) => (
                    <Link
                      key={notif._id}
                      href={notif.link}
                      onClick={() => {
                        handleClick(notif._id);
                      }}
                    >
                      <NotifCard
                        type={notif.type}
                        avatar={
                          notif.userIdfrom.profileImage ||
                          notif.image ||
                          "/Avatar.png"
                        }
                        name={
                          notif.userIdfrom.username ||
                          notif.username ||
                          "unknown"
                        }
                        title={notif.title}
                        postedAt={notif.createdAt}
                        comment={notif.comment}
                        read={notif.read}
                      />
                    </Link>
                  ))
                : "No Notifications!"}
              {type !== "page" && toggle && (
                <Link
                  className="body-semibold flex justify-center text-center text-blue"
                  href="/notification"
                  onClick={() => {
                    toggle();
                  }}
                >
                  View All Notifications
                </Link>
              )}
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default Notification;
