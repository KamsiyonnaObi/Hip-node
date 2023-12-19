"use client";
import React, { useEffect, useRef, useState } from "react";

import { ImageFallback as Image } from "../shared/ImageFallback";
import OutlineIcon from "../icons/OutlineIcon";
import EditDeletePopup from "./EditDeletePopup";
import { ShadButton } from "../ui/ShadButton";
import ShareModal from "../home/ShareModal";

interface Props {
  image: string;
  type: string;
  episode: number;
  name: string;
  audioPath: string;
  showEdit: boolean;
  _id: string;
  title: string;
  desc: string;
}

const PodcastBanner = ({
  image,
  type,
  episode,
  name,
  audioPath,
  showEdit,
  _id,
  title,
  desc,
}: Props) => {
  const [showPopup, setShowPopup] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const handleOutsideClick = (e: MouseEvent) => {
    if (!menuRef.current) return;
    if (!menuRef.current.contains(e.target as Node)) {
      setShowPopup(false);
    }
  };

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    window.addEventListener("click", handleOutsideClick);

    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audioElement = audioRef.current;

    const handleTimeUpdate = () => {
      setCurrentTime(audioElement?.currentTime || 0);
      setDuration(audioElement?.duration || 0);
    };

    audioElement?.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      audioElement?.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);

  const [showShareModal, setShowShareModal] = useState(false);

  useEffect(() => {
    if (showShareModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showShareModal]);

  const openShareModal = () => {
    setShowShareModal(true);
  };

  const closeShareModal = () => {
    setShowShareModal(false);
  };

  const handleSeek = (event: { target: { value: any } }) => {
    const timeToSeek = event.target.value;
    audioRef.current!.currentTime = timeToSeek;
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };
  return (
    <div className="w-[335px] gap-2.5 rounded-[16px] bg-background p-[14px] text-secondary2 dark:bg-dark3 dark:text-background2 md:h-[190px] md:w-[785px] md:p-5">
      <div className="flex flex-row gap-5 md:gap-[30px]">
        <section className="h-[50px] w-[80px] md:h-[150px] md:w-[245px]">
          <Image
            src={image}
            alt="image"
            height={50}
            width={50}
            className="h-[50px] w-[50px] rounded-[8px] md:h-[150px] md:w-[150px]"
          />
        </section>
        <section className="flex flex-col gap-2.5 md:gap-4">
          <div className="flex w-[207px] flex-row justify-between md:w-[470px]">
            <div className="flex flex-col md:gap-[2px]">
              <p className="text-xs-regular md:caption-regular">
                {type} . Episode {episode}
              </p>
              <p className="body-semibold md:h3-semibold">by {name}</p>
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
                  <EditDeletePopup podcastId={_id} />
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-2.5">
            <div className="flex flex-row gap-5">
              <input
                type="range"
                min="0"
                max={duration}
                value={currentTime}
                onChange={handleSeek}
                className="mt-[4px] h-[4px] w-[141px] md:mt-1.5 md:h-2.5 md:w-[375px]"
              />
              <span className="md:body-regular text-sm-regular">
                {formatTime(currentTime)} | {formatTime(duration)}
              </span>
            </div>
            <div className="flex flex-row gap-5">
              <ShadButton
                className="md:display-semibold body-semibold w-[110px] gap-2.5 rounded-[20px] bg-blue text-white hover:bg-blue/70 hover:text-white"
                onClick={togglePlay}
              >
                <Image
                  src="/PlayButton.svg"
                  alt="play"
                  width={16}
                  height={16}
                  className="h-4 w-4"
                />{" "}
                {isPlaying ? "Pause" : "Play"}
              </ShadButton>
              <button
                className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-secondary3"
                onClick={openShareModal}
              >
                <OutlineIcon.Share2 />
              </button>
              <audio ref={audioRef} src={audioPath} />
            </div>
            {showShareModal && (
              <>
                <div
                  className="fixed inset-0 z-10 bg-black opacity-50"
                  onClick={closeShareModal}
                ></div>
                <ShareModal
                  url={window.location.href}
                  close={closeShareModal}
                  title={title}
                  body={desc}
                />
              </>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default PodcastBanner;
