import React from "react";
import Image from "next/image";
import FillIcon from "../icons/FillIcon";
import { Input } from "../form/Input";
import OutlineIcon from "../icons/OutlineIcon";
import { Button } from "../ui/Button";

const Navbar = () => {
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
            <button className=" gap-2.5 rounded-[7px] p-2.5 focus:bg-primary">
              <FillIcon.Home className="fill-secondary5 focus:fill-background dark:fill-secondary6" />
            </button>
            <button className=" gap-2.5 rounded-[7px] p-2.5 focus:bg-primary">
              <FillIcon.Calendar className="fill-secondary5 focus:fill-background dark:fill-secondary6" />
            </button>
            <button className=" gap-2.5 rounded-[7px] p-2.5 focus:bg-primary">
              <FillIcon.Group className="fill-secondary5 focus:fill-background dark:fill-secondary6" />
            </button>
            <button className="gap-2.5 rounded-[7px] p-2.5 focus:bg-primary">
              <FillIcon.Podcast className="fill-secondary5 focus:fill-background dark:fill-secondary6" />
            </button>
            <button className=" gap-2.5 rounded-[7px] p-2.5 focus:bg-primary">
              <FillIcon.Interviews className="fill-secondary5 focus:fill-background dark:fill-secondary6" />
            </button>
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
