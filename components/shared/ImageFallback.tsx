"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";

interface Props {
  src: string | StaticImageData | undefined;
  alt: string;
  [key: string]: any;
}

export function ImageFallback({ src, alt, ...rest }: Props) {
  const [error, setError] = useState(false);
  const [imageUrl, setImageUrl] = useState(src || "/images/placeholder.png");

  const onError = () => {
    if (!error) {
      setImageUrl("/images/placeholder.png");
      setError(true);
    }
  };
  return <Image src={imageUrl} alt={alt} onError={onError} {...rest} />;
}
