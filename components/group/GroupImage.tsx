"use client";
import React, { useState } from "react";
import OutlineIcon from "../icons/OutlineIcon";
import Image from "next/image";
import { CldUploadWidget } from "next-cloudinary";
interface GroupImageProps {
  setParentFormData: (prevData: any) => void;
  defaultImage?: string;
}

const GroupImage: React.FC<GroupImageProps> = ({
  setParentFormData,
  defaultImage,
}) => {
  const [imageUrl, setImageUrl] = useState(defaultImage || "");

  const updateForm = (url: any) => {
    setParentFormData((prevData: any) => ({
      ...prevData,
      groupUrl: url,
    }));
  };

  return (
    <div className="flex items-center">
      <div className="flex gap-[.62rem] my-[1.25rem]">
        <div className="rounded-full w-[3.75rem] h-[3.75rem] bg-background2 dark:bg-dark4">
          {!imageUrl ? (
            <OutlineIcon.Image2 className="fill-white dark:stroke-secondary4 dark:fill-dark4 m-auto mt-[1.2rem]" />
          ) : (
            <div>
              <div className="m-auto">
                <Image
                  src={imageUrl}
                  alt={"Avatar"}
                  width={60}
                  height={60}
                  className="m-auto rounded-full"
                />
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="ml-[.62rem]">
        <CldUploadWidget
          uploadPreset="bl8ltxxe"
          onUpload={(result: any) => {
            updateForm(result?.info?.secure_url);
            setImageUrl(result?.info?.secure_url);
          }}
        >
          {({ open }) => {
            function handleOnClick(e: React.MouseEvent) {
              e.preventDefault();
              open();
            }
            return (
              <div className="flex">
                <button
                  className="flex gap-[.62rem] items-center"
                  onClick={handleOnClick}
                >
                  <OutlineIcon.Image1 className="dark:fill-background2 fill-secondary2 w-[22px]" />
                  <p className="text-sm-regular dark:text-background2 text-secondary2">
                    Set Profile Photo
                  </p>
                </button>
              </div>
            );
          }}
        </CldUploadWidget>
      </div>
    </div>
  );
};

export default GroupImage;
