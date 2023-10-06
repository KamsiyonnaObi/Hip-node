import Image from "next/image";
import Input from "./ui/Input";
import React from "react";
import { Button } from "./ui/Button";

const CreatePost = () => {
  return (
    <article className="flex flex-row gap-[10px] rounded-[16px] bg-background p-[14px] dark:bg-dark3 md:p-[20px]">
      <div className="flex flex-row gap-[10px] md:gap-[20px]">
        <div className="mt-[5px] flex h-[30px] w-[30px] items-center justify-center rounded-full bg-yellow30 md:mt-[7px] md:h-[40px] md:w-[40px]">
          <Image
            className="w-[22px] md:w-[32px]"
            src="/ExampleAvatar.png"
            alt="profile"
            width="32"
            height="30"
          />
        </div>
        <Input
          className="caption-regular md:body-regular w-[174px] gap-[10px] rounded-[6px] bg-secondary6 px-3 md:w-[553px] md:p-3"
          placeholder="Let's share what is going on..."
        />
        <Button
          color="orange"
          className="caption-semibold md:body-semibold px-[8px] py-[12px] md:px-[12px] md:py-[16px]"
          rounded
        >
          Create Post
        </Button>
      </div>
    </article>
  );
};

export default CreatePost;
