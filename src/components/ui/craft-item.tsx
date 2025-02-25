"use client"

import React, { useRef, useState, useEffect } from "react";

interface CraftItemProps {
  src: string;
  alt: string;
}

const CraftItem: React.FC<CraftItemProps> = ({ src, alt }) => {
  const isVideo = src.endsWith(".mp4") || src.endsWith(".mov");
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.onloadeddata = () => setIsLoading(false);
    }
  }, []);

  return (
    <div className="relative flex justify-center items-center border border-radius-inside overflow-hidden">
      {isVideo ? (
        <>
          <video
            ref={videoRef}
            className={`w-full h-auto max-h-[500px] transition-all duration-700 ${
              isLoading ? "blur-lg" : "blur-0 scale-100"
            }`}
            autoPlay
            muted
            loop
          >
            <source src={src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {isLoading && <div className="absolute inset-0 bg-black/10 animate-pulse"></div>}
        </>
      ) : (
        <img src={src} alt={alt} className="w-full h-auto" />
      )}
    </div>
  );
};

export default CraftItem;
