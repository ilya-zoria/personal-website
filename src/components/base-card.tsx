"use client"

import Image from "next/image"
import { Plus } from 'lucide-react'
import { useRef } from 'react'

interface BaseCardProps {
  title: string
  children?: React.ReactNode
  mediaSrc: string
  alt?: string
  onClick?: () => void
  onPlusClick?: () => void
}

export default function BaseCard({
  title,
  children,
  mediaSrc,
  alt = "",
  onClick,
  onPlusClick
}: BaseCardProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const isVideo = mediaSrc.endsWith(".mp4") || mediaSrc.endsWith(".mov") || mediaSrc.endsWith(".webm")

  const handlePlusClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (onPlusClick) {
      onPlusClick()
    }
  }

  return (
    <div
      onClick={onClick}
      className="h-full border-radius-outside p-6 bg-background-grey dark:bg-background-lightDark shadow-sm border hover:border-black/20 dark:hover:border-white/20 cursor-pointer ease-in-out duration-150"
    >
      <div className="flex justify-between items-center pb-2">
        <h3>{title}</h3>
        <button onClick={handlePlusClick} className="p-2 rounded-full hover:bg-gray-300/50 dark:hover:bg-gray-700/50">
          <Plus className="h-5 w-5 text" />
        </button>
      </div>
      <div className="relative h-[250px] w-full mt-4 border-radius-inside overflow-hidden">
        {isVideo ? (
          <video 
            ref={videoRef} 
            className="w-full h-full object-cover" 
            autoPlay 
            muted 
            loop
            playsInline
            preload="auto"
          >
            <source src={mediaSrc} type={mediaSrc.endsWith(".webm") ? "video/webm" : "video/mp4"} />
            Your browser does not support the video tag.
          </video>
        ) : (
          <Image
            src={mediaSrc}
            alt={alt || title}
            fill
            className="object-cover"
            priority
          />
        )}
      </div>
      {children}
    </div>
  )
}