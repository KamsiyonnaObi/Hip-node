"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

import OutlineIcon from "../icons/OutlineIcon";
import { deletePost } from "@/utils/actions/post.action";

const EditDeletePopup = ({ postId }: { postId: string }) => {
  const router = useRouter();
  const [selected, setSelected] = useState(0);

  const handleSelect = (val: any) => {
    setSelected(val);
  };

  const handleCloseForm = async (val: string) => {
    if (val === "Edit") {
      router.push(`/posts/edit/${postId}`);
    }
    if (val === "Delete") {
      try {
        await deletePost(postId);
        window.location.reload();
      } catch (error) {
        console.error("Error deleting post");
      }
    }
    setSelected(0);
  };

  return (
    <ul className=" w-[170px] gap-2.5 rounded-[10px] border border-secondary5 bg-background p-4 dark:border-secondary2 dark:bg-dark4">
      <ul className="flex flex-col gap-2.5">
        <li
          className={`flex w-[98px] cursor-pointer flex-row justify-start gap-2.5 ${
            selected === 1
              ? "text-red80"
              : "text-secondary2 dark:text-background2"
          }`}
          onMouseOver={() => handleSelect(1)}
          onClick={() => handleCloseForm("Edit")}
        >
          <OutlineIcon.Edit
            className={`${
              selected === 1
                ? "fill-red80"
                : "fill-secondary2 dark:fill-background2"
            } `}
          />
          <h3 className="caption-semibold">Edit Post</h3>
        </li>
        <li
          className={`flex w-[98px] cursor-pointer flex-row justify-start gap-2.5 ${
            selected === 2
              ? "text-red80"
              : "text-secondary2 dark:text-background2"
          }`}
          onMouseOver={() => handleSelect(2)}
          onClick={() => handleCloseForm("Delete")}
        >
          <OutlineIcon.Trash
            className={`${
              selected === 2
                ? "stroke-red80"
                : "stroke-secondary2 dark:stroke-background2"
            } `}
          />
          <h3 className="caption-semibold">Delete Post</h3>
        </li>
      </ul>
    </ul>
  );
};

export default EditDeletePopup;
