"use client";
import React from "react";
import { createPortal } from "react-dom";
import { leaveGroup } from "@/utils/actions/group.action";

type ModalProps = {
  show: boolean;
  closeModal: () => void;
  groupId: string;
  onLeaveGroup: () => void;
};

type Props = ModalProps;

export default function Modal({
  show,
  closeModal,
  groupId,
  onLeaveGroup,
}: Props) {
  if (!show) return null;

  const submitLeaveGroup = async () => {
    try {
      const response = await leaveGroup(groupId);
      console.log(response);

      closeModal();
      onLeaveGroup();
    } catch (error) {
      console.error("Error leaving group:", error);
    }
  };

  return (
    <>
      {createPortal(
        // eslint-disable-next-line tailwindcss/migration-from-tailwind-2
        <div className="fixed left-0 top-0 z-[15] flex h-full w-full items-center justify-center bg-gray-500 bg-opacity-50 shadow-lg backdrop-blur-sm">
          <div className="absolute flex items-center justify-center">
            <div className="flex flex-col gap-4 rounded-2xl bg-white p-8 dark:bg-dark4">
              <div className="mb-[1.875rem]">
                <h2 className="h3-semibold text-center text-secondary2 dark:text-background2">
                  Confirm you would like to leave this group?
                </h2>
              </div>
              <div className="flex gap-[1.25rem]">
                <button
                  className="flex w-[10rem] items-center justify-center gap-[0.625rem] rounded-[0.375rem] bg-blue p-[0.625rem]"
                  onClick={submitLeaveGroup}
                >
                  <p className="h3-semibold text-background">Leave Group</p>
                </button>
                <button
                  className="my-auto flex items-center"
                  onClick={closeModal}
                >
                  <p className="h3-semibold text-secondary3">Cancel</p>
                </button>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
