import * as React from "react"
import { cn } from "@/lib/utils"

interface PhotoProps {
  image: string;
  title: string;
  // className?: string;
}

const Photo: React.FC<PhotoProps> = ({
  image,
  title
  // className = ''
}) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <img src={image} alt={title} className="h-[80px] w-[80px] object-cover rounded-full" />
      <p className="text-xs text-center">{title}</p>
    </div>
  );
};

export default Photo;
