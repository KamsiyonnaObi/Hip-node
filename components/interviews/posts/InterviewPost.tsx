"use client";

import Image from "next/image";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";
import { ShadButton } from "@/components/ui/ShadButton";
import { InterviewImage } from "@/utils/images";
import { formatNumber, getTimestamp } from "@/utils";

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
}: Props) => {
  return (
    <article className="flex w-full items-center justify-between gap-8 rounded-2xl bg-bkg-2 p-5 text-interviewText md:flex-row">
      <div className="flex w-full flex-col gap-5 lg:max-w-[435px]">
        <div className="flex items-center gap-4">
          <Avatar>
            {/* Dynamic Image for users need to be implemented */}
            <AvatarImage
              src="https://github.com/shadcn.png"
              alt="User Avatar"
            />
            {/* Modify to say username initials */}
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div>
            <address className="font-semibold not-italic">{username}</address>
            <time className="text-sm text-secondary3">
              {getTimestamp(createdAt)}
            </time>
          </div>
        </div>
        <div className="rounded-lg lg:hidden ">
          <Image
            src={InterviewImage}
            alt="Interview Image"
            className="w-full object-cover"
          />
        </div>
        <h2 className="text-lg font-semibold">{title}</h2>
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
                <div className="flex flex-col items-center pl-6">
                  <p className="text-sm font-bold">{updates}</p>
                  <small className="text-xs text-secondary3">Updates</small>
                </div>
                <div className="flex flex-col items-center pl-6">
                  <p className="text-sm font-bold">Image</p>
                  <small className="text-xs text-secondary3">Website</small>
                </div>
              </div>
            </div>
            <ShadButton className="bg-blue text-white hover:bg-blue/70 hover:text-white">
              Full Details
            </ShadButton>
          </div>
        </div>
      </div>
      <div className="hidden rounded-lg lg:block">
        <Image
          src={image}
          alt="Interview Image"
          width={280}
          height={180}
          className="md:w-[280px] md:h-[180px] w-[307px] h-[200px]"
        />
      </div>
    </article>
  );
};

export default InterviewPost;
