"use client";

import { IKImage } from "imagekitio-next";


const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

export default function Image({ path, w, h, alt, className, onClick, tr }) {

    
  return (
    <IKImage
      urlEndpoint={urlEndpoint}
      path={path}
      width={w}
      height={h}
      onClick={onClick}
      {...(tr
        ? { transformation: [{ width: `${w}`, height: `${h}` }] }
        : { width: w, height: h })}
      alt={alt}
      className={className}
    />
  );
}
