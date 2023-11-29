"use client";

import React, { useState, useEffect } from "react";
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
import { useOutsideClick } from "@/hooks/useOutsideClick";
import { getCurrentUsername } from "@/utils/actions/user.action";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const [searchText, setSearchText] = useState("");
  const [userName, setUserName] = useState("");
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
  useEffect(() => {
    async function getUserName() {
      try {
        const userName = await getCurrentUsername();
        userName ? setUserName(userName) : setUserName("");
        console.log("here", userName);
      } catch (error) {
        console.error("Error fetching user name");
      }
    }
    getUserName();
  }, []);

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
          <div ref={messageRef} onClick={() => toggleMessage()}>
            <Button className="items-center bg-secondary6 dark:bg-dark4 md:gap-2.5 md:p-2.5">
              <FillIcon.Message className="fill-secondary4 dark:fill-secondary6" />
            </Button>
          </div>

          {messageExpanded && <MessageList />}
          <div ref={notifRef} onClick={() => toggleNotif()}>
            <Button className="items-center bg-secondary6 dark:bg-dark4 md:gap-2.5 md:p-2.5">
              <FillIcon.Notifications className="fill-secondary4 dark:fill-secondary6" />
            </Button>
          </div>

          {notifExpanded && <Notification />}
          <div className="flex flex-row items-center justify-center rounded-[8px] border-[1px] border-yellow md:h-[40px] md:w-[40px]">
            <div className="flex flex-row items-center justify-center rounded-[6px] bg-yellow30 md:h-[34px] md:w-[34px]">
              <div ref={menuRef} onClick={() => toggleMenu()}>
                <Image
                  className="w-[22px] md:w-[30px]"
                  src="/ExampleAvatar.png"
                  alt="profile"
                  width="30"
                  height="32"
                />
              </div>
              {menuExpanded && <Popup />}
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
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setSearchText(e.target.value)
              }
              value={searchText}
              onKeyDown={handleKeyDown}
            >
              <OutlineIcon.SearchIcon className="fill-none stroke-secondary2 dark:fill-secondary3" />
            </Input>
            <div className="flex flex-row md:gap-[25px]">
              <div className="relative">
                <div ref={messageRef} onClick={() => toggleMessage()}>
                  <Button className="items-center bg-secondary6 dark:bg-dark4 md:gap-2.5 md:p-2.5">
                    <FillIcon.Message className="fill-secondary4 dark:fill-secondary6" />
                  </Button>
                </div>

                {messageExpanded && <MessageList />}
              </div>

              <div className="relative">
                <div ref={notifRef} onClick={() => toggleNotif()}>
                  <Button className="items-center bg-secondary6 dark:bg-dark4 md:gap-2.5 md:p-2.5">
                    <FillIcon.Notifications className="fill-secondary4 dark:fill-secondary6" />
                  </Button>
                </div>

                {notifExpanded && <Notification />}
              </div>

              <section className="flex flex-row items-center md:gap-2.5">
                <div className="flex flex-row items-center md:gap-4">
                  <div className="flex flex-row items-center justify-center rounded-[8px] border-[1px] border-yellow md:h-[40px] md:w-[40px]">
                    <div className="flex flex-row items-center justify-center rounded-[6px] bg-yellow30 md:h-[34px] md:w-[34px]">
                      <div ref={menuRef} onClick={() => toggleMenu()}>
                        <Image
                          className="w-[22px] md:w-[30px]"
                          src="/ExampleAvatar.png"
                          alt="profile"
                          width="30"
                          height="32"
                        />
                      </div>
                      {menuExpanded && <Popup />}
                    </div>
                  </div>
                  {userName && (
                    <p className="display-bold text-secondary1 dark:text-background2">
                      {userName}
                    </p>
                  )}
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
