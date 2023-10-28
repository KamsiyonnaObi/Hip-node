"use client";

import React, { useState } from "react";
import { Button } from "../ui/Button";
import OutlineIcon from "../icons/OutlineIcon";
import NotifCard from "./NotifCard";

const Notification = () => {
  const [select, setSelect] = useState(0);

  const toggleSelect = (val: number) => {
    setSelect(val);
  };
  return (
    <article className="fixed right-[10%] top-[6%] flex h-[582px] w-[335px] flex-col rounded-[8px] bg-background text-secondary2 dark:bg-dark4 dark:text-background2 md:left-[56%] md:top-[9%] md:h-[649px] md:w-[589px]">
      {/* nub */}
      <div className="absolute w-5 translate-x-[2000%] translate-y-[-100%] overflow-hidden">
        <div className=" h-3 w-3 origin-bottom-left rotate-45 rounded-md bg-background dark:bg-dark4  "></div>
      </div>
      <div className="mt-2.5 gap-2.5 py-5 md:py-[30px]">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-5 md:gap-[30px]">
            <div className="flex flex-col gap-5 md:gap-[30px]">
              <div className="flex flex-row justify-center gap-[63px] md:gap-[223px]">
                <p className="display-semibold md:h1-semibold">
                  3 Notifications
                </p>
                <Button
                  color="blackBlue"
                  className="caption-semibold md:body-semibold gap-2.5 rounded-[6px] px-[10px] py-[7px] text-center"
                >
                  <OutlineIcon.Vector className="fill-blue dark:fill-blue80" />{" "}
                  <span className="display-semibold">Mark All Read</span>
                </Button>
              </div>
              <hr className="border-background2 dark:border-dark3" />
            </div>
            <div className="flex flex-col">
              <ul className="flex flex-row justify-center gap-[26px] text-secondary2 dark:text-secondary3">
                <li
                  className="flex flex-col gap-2.5"
                  onClick={() => toggleSelect(0)}
                >
                  <p
                    className={`display-semibold ${
                      select === 0 && "text-blue dark:text-blue80"
                    }`}
                  >
                    All notifications
                  </p>
                  <hr
                    className={`${
                      select === 0
                        ? "border-blue dark:border-blue80"
                        : "border-background2 dark:border-dark3"
                    } `}
                  />
                </li>
                <li
                  className="flex flex-col gap-2.5"
                  onClick={() => toggleSelect(1)}
                >
                  <div className="flex flex-row gap-2">
                    <OutlineIcon.Like
                      className={`${
                        select === 1
                          ? "fill-blue dark:fill-blue80"
                          : "fill-secondary2 dark:fill-secondary3"
                      }`}
                    />
                    <p
                      className={`display-semibold ${
                        select === 1 && "text-blue dark:text-blue80"
                      } hidden md:flex`}
                    >
                      Reactions
                    </p>
                  </div>
                  <hr
                    className={`${
                      select === 1
                        ? "border-blue dark:border-blue80"
                        : "border-background2 dark:border-dark3"
                    } `}
                  />
                </li>
                <li
                  className="flex flex-col gap-2.5"
                  onClick={() => toggleSelect(2)}
                >
                  <div className="flex flex-row gap-2">
                    <OutlineIcon.Comment
                      className={`${
                        select === 2
                          ? "stroke-blue dark:stroke-blue80"
                          : "stroke-secondary2 dark:stroke-secondary3"
                      } fill-background dark:fill-dark4`}
                    />
                    <p
                      className={`display-semibold ${
                        select === 2 && "text-blue dark:text-blue80"
                      } hidden md:flex`}
                    >
                      Comments
                    </p>
                  </div>
                  <hr
                    className={`${
                      select === 2
                        ? "border-blue dark:border-blue80"
                        : "border-background2 dark:border-dark3"
                    } `}
                  />
                </li>
                <li
                  className="flex flex-col gap-2.5"
                  onClick={() => toggleSelect(3)}
                >
                  <div className="flex flex-row gap-2">
                    <OutlineIcon.Mention
                      className={`${
                        select === 3
                          ? "fill-blue dark:fill-blue80"
                          : "fill-secondary2 dark:fill-secondary3"
                      }`}
                    />
                    <p
                      className={`display-semibold ${
                        select === 3 && "text-blue dark:text-blue80"
                      } hidden md:flex`}
                    >
                      Mentions
                    </p>
                  </div>
                  <hr
                    className={`${
                      select === 3
                        ? "border-blue dark:border-blue80"
                        : "border-background2 dark:border-dark3"
                    } `}
                  />
                </li>
                <li
                  className="flex flex-col gap-3"
                  onClick={() => toggleSelect(4)}
                >
                  <OutlineIcon.Post
                    className={`${
                      select === 4
                        ? "fill-blue dark:fill-blue80"
                        : "fill-secondary2 dark:fill-secondary3"
                    }`}
                  />
                  <hr
                    className={`${
                      select === 4
                        ? "border-blue dark:border-blue80"
                        : "border-background2 dark:border-dark3"
                    } `}
                  />
                </li>
              </ul>
              <hr className="border-background2 dark:border-dark3" />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-5 md:gap-[30px]">
            <NotifCard
              type="comment"
              avatar="/Avatar.png"
              name={"Catalin Pit"}
              comment="Great ebook & Giveaway!"
              title="Hipnode. Book Giveaway: The Standout Developer by Randall Kanna"
              postedAt="22Feb, 3:26pm"
            />
            <NotifCard
              type="reaction"
              avatar="/Avatar.png"
              name={"Catalin Pit"}
              title="Hipnode. Book Giveaway: The Standout Developer by Randall Kanna"
              postedAt="22Feb, 3:26pm"
            />
          </div>
        </div>
      </div>
    </article>
  );
};

export default Notification;
