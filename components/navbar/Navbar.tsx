"use client";

import React, { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { ImageFallback as Image } from "@/components/shared/ImageFallback";

import FillIcon from "../icons/FillIcon";
import { Input } from "../form/Input";
import OutlineIcon from "../icons/OutlineIcon";
import { Button } from "../ui/Button";
import { LogoIcon } from "../icons/LogoIcon";
import Popup from "./Popup";
import MessageList from "./MessageList";
import Notification from "./Notification";
import NavbarLink from "./NavbarLink";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const [expanded, setExpanded] = useState(0);
  const [searchText, setSearchText] = useState("");

  const toggleMenu = () => {
    setExpanded(expanded !== 1 ? 1 : 0);
  };

  const toggleMessage = () => {
    setExpanded(expanded !== 2 ? 2 : 0);
  };

  const toggleNotif = () => {
    setExpanded(expanded !== 3 ? 3 : 0);
  };

  const handleKeyDown = (e: any) => {
    if (e.key === "Enter") {
      const currentPath = pathname.split("/")[1];
      if (searchText === "") {
        router.push(currentPath);
      } else {
        const route = `/${currentPath}?search=${searchText}`;
        setSearchText("");
        router.push(route);
      }
    }
  };

  return (
    <article className="sticky top-0 z-10 flex justify-center bg-background px-5 py-3 dark:bg-dark3 md:px-[40px] md:py-[20px]">
      <div className="flex flex-row justify-center gap-[149px] md:w-[1360px] md:gap-5 lg:gap-[84px]">
        <section className="flex flex-row items-center justify-center gap-5 md:gap-2.5">
          <div className="flex h-[30px] items-center justify-center gap-2.5 rounded-[6px] bg-secondary1 p-1 dark:bg-background">
            <LogoIcon className="fill-background stroke-background dark:fill-dark2 dark:stroke-dark2" />
          </div>
          <h1 className="h1-bold hidden text-primary lg:flex">
            Hipnode
            <span className="text-secondary1 dark:text-secondary2">.</span>
          </h1>
          <OutlineIcon.SearchIcon className="stroke-secondary5 dark:stroke-secondary4 md:hidden" />
        </section>
        {/* MOBILE */}
        <section className="flex flex-row gap-5 md:hidden">
          <Button
            className="items-center bg-secondary6 dark:bg-dark4 md:gap-2.5 md:p-2.5"
            onClick={toggleMessage}
          >
            <FillIcon.Message className="fill-secondary4 dark:fill-secondary6" />
          </Button>
          {expanded === 2 && <MessageList />}
          <Button
            className="items-center bg-secondary6 dark:bg-dark4 md:gap-2.5 md:p-2.5"
            onClick={toggleNotif}
          >
            <FillIcon.Notifications className="fill-secondary4 dark:fill-secondary6" />
          </Button>
          {expanded === 3 && <Notification />}
          <div className="flex flex-row items-center justify-center rounded-[8px] border-[1px] border-yellow md:h-[40px] md:w-[40px]">
            <div className="flex flex-row items-center justify-center rounded-[6px] bg-yellow30 md:h-[34px] md:w-[34px]">
              <Image
                className="w-[22px] md:w-[30px]"
                src="/ExampleAvatar.png"
                alt="profile"
                width="30"
                height="32"
                onClick={toggleMenu}
              />
              {expanded === 1 && <Popup />}
            </div>
          </div>
        </section>
        {/* DESKTOP */}
        <div className="hidden flex-row md:flex md:gap-5 md2:gap-[65px]">
          <section className="hidden flex-row items-center gap-[20px] bg-background  dark:bg-dark3 md:flex">
            <NavbarLink path="/home" pathname={pathname} iconName="Home" />
            <NavbarLink
              path="/meetups"
              pathname={pathname}
              iconName="Calendar"
            />
            <NavbarLink path="/groups" pathname={pathname} iconName="Group" />
            <NavbarLink
              path="/podcast"
              pathname={pathname}
              iconName="Podcast"
            />
            <NavbarLink
              path="/interview"
              pathname={pathname}
              iconName="Interviews"
            />
          </section>
          <div className="flex flex-row md:gap-5 md2:gap-[58px]">
            <Input
              divClassName="flex w-full items-center rounded-lg bg-secondary6 px-5 dark:bg-dark2"
              placeholder="Type here to search..."
              className="gap-2.5 md:w-[440px]"
              onChange={(e: any) => setSearchText(e.target.value)}
              value={searchText}
              onKeyDown={(e: any) => handleKeyDown(e)}
            >
              <OutlineIcon.SearchIcon className="fill-none stroke-secondary2 dark:fill-secondary3" />
            </Input>
            <div className="flex flex-row md:gap-[25px]">
              <div className="relative">
                {" "}
                <Button
                  className="items-center bg-secondary6 dark:bg-dark4 md:gap-2.5 md:p-2.5"
                  onClick={toggleMessage}
                >
                  <FillIcon.Message className="fill-secondary4 dark:fill-secondary6" />
                </Button>
                {expanded === 2 && <MessageList />}
              </div>

              <div className="relative">
                <Button
                  className="items-center bg-secondary6 dark:bg-dark4 md:gap-2.5 md:p-2.5"
                  onClick={toggleNotif}
                >
                  <FillIcon.Notifications className="fill-secondary4 dark:fill-secondary6" />
                </Button>
                {expanded === 3 && <Notification />}
              </div>

              <section className="flex flex-row items-center md:gap-2.5">
                <div className="flex flex-row md:gap-4">
                  <div className="flex flex-row items-center justify-center rounded-[8px] border-[1px] border-yellow md:h-[40px] md:w-[40px]">
                    <div className="flex flex-row items-center justify-center rounded-[6px] bg-yellow30 md:h-[34px] md:w-[34px]">
                      <Image
                        className="w-[22px] md:w-[30px]"
                        src="/ExampleAvatar.png"
                        alt="profile"
                        width="30"
                        height="32"
                        onClick={toggleMenu}
                      />
                      {expanded === 1 && <Popup />}
                    </div>
                  </div>
                  <p className="display-bold text-secondary1 dark:text-background2">
                    John Smith
                  </p>
                </div>
                <OutlineIcon.DownArrow className="fill-secondary4 dark:fill-secondary6" />
              </section>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Navbar;
