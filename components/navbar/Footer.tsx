"use client";
import { usePathname } from "next/navigation";
import React from "react";
import NavbarLink from "./NavbarLink";

const Footer = () => {
  const pathname = usePathname();
  return (
    <article className="sticky top-0 mt-[1.25rem] flex flex-row items-center justify-center gap-2.5 bg-background px-[27px] py-[14px] shadow-lg dark:bg-dark3">
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
