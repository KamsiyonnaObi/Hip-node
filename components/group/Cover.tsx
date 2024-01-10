"use client";
import { ImageFallback as Image } from "@/components/shared/ImageFallback";
import React, { useEffect, useRef, useState } from "react";
import Modal from "./Modal";
import FillIcon from "../icons/FillIcon";
import OutlineIcon from "../icons/OutlineIcon";
import GroupMenu from "./GroupMenu";
import { joinGroup, isMember, leaveGroup } from "@/utils/actions/group.action";
import { pinAGroup, unpinAGroup } from "@/utils/actions/user.action";

const Cover = ({
  user,
  title,
  coverUrl,
  groupUrl,
  groupId,

  pinnedGroup,
}: {
  user: string;
  title: string;
  coverUrl: string;
  groupUrl: string;
  groupId: string;

  pinnedGroup: boolean;
}) => {
  const [show, setShow] = useState(false);
  const [menu, setMenu] = useState(false);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const [isMemberSelect, setIsMemberSelect] = useState(false);
  const [isPinned, setIsPinned] = useState(pinnedGroup);

  const handleButtonClick = () => {
    setMenu((s) => !s);
  };

  const handleOutsideClick = (e: MouseEvent) => {
    if (!menuRef.current || !buttonRef.current) return;
    if (
      !menuRef.current.contains(e.target as Node) &&
      !buttonRef.current.contains(e.target as Node)
    ) {
      setMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleOutsideClick);

    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, []);
  const handleLeaveGroup = () => {
    setIsMemberSelect(false);
  };
  const submitJoinGroup = async () => {
    try {
      if (isMemberSelect) {
        await leaveGroup(groupId);
      } else {
        await joinGroup(groupId);
      }

      setIsMemberSelect(!isMemberSelect);
    } catch (error) {
      console.error("Error interacting with the group:", error);
    }
  };

  useEffect(() => {
    const checkMember = async () => {
      try {
        const response = await isMember(groupId);
        setIsMemberSelect(response.isMember);
      } catch (error) {
        console.error("Error checking group membership:", error);
      }
    };

    checkMember();
  }, [groupId]);

  const handlePinClick = async () => {
    try {
      await pinAGroup({ groupId });
      setIsPinned(true);
    } catch (error) {
      console.error("Failed to pin the group", error);
    }
  };

  const handleUnpinClick = async () => {
    try {
      await unpinAGroup({ groupId });
      setIsPinned(false);
    } catch (error) {
      console.error("Failed to unpin the group", error);
    }
  };
  return (
    <div className="flex w-[20.9375rem] shrink-0 flex-col gap-[.625rem] rounded-[1rem] bg-background p-[.625rem] shadow-lg dark:bg-dark3 sm:h-[18.375rem] sm:w-full">
      <div className="flex sm:hidden">
        <Image
          src={coverUrl}
          alt="GroupCover"
          width={315}
          height={75}
          className="h-[72px] w-[315px] rounded-[1rem]"
        />
      </div>
      <div className="hidden sm:flex">
        <Image
          src={coverUrl}
          alt="GroupCover"
          width={780}
          height={174}
          className="h-[174px] w-[780px] rounded-[1rem] object-cover"
        />
      </div>
      <div className="mt-[.88rem] flex justify-between sm:mt-[1.25rem]">
        <div className="flex items-center gap-[.86rem] lg:pl-[.625rem]">
          <Image
            src={groupUrl}
            alt="GroupCover"
            width={40}
            height={40}
            className="h-[40px] w-[40px] rounded-full"
          />
          <div className="flex flex-col">
            <h2 className="display-semibold md:h1-semibold flex text-secondary2 dark:text-background2">
              {title}
              <div className="ml-[0.125rem]">
                {isPinned ? (
                  // Show unpin icon if the group is already pinned
                  <div onClick={handleUnpinClick}>
                    <OutlineIcon.Pin className="w-[.75rem h-[.75rem] cursor-pointer fill-green" />
                  </div>
                ) : (
                  // Show pin icon if the group is not pinned
                  <div onClick={handlePinClick}>
                    <OutlineIcon.Pin className="ml-[.125rem] h-[.75rem] w-[.75rem] cursor-pointer dark:fill-background" />
                  </div>
                )}
              </div>
            </h2>
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
          <div>
            {isMemberSelect ? (
              <button
                className="flex h-10 items-center gap-[.62rem] self-center bg-background2 p-[.62rem] dark:bg-dark4"
                onClick={() => setShow((s) => !s)}
              >
                <FillIcon.Leave className="fill-secondary3" />
                <p className="caption-semibold text-secondary3">Leave</p>
              </button>
            ) : (
              <button
                className="flex h-10 items-center gap-[.62rem] self-center bg-background2 p-[.62rem] dark:bg-dark4"
                onClick={submitJoinGroup}
              >
                <FillIcon.Profile className="fill-secondary3" />
                <p className="caption-semibold text-secondary3">Join</p>
              </button>
            )}
            <Modal
              show={show}
              closeModal={() => setShow(false)}
              groupId={groupId}
              onLeaveGroup={handleLeaveGroup}
            />
          </div>
          <div className="relative">
            <button ref={buttonRef} onClick={handleButtonClick}>
              <OutlineIcon.VerticalDots className="fill-secondary5" />
            </button>
            {menu && (
              <div
                className="absolute top-[50%] translate-x-[-100%]"
                ref={menuRef}
              >
                <GroupMenu id={groupId} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cover;
