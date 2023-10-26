import React, { useCallback, useState } from "react";
import OutlineIcon from "../icons/OutlineIcon";
import { useDropzone } from "react-dropzone";
import Image from "next/image";

type Props = {};

const CoverImage = (props: Props) => {
  const [files, setFiles] = useState([]);

  const onDrop = useCallback((acceptedFiles) => {
    const newFiles = acceptedFiles.map((file) => {
      const previewUrl = URL.createObjectURL(file);
      return { file, previewUrl };
    });

    setFiles((prevFiles) => [...prevFiles, ...newFiles]);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
  });
  return (
    <div>
      {" "}
      <div>
        <div className="flex" {...getRootProps()}>
          <input {...getInputProps()} />

          <button className="w-[6rem] flex px-[.625rem] py-[.25rem] gap-[.625rem] items-center rounded-[.25rem] bg-background2 dark:bg-dark4">
            <OutlineIcon.Image1 className="fill-black dark:fill-white w-[22px]" />
            <p className="text-sm-regular text-secondary2 dark:text-background">
              Set Cover
            </p>
          </button>
        </div>
      </div>
      <div className="w-full h-[8.25rem] lg:h-[10.4rem] flex justify-center items-center dark:bg-dark4 dark:border-dark4 bg-background2 border-background">
        <OutlineIcon.Image2 className="fill-white dark:stroke-secondary4 dark:fill-dark4 w-[1.875rem] h-[1.875rem] lg:w-[2.5rem] lg:h-[2.5rem]" />
        <div>
          {files.map((file, index) => (
            <div key={index}>
              <Image
                src={file.previewUrl}
                alt={file.file.name}
                width={80}
                height={80}
              />
              <p>{file.file.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoverImage;
