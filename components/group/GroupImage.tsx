import React, { useCallback, useState } from "react";
import OutlineIcon from "../icons/OutlineIcon";
import { useDropzone } from "react-dropzone";
import Image from "next/image";

type Props = {};

const GroupImage = (props: Props) => {
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
    <div className="flex items-center">
      <div className="flex gap-[.62rem] my-[1.25rem]">
        <div className="rounded-full w-[3.75rem] h-[3.75rem] bg-background2 dark:bg-dark4">
          <OutlineIcon.Image2 className="fill-white dark:stroke-secondary4 dark:fill-dark4 m-auto mt-[1.2rem]" />
          <div>
            {files.map((file, index) => (
              <div key={index}>
                <Image
                  src={file.previewUrl}
                  alt={file.file.name}
                  width={30}
                  height={30}
                />
                <p>{file.file.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <div className="flex" {...getRootProps()}>
          <button className="flex gap-[.62rem] items-center">
            <OutlineIcon.Image1 className="dark:fill-background2 fill-secondary2 w-[22px]" />
            <p className="text-sm-regular dark:text-background2 text-secondary2">
              Set Profile Photo
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GroupImage;
