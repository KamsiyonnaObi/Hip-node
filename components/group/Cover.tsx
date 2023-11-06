"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Modal from "./Modal";
import FillIcon from "../icons/FillIcon";
import OutlineIcon from "../icons/OutlineIcon";
import GroupMenu from "./GroupMenu";

const Cover = ({
  user,
  title,
  coverUrl,
  groupUrl,
}: {
  user: string;
  title: string;
  coverUrl: string;
  groupUrl: string;
}) => {
  const [show, setShow] = useState(false);
  const [menu, setMenu] = useState(false);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const handleButtonClick = () => {
    setMenu((s) => !s);
  };

  const handleOutsideClick = (e: MouseEvent) => {
    if (buttonRef.current && !buttonRef.current.contains(e.target as Node)) {
      setMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleOutsideClick);

    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, []);
  return (
    <div className="bg-background dark:bg-dark3 flex h-[9.5rem] w-[20.9375rem] shrink-0 flex-col gap-[.625rem] rounded-[1rem] p-[.625rem] sm:h-[18.375rem] sm:w-full">
      <div className="flex sm:hidden">
        <Image
          src={coverUrl}
          alt="GroupCover"
          width={315}
          height={75}
          className="rounded-[1rem] w-[315px] h-[72px]"
        />
      </div>
      <div className="hidden sm:flex">
        <Image
          src={coverUrl}
          alt="GroupCover"
          width={780}
          height={174}
          className="w-[780px] h-[174px] rounded-[1rem]"
        />
      </div>
      <div className="mt-[.88rem] flex justify-between sm:mt-[1.25rem]">
        <div className="flex items-center gap-[.86rem]">
          <div>
            <Image
              src={groupUrl}
              alt="GroupCover"
              width={40}
              height={40}
              className="rounded-full w-[40px] h-[40px]"
            />
          </div>
          <div className="flex flex-col">
            <div>
              <h2 className="display-semibold md:h1-semibold text-secondary2 dark:text-background2">
                {title}
              </h2>
            </div>
            <div className="flex gap-[.31rem]">
              <p className="text-sm-regular sm:body-regular text-secondary3">
                Created by
              </p>
              <p className="caption-semibold sm:body-semibold text-secondary2 dark:text-background2 ">
                {user}
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-[.62rem]">
          <div onClick={() => console.log("Clicked")}>
            <button
              className="flex h-10 items-center gap-[.62rem] self-center bg-background2 p-[.62rem] dark:bg-dark4"
              onClick={() => setShow((s) => !s)}
            >
              <div>
                <FillIcon.Leave className="fill-secondary3" />
              </div>
              <p className="caption-semibold text-secondary3">Leave</p>
            </button>
            <Modal show={show} closeModal={() => setShow(false)} />
          </div>
          <div className="relative" onClick={() => console.log("Clicked")}>
            <button ref={buttonRef} onClick={handleButtonClick}>
              <OutlineIcon.VerticalDots className="fill-secondary5" />
            </button>
            {menu && (
              <div
                className="absolute top-[50%] translate-x-[-100%]">
                <GroupMenu />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cover;
