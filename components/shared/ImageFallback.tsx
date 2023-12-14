"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";

interface Props {
  src: string | StaticImageData | undefined;
  alt: string;
  fallback?: string;
  [key: string]: any;
}

export function ImageFallback({
  src,
  alt,
  fallback = "/images/placeholder.png",
  ...rest
}: Props) {
  const [error, setError] = useState(false);
  const [imageUrl, setImageUrl] = useState(src || fallback);

  const onError = () => {
    if (!error) {
      setImageUrl(fallback);
      setError(true);
    }
  };
  return <Image src={imageUrl} alt={alt} onError={onError} {...rest} />;
}
