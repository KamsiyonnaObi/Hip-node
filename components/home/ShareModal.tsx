"use client";
import React, { useState } from "react";
import copy from "copy-to-clipboard";
import Tooltip from "@mui/material/Tooltip";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
  FacebookMessengerIcon,
  FacebookMessengerShareButton,
  EmailIcon,
  EmailShareButton,
} from "next-share";

import OutlineIcon from "../icons/OutlineIcon";

interface Props {
  url: string;
  close: () => void;
  title: string;
  body: string;
}

const ShareModal = ({ url, close, title, body }: Props) => {
  const [isCopied, setIsCopied] = useState(false);
  const handleCopy = () => {
    setIsCopied(true);
    copy(url);
    setTimeout(() => {
      setIsCopied(false);
    }, 1500);
  };
  return (
    <section className="fixed left-1/2 top-1/2 z-10 flex h-96 w-96 -translate-x-1/2 -translate-y-1/2 flex-col gap-[30px] rounded-lg bg-secondary p-[30px] dark:bg-dark3">
      <div className="flex justify-end">
        <button
          onClick={close}
          className="flex h-10 w-10 items-center justify-center text-lg"
        >
          <OutlineIcon.Close />
        </button>
      </div>
      <p className="h3-semibold text-secondary3">Share this link via</p>
      <div className="flex items-center justify-between">
        <FacebookShareButton url={url} quote={body}>
          <FacebookIcon size={40} round />
        </FacebookShareButton>
        <FacebookMessengerShareButton url={url} appId={""}>
          <FacebookMessengerIcon size={40} round />
        </FacebookMessengerShareButton>

        <TwitterShareButton url={url} title={title}>
          <TwitterIcon size={40} round />
        </TwitterShareButton>

        <LinkedinShareButton url={url}>
          <LinkedinIcon size={40} round />
        </LinkedinShareButton>
        <EmailShareButton url={url} subject={title} body={body}>
          <EmailIcon size={40} round />
        </EmailShareButton>
      </div>
      <p className="h3-semibold text-secondary3">Or copy link</p>
      <Tooltip open={isCopied} title="Copied!" placement="right-end">
        <button
          onClick={handleCopy}
          className="h3-semibold flex justify-between border border-secondary3 p-2.5 text-secondary3"
        >
          <input
            className="w-full bg-transparent focus:outline-none"
            value={url}
          />
          <OutlineIcon.Copy className="fill-secondary3" />
        </button>
      </Tooltip>
    </section>
  );
};

export default ShareModal;
