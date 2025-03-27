"use client"

import BaseCard from "./base-card"
import { useState, useRef, useEffect } from "react"
import { Modal } from "./ui/modal"
import CraftItem from "./ui/craft-item";

export function CraftCard() {
  const [showCraftModal, setShowCraftModal] = useState(false);
  const craftItemRefs = useRef<Array<HTMLDivElement | null>>([]);

  const handleOpenCraftModal = () => {
    setShowCraftModal(true);
  };

  const handleCloseCraftModal = () => {
    setShowCraftModal(false);
  };

  // Prepare refs for all items
  useEffect(() => {
    craftItemRefs.current = craftItemRefs.current.slice(0, craftItems.length + craftItems2.length);
  }, []);

  const craftItems = [
    { src: "/Craft/back-to-future.mov", alt: "back-to-future" },
    { src: "/Craft/carerix-job-preview.mp4", alt: "Carerix-job-preview" },
    { src: "/Craft/carerix-vision.mov", alt: "Carerix Vision" },
  ];
  const craftItems2 = [
    { src: "/Craft/spichify.mov", alt: "spichify" },
    { src: "/Craft/triple_tree.mp4", alt: "triple_tree" },
    { src: "/Craft/nivia.mov", alt: "nivia" },
    // { src: "/Craft/ai-perplexity-style.mov", alt: "ai-perplexity-style" },
  ];

  return (
    <div>
      <BaseCard
        title="Craft"
        mediaSrc="/Craft/spichify.mov"
        onClick={handleOpenCraftModal}
      >
      </BaseCard>

      <Modal
        isOpen={showCraftModal}
        onClose={handleCloseCraftModal}
        title="Craft"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
          <div className="flex flex-col gap-4">
            {craftItems.map((item, index) => (
              <CraftItem 
                key={index} 
                src={item.src} 
                alt={item.alt}
              />
            ))}
          </div>
          <div className="flex flex-col gap-4">
            {craftItems2.map((item, index) => (
              <CraftItem 
                key={index} 
                src={item.src} 
                alt={item.alt}
              />
            ))}
          </div>
        </div>
      </Modal>
    </div>
  )
}