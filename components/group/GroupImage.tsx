import React, { useCallback, useState } from "react";
import OutlineIcon from "../icons/OutlineIcon";
import { useDropzone, FileRejection } from "react-dropzone";
import Image from "next/image";

type Props = {};

interface FileWithPreview {
  file: File;
  previewUrl: string;
}

const GroupImage: React.FC<Props> = (props: Props) => {
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
        const newFile = acceptedFiles[0];
        const previewUrl = URL.createObjectURL(newFile);
        setFiles([{ file: newFile, previewUrl }]);
      }
    },
    [files]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
  });

  const [showImage1, setShowImage1] = useState(true);

  const toggleImage = () => {
    setShowImage1((prevShowImage1) => !prevShowImage1);
  };

  // async function action() {
  //   const file = files[0];
  //   if (!file) return;
  //   const { timestamp, signature } = await getSignature();

  //   const formData = new FormData();

  //   formData.append("file", file);
  //   formData.append("api_key", process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME);
  //   formData.append("signature", signature);
  //   formData.append("timestamp", timestamp);
  //   formData.append("folder", "next");

  //   const endpoint = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_URL;
  //   const data = await fetch(endpoint, {
  //     method: "POST",
  //     body: formData,
  //   }).then((res) => res.json());

  //   await saveToDatabase({
  //     version: data?.version,
  //     signature: data?.signature,
  //     public_id: data?.public_id,
  //   });
  // }

  return (
    <div className="flex items-center">
      <div className="flex gap-[.62rem] my-[1.25rem]">
        <div className="rounded-full w-[3.75rem] h-[3.75rem] bg-background2 dark:bg-dark4">
          {showImage1 ? (
            <OutlineIcon.Image2 className="fill-white dark:stroke-secondary4 dark:fill-dark4 m-auto mt-[1.2rem]" />
          ) : (
            <div>
              {files.map((file, index) => (
                <div key={index} className="m-auto">
                  <Image
                    src={file.previewUrl}
                    alt={file.file.name}
                    width={60}
                    height={60}
                    className="m-auto rounded-full"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="ml-[.62rem]">
        <div className="flex" {...getRootProps()}>
          <button
            className="flex gap-[.62rem] items-center"
            onClick={toggleImage}
          >
            <OutlineIcon.Image1 className="dark:fill-background2 fill-secondary2 w-[22px]" />
            <p className="text-sm-regular dark:text-background2 text-secondary2">
              Set Profile Photo
            </p>
          </button>
          <input {...getInputProps()} />
        </div>
      </div>
    </div>
  );
};

export default GroupImage;
