import Image from "next/image";
import React from "react";

const Media = ({ media }: { media: string }) => {
  return (
    <div className="min-w-[5.5rem]">
      <Image
        src={media}
        width={88}
        height={88}
        alt="Media"
        className="m-auto mt-1"
      />
    </div>
  );
};

export default Media;
