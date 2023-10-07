"use client";
import React from "react";
import PopularTags from "@/components/PopularTags";
import Sidebar from "@/components/Sidebar";
import FillIcon from "@/components/icons/FillIcon";
import { Logo } from "@/components/icons/Logo";
import { LogoIcon } from "@/components/icons/LogoIcon";
import OutlineIcon from "@/components/icons/OutlineIcon";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/form/Input";
import PinnedGroup from "@/components/PinnedGroup";

import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  const [swap, setSwap] = React.useState(false);

  const handleButtonClick = () => {
    setSwap(!swap);
  };
  return (
    <div className="m-6 bg-background2">
      <div className={`container ${swap ? "light" : "dark"}`}>
        <header>
          <nav>
            <ul className="flex items-center justify-between ">
              <li>
                <a href="#" className="h1-bold">
                  Breaking Bugs
                </a>
              </li>
              <li>
                <ul className="flex items-center justify-between gap-5">
                  <li>
                    <a href="#" className="body-semibold">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#" className="body-semibold">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" className="body-semibold">
                      Contact
                    </a>
                  </li>
                  <li>
                    <a href="#" className="body-semibold">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" className="body-semibold">
                      Careers
                    </a>
                  </li>
                  {session ? (
                    <li>
                      <button
                        onClick={() => signOut()}
                        className="display-semibold"
                      >
                        Sign Out
                      </button>
                    </li>
                  ) : (
                    <>
                      <li>
                        <button
                          onClick={() => signIn()}
                          className="display-semibold rounded-full bg-[#ff9d00c9] px-4 py-2"
                        >
                          Login
                        </button>
                      </li>
                      <li>
                        <button onClick={() => {}} className="display-semibold">
                          Sign Up
                        </button>
                      </li>
                    </>
                  )}
                </ul>
              </li>
            </ul>
          </nav>
        </header>
        <div className="flex justify-between">
          <div className="flex flex-col">
            {session && (
              <h1 className="h1-bold ">Welcome {session.user?.name}!</h1>
            )}
            <p className="body-semibold">
              Welcome to the Breaking Bugs Hipnode! This is a Next.js project
              with Tailwind CSS.
            </p>
          </div>
          <div>
            <Logo />
            <LogoIcon />
          </div>
        </div>

        <div className="mx-auto flex h-fit w-[1024px] justify-center border py-9 dark:bg-dark3">
          <div>
            <button
              className="rounded-full bg-[#ff9d00c9] p-2"
              onClick={handleButtonClick}
            >
              {swap ? "Light" : "Dark"} Mode
            </button>
          </div>
          <div className="flex flex-col items-center gap-4">
            <Logo />
          </div>
        </div>

        <div className="flex w-[500px] flex-wrap gap-4 py-6">
          <FillIcon.Rocket />
          <FillIcon.Comment />
          <FillIcon.Calendar />
          <FillIcon.Home />
          <FillIcon.Message />
          <FillIcon.Profile />
          <FillIcon.Facebook className="fill-blue stroke-slate-500" />
          <FillIcon.Google className="fill-blue stroke-green" />
          <FillIcon.Twitter className="fill-black stroke-white" />
          <FillIcon.Send />
          <FillIcon.Settings />
          <FillIcon.Share />
          <FillIcon.Thunderbolt className="fill-yellow" />
          <FillIcon.Heart />
          <FillIcon.Reply />
          <FillIcon.Group />
          <FillIcon.Follow />
          <FillIcon.Business />
          <FillIcon.Fire />
          <FillIcon.Notifications />
          <FillIcon.Inbox />
          <FillIcon.Growing />
          <FillIcon.Leave />
          <FillIcon.Interviews />
          <FillIcon.Post />
          <FillIcon.Report />
          <FillIcon.Moon />
          <FillIcon.Sun />
          <FillIcon.Feedback />
          <FillIcon.Podcast />
          <FillIcon.Menu />
        </div>
        <div className="flex w-[500px] flex-wrap gap-4 py-6">
          <OutlineIcon.Bitcoin />
        </div>
        <Sidebar />
        <PopularTags />
        <PinnedGroup />
        <Button color="orange" className="px-[10px] py-[3px]" rounded>
          Submit
        </Button>
        <Input>
          <OutlineIcon.SearchIcon className="fill-none stroke-secondary2 dark:fill-secondary3" />
        </Input>
        <button
          className="rounded-full bg-[#ff9d00c9] p-2"
          onClick={handleButtonClick}
        >
          {swap ? "Light" : "Dark"} Mode
        </button>
      </div>
    </div>
  );
}
