import React from "react";
import { CldUploadWidget } from "next-cloudinary";

import OutlineIcon from "../icons/OutlineIcon";

type Props = {
  setParentFormData: (name: string, url: string) => void;
  setImageUrl: (url: string) => void;
};

const ProfileImage = ({ setImageUrl, setParentFormData }: Props) => {
  const updateForm = (url: any) => {
    setParentFormData("profileImage", url);
  };
  return (
    <div className="absolute left-[55%] top-[75%] flex items-center">
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
