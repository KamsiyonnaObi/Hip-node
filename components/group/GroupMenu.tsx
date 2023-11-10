"use client";

import React, { useState } from "react";
import Link from "next/link";

import OutlineIcon from "../icons/OutlineIcon";
import DeleteGroupModal from "@/components/group/DeleteGroupModal";

const GroupMenu = ({ id }: { id: string }) => {
  const [showDelete, setShowDelete] = useState(false);
  const handleDeleteClick = async () => {
    setShowDelete(true);
  };

  return (
    <div className="flex flex-col w-[10.625rem] p-[1.25rem] h-[5.675rem] rounded-[0.625rem] border border-secondary5 bg-background2 dark:bg-dark4 dark:border-secondary2 gap-[.62rem]">
      <Link href={`/groups/update/${id}`}>
        <div className="flex items-center gap-[0.625rem]">
          <OutlineIcon.Edit className="dark:fill-white" />
          <p className="text-secondary2 body-semibold dark:text-background2">
            Edit Group Info
          </p>
        </div>
      </Link>
      <div>
        <button onClick={handleDeleteClick}>
          <div className="flex items-center gap-[0.625rem]">
            <OutlineIcon.Trash className="fill-transparent" />
            <p className="text-secondary2 body-semibold dark:text-background2">
              Delete Group
            </p>
          </div>
        </button>
      </div>
      <DeleteGroupModal
        show={showDelete}
        closeModal={() => setShowDelete(false)}
        params={id}
      />
    </div>
  );
};

export default GroupMenu;
