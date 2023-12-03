import React from "react";
import Link from "next/link";
import { ShadButton } from "../ui/ShadButton";

interface Props {
  title: string;
  desc: string;
  buttonText: string;
  buttonLink: string;
}

const HostCard = ({ title, desc, buttonText, buttonLink }: Props) => {
  return (
    <article className="bg-[url('https://i.ibb.co/ch6kNrt/Host-Meetup.png') flex w-full items-center justify-between rounded-2xl bg-[#FF7C4D] p-5  text-white">
      <div className="flex max-w-[325px] flex-col gap-5">
        <div className="flex flex-col gap-2">
          <p className="text-lg font-semibold">{title}</p>
          <small className="text-xs">{desc}</small>
        </div>
        <div className="flex justify-between">
          <ShadButton className="bg-red60 text-red10">
            Code of Conduct
          </ShadButton>
          <Link href={`${buttonLink}`}>
            <ShadButton className="bg-white text-red80 hover:text-white">
              {buttonText}
            </ShadButton>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default HostCard;
