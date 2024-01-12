"use client";

import Link from "next/link";
import React from "react";

import { Logo } from "../icons/Logo";
import { ImageFallback as Image } from "@/components/shared/ImageFallback";
import FillIcon from "../icons/FillIcon";
import OutlineIcon from "../icons/OutlineIcon";
import { usePathname } from "next/navigation";
import { cn } from "@/utils";

const pathToIcon = {
  "/admin": FillIcon.Grid,
  "/admin/users": FillIcon.User,
  "/admin/content": OutlineIcon.Content,
};

const AdminNavLink = ({
  path,
  children,
}: {
  path: string;
  children: React.ReactNode;
}) => {
  const currentPath = usePathname();
  const Icon = pathToIcon[path as keyof typeof pathToIcon];
  return (
    <li className="w-full">
      <Link
        href={path}
        className={cn(
          "flex items-center gap-4",
          currentPath === path && "border-r-2 border-primary text-primary"
        )}
      >
        <Icon
          className={cn(
            "h-4 w-4",
            currentPath === path
              ? "fill-primary"
              : "fill-gray-800 dark:fill-white"
          )}
        />
        {children}
      </Link>
    </li>
  );
};

const AdminNav = ({
  user,
}: {
  user: { profileImage: string; username: string };
}) => {
  return (
    <nav className="sticky top-0 flex h-screen w-60 shrink-0 flex-col items-center gap-8 py-8 dark:bg-d-dark-900">
      <Link href="/">
        <Logo />
      </Link>
      <div className="flex flex-col items-center gap-3">
        <figure className="h-fit w-fit overflow-hidden rounded-full">
          <Image
            src={user?.profileImage}
            alt={"User Avatar"}
            width={60}
            height={60}
          />
        </figure>
        <span className="flex flex-col items-center gap-1 font-semibold">
          {user?.username}
          <small className="text-xs text-secondary3">Administrator</small>
        </span>
      </div>
      <ul className="flex w-full flex-col items-start gap-4 pl-10 font-bold">
        <AdminNavLink path="/admin">Overview</AdminNavLink>
        <AdminNavLink path="/admin/users">Users</AdminNavLink>
        <AdminNavLink path="/admin/content">Content</AdminNavLink>
      </ul>
    </nav>
  );
};

export default AdminNav;
