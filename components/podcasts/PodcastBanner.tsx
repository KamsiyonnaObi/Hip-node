"use client";
import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

import { ImageFallback as Image } from "../shared/ImageFallback";
import OutlineIcon from "../icons/OutlineIcon";
import EditDeletePopup from "./EditDeletePopup";
import { ShadButton } from "../ui/ShadButton";
import ShareModal from "../home/ShareModal";
import { useOutsideClick } from "@/hooks/useOutsideClick";

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
  showBottomBar: boolean;
  playState: boolean;
  setPlayState: any;
  hidePodcastBanner: any;
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
  showBottomBar,
  playState,
  setPlayState,
  hidePodcastBanner,
}: Props) => {
  const { ref: menuRef, isOpen: showPopup, toggleOpen } = useOutsideClick();

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(playState);
  const [minimize, setMinimize] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [showVolume, setShowVolume] = useState(false);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
    setPlayState(!isPlaying);
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  const handleShowVolume = () => {
    setShowVolume(!showVolume);
  };

  useEffect(() => {
    setIsPlaying(playState);
  }, [playState]);

  const toggleClose = () => {
    audioRef.current?.pause();
    setPlayState(false);
    setIsPlaying(false);
    hidePodcastBanner();
  };

  const toggleMinimize = () => {
    setMinimize(!minimize);
  };

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

  const positionCSS = showBottomBar
    ? "bottom-[68px] md:bottom-0 border-2 border-primary ml-2.5 mb-2.5"
    : "top-[90px] md:top-[100px] left-[50%] transform translate-x-[-50%]";

  const showFull = !minimize || !showBottomBar;

  return (
    <div
      className={`${positionCSS} fixed w-[335px] gap-2.5 rounded-[16px]  bg-background p-[14px] text-secondary2 dark:bg-dark3 dark:text-background2 ${
        !minimize && "md:h-[190px]"
      } md:w-[785px] md:p-5`}
    >
      <div className={`flex flex-row justify-between gap-5 md:gap-[30px]`}>
        {showFull && (
          <section className="hidden h-[50px] w-[80px] md:flex md:h-[150px] md:w-[245px]">
            <Image
              src={image}
              alt="image"
              key={image.toString()}
              height={50}
              width={50}
              className="h-[50px] w-[50px] rounded-[8px] md:h-[150px] md:w-[150px]"
            />
          </section>
        )}
        <section className="flex w-full flex-col">
          <div className="flex w-full flex-row justify-between">
            {showFull && (
              <section className="flex md:hidden">
                <Image
                  src={image}
                  alt="image"
                  key={image.toString()}
                  height={50}
                  width={50}
                  className="h-[50px] w-[50px] rounded-[8px] md:h-[150px] md:w-[150px]"
                />
              </section>
            )}
            <div className={`flex w-full flex-row justify-between`}>
              <div className="flex flex-col md:gap-[2px]">
                <p className="text-xs-regular md:caption-regular">
                  {type} . Episode {episode}
                </p>
                {showFull && (
                  <p className="body-semibold md:h3-semibold">by {name}</p>
                )}
              </div>
              {showBottomBar ? (
                <div
                  className="flex flex-row gap-5"
                  ref={menuRef}
                  onClick={toggleOpen}
                >
                  <div onClick={toggleMinimize}>
                    {!showFull ? (
                      <OutlineIcon.UpArrow />
                    ) : (
                      <OutlineIcon.DownArrow />
                    )}
                  </div>
                  <div onClick={toggleClose}>
                    <OutlineIcon.Close />
                  </div>
                </div>
              ) : (
                <div className="relative" ref={menuRef} onClick={toggleOpen}>
                  {showEdit && (
                    <OutlineIcon.VerticalDots className="fill-secondary5" />
                  )}
                  {showPopup && (
                    <div className="absolute right-1 top-6">
                      <EditDeletePopup podcastId={_id} />
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-2.5">
            {showFull && (
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
            )}
            <div className="flex flex-row gap-5">
              {showFull && (
                <ShadButton
                  className="md:display-semibold body-semibold w-[110px] gap-2.5 rounded-[20px] bg-blue text-white hover:bg-blue/70 hover:text-white"
                  onClick={togglePlay}
                >
                  {isPlaying ? (
                    <>
                      <OutlineIcon.Pause />
                      Pause
                    </>
                  ) : (
                    <>
                      <OutlineIcon.Play />
                      Play
                    </>
                  )}
                </ShadButton>
              )}

              {showFull && (
                <button
                  className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-secondary3"
                  onClick={openShareModal}
                >
                  <OutlineIcon.Share2 />
                </button>
              )}

              {showFull && (
                <button
                  className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-secondary3"
                  onClick={handleShowVolume}
                >
                  <OutlineIcon.Volume />
                </button>
              )}

              {showFull && showVolume && (
                <input
                  type="range"
                  id="volume"
                  name="volume"
                  min="0"
                  max="1"
                  step="0.01"
                  value={volume}
                  onChange={handleVolumeChange}
                  className="w-16 md:w-32"
                />
              )}

              <audio ref={audioRef} src={audioPath} />
            </div>
            {showShareModal &&
              createPortal(
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
                </>,
                document.body
              )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default PodcastBanner;
