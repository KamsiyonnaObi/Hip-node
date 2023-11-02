"use client";
import React from "react";
import { createPortal } from "react-dom";
import Link from "next/link";

type Props = { show: any; closeModal: any };

export default function Modal({ show, closeModal }: Props) {
  if (!show) return null;
  return (
    <>
      {createPortal(
        <div className="fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-50 flex items-center justify-center backdrop-blur-sm">
          <div className="absolute flex items-center justify-center">
      <div className="flex flex-col gap-4 rounded-2xl bg-white p-8 dark:bg-dark4">
              <div className="mb-[1.875rem]">
                <h2 className="h3-semibold text-center text-secondary2 dark:text-background2">
                  Are You Sure to Leave From This Group?
                </h2>
              </div>
              <div className="flex gap-[1.25rem]">
                <Link href={""}>
                  <button className="flex w-[10rem] items-center justify-center gap-[0.625rem] rounded-[0.375rem] bg-blue p-[0.625rem]">
                    <p className="h3-semibold text-background">Leave Group</p>
                  </button>
                </Link>
                <button
                  className="my-auto flex items-center"
                  onClick={closeModal}
                >
                  <p className="h3-semibold text-secondary3">Cancel</p>
                </button>
              </div>
            </div>
          </div>{" "}
        </div>,
        document.body
      )}
    </>
  );
}