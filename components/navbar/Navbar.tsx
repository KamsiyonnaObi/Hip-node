"use client";

import React, { useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";

import FillIcon from "../icons/FillIcon";
import { Input } from "../form/Input";
import OutlineIcon from "../icons/OutlineIcon";
import { Button } from "../ui/Button";
import { LogoIcon } from "../icons/LogoIcon";
import Popup from "./Popup";
import MessageList from "./MessageList";
import Notification from "./Notification";
import NavbarLink from "./NavbarLink";
import { useOutsideClick } from "@/hooks/useOutsideClick";

const Navbar = ({
  user,
}: {
  user: { profileImage: string; username: string };
}) => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const [searchText, setSearchText] = useState(
    searchParams.get("search") || ""
  );
  const {
    isOpen: menuExpanded,
    ref: menuRef,
    toggleOpen: toggleMenu,
  } = useOutsideClick();
  const {
    isOpen: messageExpanded,
    ref: messageRef,
    toggleOpen: toggleMessage,
  } = useOutsideClick();
  const {
    isOpen: notifExpanded,
    ref: notifRef,
    toggleOpen: toggleNotif,
  } = useOutsideClick();

  const avatar = user?.profileImage || "";
  const username = user?.username || "";

  const handleKeyDown = (e: { key: string }) => {
    if (e.key === "Enter") {
      const currentPath = pathname.split("/")[1];
      const paramsObject = Object.fromEntries(searchParams);
      delete paramsObject.search;
      const params = new URLSearchParams(paramsObject).toString();
      const queryParams = params !== "" ? `?${params}` : "?";
      const route = `/${currentPath}${queryParams}&search=${searchText}`;
      router.push(route);
    }
  };

  return (
    <article className="sticky top-0 z-10 flex h-[60px] justify-center bg-background px-5 py-3 dark:bg-dark3 md:h-[80px] md:px-[40px] md:py-[20px]">
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
        <div className=" flex flex-row md:gap-5 md2:gap-[65px]">
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
              divClassName="hidden md:flex w-auto lg:max-w-[29rem] md2:max-w-[24rem] md:max-w-[19rem] items-center rounded-lg bg-secondary6 px-5 dark:bg-dark2"
              placeholder="Type here to search..."
              className="gap-2.5 md:w-[440px]"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setSearchText(e.target.value)
              }
              value={searchText}
              onKeyDown={handleKeyDown}
            >
              <OutlineIcon.SearchIcon className="fill-none stroke-secondary2 dark:fill-secondary3" />
            </Input>
            <div className="flex flex-row gap-5 md:gap-[25px]">
              <div ref={messageRef} className="relative">
                <div onClick={() => toggleMessage()}>
                  <Button className="items-center gap-2.5 bg-secondary6 p-2.5 dark:bg-dark4">
                    <FillIcon.Message className="fill-secondary4 dark:fill-secondary6" />
                  </Button>
                </div>

                {messageExpanded && <MessageList />}
              </div>

              <div ref={notifRef} className="relative">
                <div onClick={() => toggleNotif()}>
                  <Button className="items-center gap-2.5 bg-secondary6 p-2.5 dark:bg-dark4">
                    <FillIcon.Notifications className="fill-secondary4 dark:fill-secondary6" />
                  </Button>
                </div>

                {notifExpanded && <Notification />}
              </div>

              <section className="flex flex-row items-center md:gap-2.5">
                <div className="flex flex-row md:gap-4">
                  <div
                    ref={menuRef}
                    className="flex aspect-square h-[34px] w-[34px] flex-row items-center justify-center rounded-full border-4 border-yellow"
                  >
                    <div
                      className="relative h-full w-full rounded-full"
                      onClick={() => toggleMenu()}
                    >
                      <Image
                        src={avatar}
                        alt="profile"
                        fill
                        className="rounded-full object-fill"
                      />
                    </div>
                    {menuExpanded && <Popup />}
                  </div>
                  <p className="display-bold hidden self-center whitespace-nowrap text-secondary1 dark:text-background2 md:flex">
                    {username}
                  </p>
                </div>
                <div className="hidden md:flex">
                  <OutlineIcon.DownArrow className="fill-secondary4 dark:fill-secondary6" />
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Navbar;
