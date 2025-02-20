"use client"

import Image from "next/image"
import { Plus } from 'lucide-react' // Import icons

interface BaseCardProps {
  title: string
  children?: React.ReactNode
  imageSrc: string;
  onClick?: () => void;
  onPlusClick?: () => void;
}

export default function BaseCard({
  title,
  children,
  imageSrc,
  onClick,
  onPlusClick
}: BaseCardProps) {
  return (
    <div
      onClick={onClick}
      className="h-full border-radius-outside p-6 bg-background-grey dark:bg-background-lightDark shadow-sm border border-black/10 hover:border-black/20 dark:border-white/10 dark:hover:border-white/20 cursor-pointer ease-in-out duration-150"
    >
      <div className="flex justify-between items-center">
        <h3>{title}</h3>
        <button onClick={onPlusClick} className="p-2 rounded-full hover:bg-gray-300/50 dark:hover:bg-gray-700/50">
          <Plus className="h-5 w-5 text" />
        </button>
      </div>
      <div className="relative h-[250px] w-full mt-4">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover border-radius-inside"
          priority
        />
      </div>
      {children}
    </div>
  )
}

