"use client";

import { ImageFallback as Image } from "@/components/shared/ImageFallback";
import Link from "next/link";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";
import { ShadButton } from "@/components/ui/ShadButton";
import { formatNumber, getTimestamp } from "@/utils";
import OutlineIcon from "@/components/icons/OutlineIcon";
import { useEffect, useRef, useState } from "react";
import EditDeletePopup from "../EditDeletePopup";

interface Props {
  username: string;
  createdAt: Date;
  title: string;
  revenue: number;
  updates: number;
  website: string;
  image: string;
  _id: string;
  avatar: string;
  showEdit: boolean;
}

const InterviewPost = ({
  username,
  createdAt,
  title,
  revenue,
  updates,
  website,
  image,
  avatar,
  _id,
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
    <article className="flex w-full items-center justify-between gap-8 rounded-2xl bg-bkg-2 p-5 text-interviewText shadow-lg md:flex-row">
      <div className="flex w-full flex-col gap-5 lg:max-w-[435px]">
        <div className="flex flex-row justify-between">
          <div className="flex items-center gap-4">
            <Avatar>
              <AvatarImage src={avatar} alt="User Avatar" />
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
            className="relative cursor-pointer"
            ref={menuRef}
            onClick={() => setShowPopup(!showPopup)}
          >
            {showEdit && (
              <OutlineIcon.VerticalDots className="fill-secondary5" />
            )}
            {showPopup && (
              <div className="absolute right-1 top-6 ">
                <EditDeletePopup interviewId={_id} />
              </div>
            )}
          </div>
        </div>

        <div className="rounded-lg lg:hidden ">
          <Image
            src={image}
            alt="Interview Image"
            width={280}
            height={180}
            className="w-full rounded-[16px] object-cover"
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
                  href={
                    website.includes("http") ? website : `https://${website}`
                  }
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
            <Link href={"/interview/" + _id}>
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
          className="h-[200px] w-[307px] rounded-xl object-cover md:h-[180px] md:w-[280px]"
        />
      </div>
    </article>
  );
};

export default InterviewPost;
