import React, { useCallback, useState } from "react";
import OutlineIcon from "../icons/OutlineIcon";
import { useDropzone, FileRejection } from "react-dropzone"; // Import FileRejection for rejected files
import Image from "next/image";

type Props = {};

interface FileWithPreview {
  file: File;
  previewUrl: string;
}

const CoverImage: React.FC<Props> = (props: Props) => {
  const [files, setFiles] = useState<FileWithPreview[]>([]);

  const onDrop = useCallback(
    (acceptedFiles: File[], fileRejections: FileRejection[]) => {
      if (files.length === 0) {
        // If there are no existing files, accept the new one
        const newFiles = acceptedFiles.map((file) => {
          const previewUrl = URL.createObjectURL(file);
          return { file, previewUrl };
        });

        setFiles(newFiles);
      } else {
        // If there is an existing file, replace it with the new one
        const newFile = acceptedFiles[0]; // Assuming only one file is accepted
        const previewUrl = URL.createObjectURL(newFile);
        setFiles([{ file: newFile, previewUrl }]);
      }
    },
    [files]
  );
  const [showImage1, setShowImage1] = useState(true);

  const toggleImage = () => {
    setShowImage1((prevShowImage1) => !prevShowImage1);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
  });

  return (
    <div>
      <div className="mb-[1.25rem]">
        <div className="flex" {...getRootProps()}>
          <input {...getInputProps()} />
          <button
            onClick={toggleImage}
            className="w-[6rem] flex px-[.625rem] py-[.25rem] gap-[.625rem] items-center rounded-[.25rem] bg-background2 dark:bg-dark4"
          >
            <OutlineIcon.Image1 className="fill-black dark:fill-white w-[22px]" />
            <p className="text-sm-regular text-secondary2 dark:text-background">
              Set Cover
            </p>
          </button>
        </div>
      </div>
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
                  className="w-[840px] h-[167px] lg:w-[1120px] lg:h-[223px]"
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
