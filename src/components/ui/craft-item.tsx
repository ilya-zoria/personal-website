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
  const containerRef = useRef<HTMLDivElement>(null);
  const [thumbnailSrc, setThumbnailSrc] = useState("");

  // Generate a thumbnail path based on the video src
  useEffect(() => {
    if (isVideo) {
      // Replace video extension with jpg (assuming thumbnails exist with same base name)
      const thumbPath = src.replace(/\.(mp4|mov)$/, '-thumb.jpg');
      setThumbnailSrc(thumbPath);
    }
  }, [src, isVideo]);

  useEffect(() => {
    if (!videoRef.current) return;
    
    const video = videoRef.current;
    
    const handleLoadedData = () => {
      // Keep loading state true for a moment to ensure smooth transition
      setTimeout(() => setIsLoading(false), 100);
    };
    
    const handleCanPlay = () => {
      video.muted = true;
      video.play().catch(err => console.error("Video play error:", err));
    };
    
    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('canplay', handleCanPlay);
    
    video.load();
    
    return () => {
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('canplay', handleCanPlay);
      video.pause();
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative overflow-hidden bg-background-grey dark:bg-background-lightDark shadow-sm border border-radius-inside"
      // style={{ aspectRatio: "16/9" }} // Maintain aspect ratio to prevent layout shift
    >
      {isVideo && (
        <>
          {/* Blurred placeholder */}
          {isLoading && thumbnailSrc && (
            <div 
              className="absolute inset-0 bg-cover bg-center blur-sm"
              style={{ 
                backgroundImage: `url(${thumbnailSrc})`,
                filter: 'blur(8px)',
                transform: 'scale(1.1)' // Slightly larger to avoid blur edges
              }}
            />
          )}
          
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            loop
            playsInline
            muted
            autoPlay
            preload="auto"
            poster={thumbnailSrc}
            style={{ 
              opacity: isLoading ? 0 : 1,
              transition: 'opacity 0.3s ease-in'
            }}
          >
            <source src={src} type="video/mp4" />
          </video>
        </>
      )}
      
      {!isVideo && (
        <img src={src} alt={alt} className="w-full h-auto" />
      )}
    </div>
  );
};

export default CraftItem;