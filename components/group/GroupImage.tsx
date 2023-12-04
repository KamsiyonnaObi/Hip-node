"use client";
import React, { useState } from "react";
import OutlineIcon from "../icons/OutlineIcon";
import { ImageFallback as Image } from "@/components/shared/ImageFallback";
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
      <div className="my-[1.25rem] flex gap-[.62rem]">
        <div className="h-[3.75rem] w-[3.75rem] rounded-full bg-background2 dark:bg-dark4">
          {!imageUrl ? (
            <OutlineIcon.Image2 className="m-auto mt-[1.2rem] fill-white dark:fill-dark4 dark:stroke-secondary4" />
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
          uploadPreset="ml_images"
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
                  className="flex items-center gap-[.62rem]"
                  onClick={handleOnClick}
                >
                  <OutlineIcon.Image1 className="w-[22px] fill-secondary2 dark:fill-background2" />
                  <p className="text-sm-regular text-secondary2 dark:text-background2">
                    Set Profile Photo ml_images{" "}
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
