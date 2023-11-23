"use client";
import React, { useState } from "react";
import OutlineIcon from "../icons/OutlineIcon";
import { ImageFallback as Image } from "@/components/shared/ImageFallback";
import { CldUploadWidget } from "next-cloudinary";

interface CoverImageProps {
  setParentFormData: (prevData: any) => void;
  defaultImage?: string;
}

const CoverImage: React.FC<CoverImageProps> = ({
  setParentFormData,
  defaultImage,
}) => {
  const [imageUrl, setImageUrl] = useState(defaultImage || "");

  const updateForm = (url: any) => {
    setParentFormData((prevData: any) => ({
      ...prevData,
      coverUrl: url,
    }));
  };

  return (
    <div>
      <CldUploadWidget
        uploadPreset="ml_images"
        options={{ clientAllowedFormats: ["png", "jpg", "jpeg"] }}
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
            <div className="mb-[1.25rem]">
              <div className="flex">
                <button
                  onClick={handleOnClick}
                  className="mb-[1.25rem] flex w-[6rem] items-center gap-[.625rem] rounded-[.25rem] bg-background2 px-[.625rem] py-[.25rem] dark:bg-dark4"
                >
                  <OutlineIcon.Image1 className="w-[22px] fill-black dark:fill-white" />
                  <p className="text-sm-regular text-secondary2 dark:text-background">
                    Set Cover
                  </p>
                </button>
              </div>
            </div>
          );
        }}
      </CldUploadWidget>
      <div className="flex h-[8.25rem] w-full items-center justify-center border-background bg-background2 dark:border-dark4 dark:bg-dark4 lg:h-[10.4rem]">
        {!imageUrl ? (
          <OutlineIcon.Image2 className="h-[1.875rem] w-[1.875rem] fill-white dark:fill-dark4 dark:stroke-secondary4 lg:h-[2.5rem] lg:w-[2.5rem]" />
        ) : (
          <div>
            <Image
              src={imageUrl}
              alt={"Cover"}
              width={840}
              height={167}
              className="h-[167px] w-[840px] lg:h-[223px] lg:w-[1120px]"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default CoverImage;
