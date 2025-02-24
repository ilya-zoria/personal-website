"use client"

import React, { useRef } from "react";

interface CraftItemProps {
  src: string;
  alt: string;
}

const CraftItem: React.FC<CraftItemProps> = ({ src, alt }) => {
  const isVideo = src.endsWith(".mp4") || src.endsWith(".mov");
  const videoRef = useRef<HTMLVideoElement | null>(null);

  return (
    <div className="flex justify-center items-center border border-radius-inside overflow-hidden">
      {isVideo ? (
        <video ref={videoRef} className="w-full h-auto max-h-[500px]" autoPlay muted loop>
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <img src={src} alt={alt} className="w-full h-auto" />
      )}
    </div>
  );
};

export default CraftItem; 