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
  const [isVisible, setIsVisible] = useState(false);

  const Skeleton = () => (
    <div className="absolute inset-0 bg-background-lightDark animate-pulse" />
  );
  
  // Intersection Observer for lazy loading
  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '50px 0px',
        threshold: 0.1
      }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // Generate a thumbnail path based on the video src
  useEffect(() => {
    if (isVideo) {
      const thumbPath = src.replace(/\/Craft\/(.*)\.(mp4|mov)$/, "/Craft/thumbnails/$1-thumb.jpg");
      setThumbnailSrc(thumbPath);
    } else if (isImage) {
      setThumbnailSrc(src);
      setIsLoading(false);
    }
  }, [src, isVideo, isImage]);

  useEffect(() => {
    if (!videoRef.current || !isVideo || !isVisible) return;
    
    const video = videoRef.current;
    
    const handleLoadedMetadata = () => {
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
    
    // Only load video when it's visible
    if (isVisible) {
      video.load();
    }
    
    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('error', handleError);
      video.pause();
    };
  }, [isVideo, isVisible]);

  return (
    <div ref={containerRef} className="relative overflow-hidden w-full h-full shrink bg-background-lightDark border border-radius-small sm:border-radius-inside">
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
      {!hasError && isVideo && isVisible && (
        <video 
          ref={videoRef} 
          autoPlay 
          muted 
          loop 
          playsInline 
          preload="metadata"
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
          loading="lazy"
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