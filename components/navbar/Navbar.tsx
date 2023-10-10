"use client";
import React from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import FillIcon from "../icons/FillIcon";
import { Input } from "../form/Input";
import OutlineIcon from "../icons/OutlineIcon";
import { Button } from "../ui/Button";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <article className="bg-background dark:bg-dark3 md:gap-[10px] md:px-[40px] md:py-[20px]">
      <div className="flex flex-row justify-center md:w-[1360px] md:gap-[84px]">
        <Image
          src="/logo.svg"
          alt="logo"
          width={146}
          height={38}
          className="md:gap-[10px]"
        />
        <div className="flex flex-row md:gap-[65px]">
          <section className="hidden flex-row items-center gap-[20px] bg-background  dark:bg-dark3 md:flex">
            <Link href="/home">
              <Button
                className={`items-center  md:gap-2.5 md:p-2.5 ${
                  pathname === "/home"
                    ? "bg-primary"
                    : "bg-secondary6  dark:bg-dark4"
                }`}
              >
                <FillIcon.Home
                  className={`${
                    pathname === "/home"
                      ? "fill-background"
                      : "fill-secondary4 dark:fill-secondary6"
                  }`}
                />
              </Button>
            </Link>
            <Link href="/calendar">
              <Button
                className={`items-center  md:gap-2.5 md:p-2.5 ${
                  pathname === "/calendar"
                    ? "bg-primary"
                    : "bg-secondary6  dark:bg-dark4"
                }`}
              >
                <FillIcon.Calendar
                  className={`${
                    pathname === "/calendar"
                      ? "fill-background"
                      : "fill-secondary4 dark:fill-secondary6"
                  }`}
                />
              </Button>
            </Link>

            <Link href="/group">
              <Button
                className={`items-center  md:gap-2.5 md:p-2.5 ${
                  pathname === "/group"
                    ? "bg-primary"
                    : "bg-secondary6  dark:bg-dark4"
                }`}
              >
                <FillIcon.Group
                  className={`${
                    pathname === "/group"
                      ? "fill-background"
                      : "fill-secondary4 dark:fill-secondary6"
                  }`}
                />
              </Button>
            </Link>

            <Link href="/podcast">
              <Button
                className={`items-center  md:gap-2.5 md:p-2.5 ${
                  pathname === "/podcast"
                    ? "bg-primary"
                    : "bg-secondary6  dark:bg-dark4"
                }`}
              >
                <FillIcon.Podcast
                  className={`${
                    pathname === "/podcast"
                      ? "fill-background"
                      : "fill-secondary4 dark:fill-secondary6"
                  }`}
                />
              </Button>
            </Link>

            <Link href="/interview">
              <Button
                className={`items-center  md:gap-2.5 md:p-2.5 ${
                  pathname === "/interview"
                    ? "bg-primary"
                    : "bg-secondary6  dark:bg-dark4"
                }`}
              >
                <FillIcon.Interviews
                  className={`${
                    pathname === "/interview"
                      ? "fill-background"
                      : "fill-secondary4 dark:fill-secondary6"
                  }`}
                />
              </Button>
            </Link>
          </section>
          <div className="flex flex-row md:gap-[58px]">
            <Input
              divClassName="flex w-full items-center rounded-lg bg-secondary6 px-5 dark:bg-dark2"
              placeholder="Type here to search..."
              className="gap-2.5 md:w-[440px]"
            >
              <OutlineIcon.SearchIcon className="fill-none stroke-secondary2 dark:fill-secondary3" />
            </Input>
            <div className="flex flex-row md:gap-[25px]">
              <Button className="items-center bg-secondary6 dark:bg-dark4 md:gap-2.5 md:p-2.5">
                <FillIcon.Message className="fill-secondary4 dark:fill-secondary6" />
              </Button>
              <Button className="items-center bg-secondary6 dark:bg-dark4 md:gap-2.5 md:p-2.5">
                <FillIcon.Notifications className="fill-secondary4 dark:fill-secondary6" />
              </Button>
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
                      />
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
