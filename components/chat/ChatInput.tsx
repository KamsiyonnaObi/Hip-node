"use client";

import React, { useState, useEffect } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

import FillIcon from "../icons/FillIcon";
import OutlineIcon from "../icons/OutlineIcon";
import { createMessage } from "@/utils/actions/message.action";
import { useSocketContext } from "@/providers/SocketProvider";

const ChatInput = () => {
  const { currentPartner } = useSocketContext();
  const [inputValue, setInputValue] = useState("");
  const [usingSpeech, setUsingSpeech] = useState(false);
  const [support, setSupport] = useState(false);

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  useEffect(() => {
    setInputValue(transcript);
  }, [transcript]);

  useEffect(() => {
    setSupport(browserSupportsSpeechRecognition);
  }, [browserSupportsSpeechRecognition]);

  const handleSubmit = async () => {
    if (inputValue.trim() === "") {
      return;
    }
    await createMessage({
      userIdTo: currentPartner?._id?.toString() || "",
      text: inputValue,
    });
    setInputValue("");
    setUsingSpeech(false);
  };

  const handleSpeechInput = async () => {
    await SpeechRecognition.startListening();
    setUsingSpeech(true);
  };

  const handleTextChange = () => {
    setUsingSpeech(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <section className="flex h-16 items-center gap-5">
      <section className="relative flex flex-1 ">
        <div className="flex flex-1 items-center gap-2.5">
          <div
            className={
              "relative flex flex-1 flex-wrap items-center justify-between gap-[15px] rounded-2xl border border-secondary5 bg-secondary6 px-[15px] py-2.5 text-contents dark:border-secondary2 dark:bg-secondary2 md:w-5"
            }
          >
            <div className="flex items-center">
              <button>
                <OutlineIcon.LinkIcon className="w-6- h-6 stroke-secondary4" />
              </button>
            </div>
            <input
              className="md:display-regular caption-regular h-[18px] flex-1 resize-none items-center justify-start bg-secondary6 text-secondary4 placeholder:text-secondary4 focus:outline-none dark:bg-secondary2 md:h-[22px]"
              placeholder="Type here your message..."
              onChange={(e) => {
                handleTextChange();
                setInputValue(e.target.value);
              }}
              onKeyDown={handleKeyDown}
              value={inputValue}
            />

            <div className={`${!support ? "hidden" : "flex"} items-center`}>
              {listening ? (
                <button
                  onClick={async () => {
                    await SpeechRecognition.stopListening();
                  }}
                >
                  <OutlineIcon.Voice className="h-6 w-6 fill-none stroke-red" />
                </button>
              ) : usingSpeech ? (
                <button
                  onClick={() => {
                    resetTranscript();
                    setUsingSpeech(false);
                  }}
                >
                  <OutlineIcon.Trash className="h-6 w-6 fill-none stroke-secondary4" />
                </button>
              ) : inputValue ? null : (
                <button onClick={handleSpeechInput}>
                  <OutlineIcon.Voice className="h-6 w-6 fill-none stroke-secondary4" />
                </button>
              )}
            </div>
          </div>
          <button
            className="relative h-8 w-8 shrink-0 rounded-full text-secondary2 dark:text-background"
            onClick={handleSubmit}
          >
            <FillIcon.Send className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 fill-secondary2 dark:fill-background2" />
          </button>
        </div>
      </section>
    </section>
  );
};

export default ChatInput;
