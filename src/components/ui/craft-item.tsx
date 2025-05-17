"use client"

import { AlignCenter } from "lucide-react";
import React, { useRef, useState, useEffect } from "react";

interface CraftItemProps {
  src: string;
  alt: string;
}

const CraftItem: React.FC<CraftItemProps> = ({ src, alt }) => {
  const isVideo = src.endsWith(".mp4") || src.endsWith(".mov");
  const isImage = src.endsWith(".png");
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [thumbnailSrc, setThumbnailSrc] = useState("");

const Skeleton = () => (
  <div className="absolute inset-0 bg-background-lightDark animate-pulse" />
);
  
  // Generate a thumbnail path based on the video src
  useEffect(() => {
    if (isVideo) {
      // Replace video extension with jpg (assuming thumbnails exist with same base name)
      const thumbPath = src.replace(/\/Craft\/(.*)\.(mp4|mov)$/, "/Craft/thumbnails/$1-thumb.jpg");
      setThumbnailSrc(thumbPath);
    } else if (isImage) {
      setThumbnailSrc(src);
      setIsLoading(false);
    }
  }, [src, isVideo, isImage]);

  useEffect(() => {
    if (!videoRef.current || !isVideo) return;
    
    const video = videoRef.current;
    
    const handleLoadedMetadata = () => {
      // Start transitioning once we have basic video metadata
      setIsLoading(false);
    };
    
    const handleCanPlay = () => {
      video.muted = true;
      video.play().catch(err => {
        console.error("Video play error:", err);
        setHasError(true);
      });
    };

    const handleError = () => {
      console.error("Video loading error");
      setHasError(true);
      setIsLoading(false);
    };
    
    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('error', handleError);
    
    video.load();
    
    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('error', handleError);
      video.pause();
    };
  }, [isVideo]);

  return (
    <div className="relative overflow-hidden w-full h-full shrink bg-background-lightDark border border-radius-small sm:border-radius-inside">
      {/* Blurred Thumbnail */}
      {(isLoading || hasError) && thumbnailSrc && (
        <div 
          className="absolute inset-0 bg-cover bg-center blur-md"
          style={{ 
            backgroundImage: `url(${thumbnailSrc})`,
            filter: 'blur(10px)',
            transform: 'scale(1)',
            height: "100%",
            width: "100%"
          }}
        />
      )}

      {/* Skeleton Overlay */}
      {isLoading && <Skeleton />}

      {/* Video Element */}
      {!hasError && isVideo && (
        <video 
          ref={videoRef} 
          autoPlay 
          muted 
          loop 
          playsInline 
          className={`w-full h-full object-cover transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        >
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      {/* Image Element */}
      {isImage && (
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setHasError(true);
            setIsLoading(false);
          }}
        />
      )}
    </div>
  );
};

export default CraftItem;