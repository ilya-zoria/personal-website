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
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.onloadeddata = () => {
        setIsLoading(false);
        // Autoplay video once loaded
        if (videoRef.current) {
          videoRef.current.muted = true;
          videoRef.current.play().catch(error => {
            console.error("Error autoplaying video:", error);
          });
        }
      };
    }
  }, []);

  return (
    <div
      className="relative flex justify-center items-center border border-radius-inside overflow-hidden rounded-lg"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onTouchStart={() => setIsHovering(true)}
      onTouchEnd={() => setTimeout(() => setIsHovering(false), 3000)}
    >
      {isVideo ? (
        <div className="relative w-full">
          <video
            ref={videoRef}
            className={`w-full h-auto max-h-[500px] transition-all duration-700 ${
              isLoading ? "blur-lg" : "blur-0 scale-100"
            }`}
            loop
            controls={isHovering} // Show controls only on hover
            playsInline
            muted
          >
            <source src={src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {isLoading && <div className="absolute inset-0 bg-black/10 animate-pulse"></div>}
        </div>
      ) : (
        <img src={src} alt={alt} className="w-full h-auto" />
      )}
    </div>
  );
};

export default CraftItem;