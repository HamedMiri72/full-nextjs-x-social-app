"use client";

import { IKImage } from "imagekitio-next";
import React from "react";

const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

export default function Image({ path, w, h, alt, className }) {
  return (
    <IKImage
      urlEndpoint={urlEndpoint}
      path={path}
      width={w}
      height={h}
      alt={alt}
      className={className}
    />
  );
}
