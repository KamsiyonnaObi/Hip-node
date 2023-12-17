import React from "react";
import { CldUploadWidget } from "next-cloudinary";

import OutlineIcon from "../icons/OutlineIcon";

type Props = {
  setParentFormData: (name: string, url: string) => void;
  setImageUrl: (url: string) => void;
  imgPropName: string;
};

const ProfileImage = ({
  setImageUrl,
  setParentFormData,
  imgPropName,
}: Props) => {
  // update parent form data with new cloudinary image
  const updateForm = (imgName: string, url: any) => {
    setParentFormData(imgName, url);
  };
  return (
    <div className=" flex items-center">
      <div className="ml-[.62rem]">
        <CldUploadWidget
          uploadPreset="ml_images"
          onUpload={(result: any) => {
            // use cloudinary widget to update form and image on edit profile
            updateForm(imgPropName, result?.info?.secure_url);
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
                  className="flex items-center gap-[.62rem] rounded-md border border-secondary2 bg-background px-2 py-1 hover:bg-background2 dark:border-dark4 dark:bg-dark3 hover:dark:bg-dark2"
                  onClick={handleOnClick}
                >
                  <OutlineIcon.Edit className="w-3 fill-secondary2 dark:fill-background2" />
                </button>
              </div>
            );
          }}
        </CldUploadWidget>
      </div>
    </div>
  );
};

export default ProfileImage;
