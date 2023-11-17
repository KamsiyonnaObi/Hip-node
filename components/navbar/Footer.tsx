"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import FillIcon from "../icons/FillIcon";
import { Button } from "../ui/Button";

const NavbarLink = ({
  path,
  pathname,
  iconName,
}: {
  path: string;
  pathname: string;
  iconName: string;
}) => {
  const DynamicIcon = FillIcon[iconName];
  return (
    <Link href={path}>
      <Button
        className={`items-center gap-2.5 p-2.5 ${
          pathname.startsWith(path)
            ? "bg-primary"
            : "bg-secondary6  dark:bg-dark4"
        }`}
      >
        <DynamicIcon
          className={`${
            pathname.startsWith(path)
              ? "fill-background"
              : "fill-secondary4 dark:fill-secondary6"
          }`}
        />
      </Button>
    </Link>
  );
};

const Footer = () => {
  const pathname = usePathname();
  return (
    <article className="sticky top-0 flex flex-row items-center gap-2.5 bg-background px-[27px] py-[14px] dark:bg-dark3">
      <div className="flex flex-row gap-[30px]">
        <NavbarLink path="/home" pathname={pathname} iconName="Home" />
        <NavbarLink path="/meetups" pathname={pathname} iconName="Calendar" />
        <NavbarLink path="/groups" pathname={pathname} iconName="Group" />

        <NavbarLink path="/podcast" pathname={pathname} iconName="Podcast" />
        <NavbarLink
          path="/interview"
          pathname={pathname}
          iconName="Interviews"
        />
      </div>
    </article>
  );
};

export default Footer;
