"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import FillIcon from "../icons/FillIcon";
import { Button } from "../ui/Button";

const Footer = () => {
  const pathname = usePathname();
  return (
    <article className="sticky top-0 flex flex-row items-center gap-2.5 bg-background px-[27px] py-[14px] dark:bg-dark3">
      <div className="flex flex-row gap-[30px]">
        <Link href="/home">
          <Button
            className={`items-center  gap-2.5 p-2.5 ${
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
        <Link href="/meetups">
          <Button
            className={`items-center  gap-2.5 p-2.5 ${
              pathname === "/meetups"
                ? "bg-primary"
                : "bg-secondary6  dark:bg-dark4"
            }`}
          >
            <FillIcon.Calendar
              className={`${
                pathname === "/meetups"
                  ? "fill-background"
                  : "fill-secondary4 dark:fill-secondary6"
              }`}
            />
          </Button>
        </Link>

        <Link href="/group">
          <Button
            className={`items-center  gap-2.5 p-2.5 ${
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
            className={`items-center  gap-2.5 p-2.5 ${
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
            className={`items-center  gap-2.5 p-2.5 ${
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
      </div>
    </article>
  );
};

export default Footer;
