import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { deleteGroup } from "@/utils/actions/group.action";

type ModalProps = {
  show: boolean;
  closeModal: () => void;
  params: string;
};

export default function DeleteGroupModel({
  show,
  closeModal,
  params,
}: ModalProps) {
  const [menu, setMenu] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const handleButtonClick = async () => {
    setMenu((s) => !s);

    try {
      const result = await deleteGroup(params);
      console.log(result);
      if (result.success) {
        closeModal();
      } else {
        setError(result.message);
      }
    } catch (error) {
      console.error("An error occurred:", error);
      setError("An error occurred while deleting the group.");
    }
  };

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (buttonRef.current && !buttonRef.current.contains(e.target as Node)) {
        setMenu(false);
      }
    };

    if (show) {
      window.addEventListener("click", handleOutsideClick);
    } else {
      window.removeEventListener("click", handleOutsideClick);
    }

    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, [show]);

  return (
    <>
      {show &&
        createPortal(
          <div className="fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-50 flex items-center justify-center backdrop-blur-sm">
            <div className="absolute flex items-center justify-center">
              <div className="flex flex-col gap-4 rounded-2xl bg-white p-8 dark:bg-dark4">
                <div className="mb-[1.875rem]">
                  <h2 className="h3-semibold text-center text-secondary2 dark:text-background2">
                    Confirm you would like to delete this group?
                  </h2>
                </div>
                <div className="flex gap-[1.25rem]">
                  <Link href="/groups">
                    <button
                      className="flex w-[10rem] items-center justify-center gap-[0.625rem] rounded-[0.375rem] bg-blue p-[0.625rem]"
                      onClick={handleButtonClick}
                      ref={buttonRef}
                    >
                      <p className="h3-semibold text-background">
                        Delete Group
                      </p>
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
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
