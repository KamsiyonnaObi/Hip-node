"use client";
import { ImageFallback as Image } from "@/components/shared/ImageFallback";
import { Input } from "../form/Input";
import React, { useState } from "react";
import { Button } from "../ui/Button";
import Link from "next/link";

const CreatePost = ({ avatar }: { avatar: string }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: any) => {
    setInputValue(e.target.value);
  };

  return (
    <article className="flex w-full flex-row gap-[10px] rounded-[16px] bg-background p-[14px] shadow-lg dark:bg-dark3 md:p-[20px]">
      <div className="flex w-full flex-row items-center gap-[10px] md:gap-[20px]">
        <div className=" m-auto flex w-[50px] items-center justify-center rounded-full md:h-[40px]">
          <Image
            className="m-auto w-[30px] rounded-full md:w-[40px]"
            src={avatar}
            alt="profile"
            width={32}
            height={32}
          />
        </div>
        <div className="w-full">
          <Input
            className="caption-regular md:body-regular w-full gap-[10px] rounded-[6px] bg-secondary6 py-2 pl-2.5 md:p-3"
            placeholder="Let's share what is going on..."
            value={inputValue}
            onChange={handleInputChange}
          />
        </div>
        <div className="w-[150px]">
          <Link href={`/posts/new?title=${inputValue}`}>
            <Button
              color="orange"
              className="caption-semibold md:body-semibold gap-2.5 rounded-[6px] px-3 py-2 text-center md:px-4 md:py-3"
            >
              Create Post
            </Button>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default CreatePost;
