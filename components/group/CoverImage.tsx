import React, { useCallback, useState } from "react";
import OutlineIcon from "../icons/OutlineIcon";
import { useDropzone, FileRejection } from "react-dropzone";
import Image from "next/image";
import { CldUploadWidget } from "next-cloudinary";

interface FileWithPreview {
  file: File;
  previewUrl: string;
}

const CoverImage: React.FC = () => {
  const [files, setFiles] = useState<FileWithPreview[]>([]);

  const onDrop = useCallback(
    (acceptedFiles: File[], fileRejections: FileRejection[]) => {
      if (files.length === 0) {
        const newFiles = acceptedFiles.map((file) => {
          const previewUrl = URL.createObjectURL(file);
          return { file, previewUrl };
        });

        setFiles(newFiles);
      } else {
        const newFile = acceptedFiles[0];
        const previewUrl = URL.createObjectURL(newFile);
        setFiles([{ file: newFile, previewUrl }]);
      }
    },
    [files]
  );

  const [showImage1, setShowImage1] = useState(true);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
  });

  return (
    <div>
      <CldUploadWidget uploadPreset="<Upload Preset>">
        {({ open }) => {
          function handleOnClick(e: React.MouseEvent) {
            e.preventDefault();
            open();
          }
          return (
            <div className="mb-[1.25rem]">
              <div className="flex" {...getRootProps()}>
                <input {...getInputProps()} />
                <button
                  onClick={handleOnClick}
                  className="w-[6rem] flex px-[.625rem] py-[.25rem] gap-[.625rem] items-center rounded-[.25rem] bg-background2 dark:bg-dark4"
                >
                  <OutlineIcon.Image1 className="fill-black dark:fill-white w-[22px]" />
                  <p className="text-sm-regular text-secondary2 dark:text-background">
                    Set Cover
                  </p>
                </button>
              </div>
            </div>
          );
        }}
      </CldUploadWidget>
      <div className="w-full h-[8.25rem] lg:h-[10.4rem] flex justify-center items-center dark:bg-dark4 dark:border-dark4 bg-background2 border-background">
        {showImage1 ? (
          <OutlineIcon.Image2 className="fill-white dark:stroke-secondary4 dark:fill-dark4 w-[1.875rem] h-[1.875rem] lg:w-[2.5rem] lg:h-[2.5rem]" />
        ) : (
          <div>
            {files.map((file, index) => (
              <div key={index}>
                <Image
                  src={file.previewUrl}
                  alt={file.file.name}
                  width={840}
                  height={167}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CoverImage;
