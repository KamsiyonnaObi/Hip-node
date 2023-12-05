"use client";

import React, { useState, useEffect } from "react";
import { Button } from "../ui/Button";
import OutlineIcon from "../icons/OutlineIcon";
import NotifCard from "./NotifCard";
import {
  getAllNotification,
  readPost,
  readAllNotifications,
} from "@/utils/actions/notification.action";
import { getCurrentUser } from "@/utils/actions/user.action";
import Link from "next/link";

const Notification = () => {
  const [select, setSelect] = useState("all");
  const [notifList, setNotifList] = useState<null | any[]>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const currentUser = await getCurrentUser();
        const currentUserId = currentUser?._id.toString() || "unknown";

        const notification = await getAllNotification({
          userId: currentUserId,
          type: select,
        });

        setNotifList(JSON.parse(notification));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [select]);

  const toggleSelect = (val: string) => {
    setSelect(val);
  };

  const handleClick = async (val: string) => {
    await readPost(val);
  };

  const handleMarkRead = async () => {
    const currentUser = await getCurrentUser();
    const currentUserId = currentUser?._id.toString() || "unknown";
    await readAllNotifications(currentUserId);
    window.location.reload();
  };
  return (
    <>
      <article className="flex w-full flex-col rounded-[8px] text-secondary2 dark:text-background2  md:w-[785px] ">
        <div className="mt-2.5 gap-2.5 py-5 md:py-[30px]">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-5 md:gap-[30px]">
              <div className="flex flex-col gap-5 md:gap-[30px]">
                <div className="flex flex-row justify-between ">
                  <p className="display-semibold md:h1-semibold">
                    Notifications
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
                <ul className="flex flex-row justify-start gap-[26px] text-secondary2 dark:text-secondary3">
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
                  <li
                    className="flex flex-col gap-3"
                    onClick={() => toggleSelect("meetup")}
                  >
                    <div className="flex flex-row gap-2">
                      <OutlineIcon.Post
                        className={`${
                          select === "meetup"
                            ? "fill-blue dark:fill-blue80"
                            : "fill-secondary2 dark:fill-secondary3"
                        } cursor-pointer`}
                      />
                      <p
                        className={`display-semibold ${
                          select === "meetup" && "text-blue dark:text-blue80"
                        } hidden cursor-pointer md:flex`}
                      >
                        Meetups
                      </p>
                    </div>
                    <hr
                      className={`${
                        select === "meetup"
                          ? "border-blue dark:border-blue80"
                          : "border-background2 dark:border-dark3"
                      } cursor-pointer`}
                    />
                  </li>
                </ul>
                <hr className="border-background2 dark:border-dark3" />
              </div>
            </div>
            <div className="flex flex-col justify-start gap-5 md:gap-[30px]">
              {notifList && notifList.length > 0
                ? notifList.map((notif: any) => (
                    <Link
                      key={notif._id}
                      href={notif.link}
                      onClick={() => handleClick(notif._id)}
                    >
                      <NotifCard
                        type={notif.type}
                        avatar={notif.userIdfrom.profileImage || "/Avatar.png"}
                        name={notif.userIdfrom.username || "unknown"}
                        title={notif.title}
                        postedAt={notif.createdAt}
                        comment={notif.comment}
                        read={notif.read}
                      />
                    </Link>
                  ))
                : "No Notifications!"}
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default Notification;
