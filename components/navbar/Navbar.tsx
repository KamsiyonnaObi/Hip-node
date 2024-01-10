"use client";

import React, { useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
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
import { useSocketContext } from "@/providers/SocketProvider";
import { createPortal } from "react-dom";
import NavChatPopup from "./NavChatPopup";

const Navbar = ({
  user,
}: {
  user: { id: string; profileImage: string; username: string };
}) => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const { isConnected } = useSocketContext();

  const [searchText, setSearchText] = useState(
    searchParams?.get("search") || ""
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
  const id = user?.id || "";
  const { isChatPopUpOpen } = useSocketContext();

  const handleKeyDown = (e: { key: string }) => {
    if (e.key === "Enter") {
      let currentPath = pathname?.split("/")[1];
      if (currentPath === "posts" || currentPath === "notification") {
        currentPath = "home";
      }
      const paramsObject = searchParams ? Object.fromEntries(searchParams) : {};
      delete paramsObject.search;
      const params = new URLSearchParams(paramsObject).toString();
      const queryParams = params !== "" ? `?${params}` : "?";
      const route = `/${currentPath}${queryParams}&search=${searchText}`;
      router.push(route);
    }
  };

  return (
    <article className="sticky top-0 z-10 flex h-[60px] justify-center bg-background px-[27px] py-3 shadow-lg dark:bg-dark3 md:h-[80px] md:px-[40px] md:py-[20px] lg:px-0">
      <div className="flex w-[335px] flex-row justify-between gap-2.5 md:w-[1130px] md:gap-0 lg:w-[1360px]">
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
        <div className=" flex flex-row md:gap-[40px]">
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
          <div className="flex flex-row md:gap-[180px]">
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

                {messageExpanded && (
                  <MessageList toggleMessage={toggleMessage} />
                )}
              </div>

              <div ref={notifRef} className="relative">
                <div onClick={() => toggleNotif()}>
                  <Button className="items-center gap-2.5 bg-secondary6 p-2.5 dark:bg-dark4">
                    <FillIcon.Notifications className="fill-secondary4 dark:fill-secondary6" />
                  </Button>
                </div>

                {notifExpanded && <Notification toggle={() => toggleNotif()} />}
              </div>

              <section className="flex flex-row items-center md:gap-2.5">
                <div className="flex flex-row md:gap-4">
                  <div
                    ref={menuRef}
                    className="relative aspect-square h-[34px] w-[34px] items-center justify-center rounded-full border-4 border-yellow"
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
                      {isConnected && (
                        <div className="absolute bottom-0 right-0 flex h-4 w-4 rounded-full border-2 border-white bg-green"></div>
                      )}
                    </div>
                    {menuExpanded && <Popup username={username} id={id} />}
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      {isChatPopUpOpen &&
        createPortal(<NavChatPopup currentUserId={user.id} />, document.body)}
    </article>
  );
};

export default Navbar;
