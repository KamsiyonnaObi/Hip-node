import Image from "next/image";
import { Input } from "./form/Input";
import React from "react";
import { Button } from "./ui/Button";

const CreatePost = () => {
  return (
    <article className="flex flex-row gap-[10px] rounded-[16px] bg-background p-[14px] dark:bg-dark3 md:p-[20px]">
      <div className="flex flex-row gap-[10px] md:gap-[20px]">
        <div className=" flex h-[30px] w-[30px] items-center justify-center rounded-full bg-yellow30 md:h-[40px] md:w-[40px]">
          <Image
            className="w-[22px] md:w-[30px]"
            src="/ExampleAvatar.png"
            alt="profile"
            width="30"
            height="32"
          />
        </div>
        <Input
          className="caption-regular md:body-regular w-[174px] gap-[10px] rounded-[6px] bg-secondary6 py-2 pl-2.5 md:w-[553px] md:p-3"
          placeholder="Let's share what is going on..."
          value=""
          onChange=""
        />
        <Button
          color="orange"
          className="caption-semibold md:body-semibold gap-2.5 rounded-[6px] px-3 py-2 text-center md:px-4 md:py-3"
        >
          Create Post
        </Button>
      </div>
    </article>
  );
};

export default CreatePost;
