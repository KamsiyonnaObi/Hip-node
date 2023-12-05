import React from "react";
import Link from "next/link";
import { signOut } from "next-auth/react";
import FillIcon from "../icons/FillIcon";
import { useTheme } from "next-themes";

const Popup = ({ username }: { username: string }) => {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <div className="md:mr-30 fixed mr-[220px] mt-[300px] flex aspect-square h-[300px] flex-col rounded-[10px] bg-background dark:bg-dark4 md:mt-[320px]">
      {/* nub */}
      <div className="absolute w-5 translate-x-[800%] translate-y-[-100%] overflow-hidden md:translate-x-[1150%]">
        <div className=" h-3 w-3 origin-bottom-left rotate-45 rounded-md bg-background dark:bg-dark4  "></div>
      </div>
      <ul className="display-semibold mx-5 my-[30px] flex flex-col gap-5 text-secondary2 dark:text-secondary6">
        <p className="flex items-center">{username}</p>
        <hr className="dark:text-secondary3" />
        <Link href={"/profile"}>
          <li className="flex flex-row gap-[14px]">
            <FillIcon.Profile className="fill-secondary2 dark:fill-secondary6" />
            <p>Profile</p>
          </li>
        </Link>
        <li className="flex flex-row gap-[14px]">
          <FillIcon.Settings className="fill-secondary2 dark:fill-secondary6" />
          <p>Settings</p>
        </li>
        <li className="flex flex-row gap-[14px]">
          <FillIcon.Follow className="fill-red90 stroke-red90 " />
          <button className="text-red90" onClick={() => signOut()}>
            Sign out
          </button>
        </li>
        <hr className="dark:text-secondary3" />
        <li className="flex flex-row justify-between gap-5">
          <p>Interface</p>
          <div className="gap-2.5 rounded-[15px] bg-background2 p-[3px] dark:bg-dark3">
            <div className=" flex flex-row gap-[6px]">
              <div
                className="w-6 gap-2.5 rounded-[15px] bg-background p-[4px] dark:bg-dark2"
                onClick={() => resolvedTheme === "dark" && setTheme("light")}
              >
                <FillIcon.Sun className="h-4 w-4 fill-primary dark:fill-dark4" />
              </div>
              <div
                className="gap-2.5 rounded-[15px] bg-background2 p-[4px] dark:bg-dark4"
                onClick={() => resolvedTheme === "light" && setTheme("dark")}
              >
                <FillIcon.Moon className="h-4 w-4 fill-secondary5 dark:fill-secondary5" />
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Popup;
