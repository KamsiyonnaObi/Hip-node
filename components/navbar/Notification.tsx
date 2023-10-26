import React from "react";
import { Button } from "../ui/Button";
import OutlineIcon from "../icons/OutlineIcon";
import NotifCard from "./NotifCard";

const Notification = () => {
  return (
    <article className="absolute left-[57%] top-[9%] flex h-[649px] w-[589px] flex-col rounded-[8px] bg-background text-secondary2 dark:bg-dark4 dark:text-background2">
      {/* nub */}
      <div className="absolute w-5 translate-x-[800%] translate-y-[-100%] overflow-hidden md:translate-x-[800%]">
        <div className=" h-3 w-3 origin-bottom-left rotate-45 rounded-md bg-background dark:bg-dark4  "></div>
      </div>
      <div className="mt-2.5 gap-2.5 py-[30px]">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-[30px]">
            <div className="flex flex-col gap-[30px]">
              <div className="flex flex-row justify-center gap-[223px]">
                <p className="h1-semibold">3 Notifications</p>
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
                <li className="flex flex-col gap-2.5">
                  <p className="display-semibold">All notifications</p>
                  <hr className="border-blue dark:border-blue80" />
                </li>
                <li className="flex flex-col gap-2.5">
                  <div className="flex flex-row gap-2">
                    <OutlineIcon.Like className="fill-secondary2 dark:fill-secondary3" />
                    <p className="display-semibold">Reactions</p>
                  </div>
                  <hr className="border-background2 dark:border-dark3" />
                </li>
                <li className="flex flex-col gap-2.5">
                  <div className="flex flex-row gap-2">
                    <OutlineIcon.Comment className="fill-background stroke-secondary2 dark:fill-dark4 dark:stroke-secondary3" />
                    <p className="display-semibold">Comments</p>
                  </div>
                  <hr className="border-background2 dark:border-dark3" />
                </li>
                <li className="flex flex-col gap-2.5">
                  <div className="flex flex-row gap-2">
                    <OutlineIcon.Mention className="fill-secondary2 dark:fill-secondary3" />
                    <p className="display-semibold">Mentions</p>
                  </div>
                  <hr className="border-background2 dark:border-dark3" />
                </li>
                <li className="flex flex-col gap-3">
                  <OutlineIcon.Post className="fill-secondary2 dark:fill-secondary3" />
                  <hr className="border-background2 dark:border-dark3" />
                </li>
              </ul>
              <hr className="border-background2 dark:border-dark3" />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-[30px]">
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
