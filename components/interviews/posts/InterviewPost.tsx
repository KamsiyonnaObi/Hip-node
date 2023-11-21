"use client";

import Image from "next/image";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";
import { ShadButton } from "@/components/ui/ShadButton";
import { InterviewImage } from "@/utils/images";
import { formatNumber, getTimestamp } from "@/utils";
import OutlineIcon from "@/components/icons/OutlineIcon";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import EditDeletePopup from "../EditDeletePopup";

interface Props {
  username: string;
  createdAt: Date;
  title: string;
  content: string;
  revenue: number;
  updates: number;
  website: string;
  image: string;
  _id: string;
  userId?: string;
  showEdit: boolean;
}

const InterviewPost = ({
  username,
  createdAt,
  title,
  content,
  revenue,
  updates,
  website,
  image,
  _id,
  userId,
  showEdit,
}: Props) => {
  const [showPopup, setShowPopup] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const handleOutsideClick = (e: MouseEvent) => {
    if (!menuRef.current) return;
    if (!menuRef.current.contains(e.target as Node)) {
      setShowPopup(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleOutsideClick);

    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, []);
  return (
    <article className="flex w-full items-center justify-between gap-8 rounded-2xl bg-bkg-2 p-5 text-interviewText md:flex-row">
      <div className="flex w-full flex-col gap-5 lg:max-w-[435px]">
        <div className="flex flex-row justify-between">
          <div className="flex items-center gap-4">
            <Avatar>
              <AvatarImage
                src="https://github.com/shadcn.png"
                alt="User Avatar"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
              <address className="font-semibold not-italic">{username}</address>
              <time className="text-sm text-secondary3">
                {getTimestamp(createdAt)}
              </time>
            </div>
          </div>
          <div
            className="relative"
            ref={menuRef}
            onClick={() => setShowPopup(!showPopup)}
          >
            {showEdit && (
              <OutlineIcon.VerticalDots className="fill-secondary5" />
            )}
            {showPopup && (
              <div className="absolute right-1 top-6">
                <EditDeletePopup interviewId={_id} />
              </div>
            )}
          </div>
        </div>

        <div className="rounded-lg lg:hidden ">
          <Image
            src={InterviewImage}
            alt="Interview Image"
            className="w-full object-cover"
          />
        </div>
        <h2 className="line-clamp-2 text-lg font-semibold">{title}</h2>
        <div className="flex">
          <div className="flex w-full flex-col justify-between gap-5 sm:flex-row">
            <div>
              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <p className="text-sm font-bold">
                    ${formatNumber(revenue)}/mo
                  </p>
                  <small className="text-xs text-secondary3">Revenue</small>
                </div>
                <div className="flex flex-col items-center border-l-2 border-solid border-gray-500 pl-6">
                  <p className="text-sm font-bold">{updates}</p>
                  <small className="text-xs text-secondary3">Updates</small>
                </div>
                <a
                  href={`https://${website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center border-l-2 border-solid border-gray-500 pl-6"
                >
                  <p className="text-sm font-bold">
                    <OutlineIcon.Web className="fill-secondary2 dark:fill-background2" />
                  </p>
                  <small className="text-xs text-secondary3">Website</small>
                </a>
              </div>
            </div>
            <Link href={`/interview/${_id}`}>
              {" "}
              <ShadButton className="bg-blue text-white hover:bg-blue/70 hover:text-white">
                Full Details
              </ShadButton>
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden rounded-lg lg:block">
        <Image
          src={image}
          alt="Interview Image"
          width={280}
          height={180}
          className="h-[200px] w-[307px] rounded-[16px] md:h-[180px] md:w-[280px]"
        />
      </div>
    </article>
  );
};

export default InterviewPost;
