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
    <div className="flex h-[5.675rem] w-[10.625rem] flex-col gap-[.62rem] rounded-[0.625rem] border border-secondary5 bg-background2 p-[1.25rem] dark:border-secondary2 dark:bg-dark4">
      <Link href={`/groups/update/${id}`}>
        <div className="flex items-center gap-[0.625rem]">
          <OutlineIcon.Edit className="dark:fill-white" />
          <p className="body-semibold text-secondary2 dark:text-background2">
            Edit Group Info
          </p>
        </div>
      </Link>
      <div>
        <button onClick={handleDeleteClick}>
          <div className="flex items-center gap-[0.625rem]">
            <OutlineIcon.Trash className="fill-transparent stroke-red90" />
            <p className="body-semibold text-red90">Delete Group</p>
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
