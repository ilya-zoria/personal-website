"use client"

import BaseCard from "./base-card"
import { useState } from "react"
import { Plus } from 'lucide-react' // Import icons
import { Modal } from "./ui/modal" // Add this import
import CraftItem from "./ui/craft-item"; // Import the new CraftItem component

export function CraftCard() {
  const [showCraftModal, setShowCraftModal] = useState(false);

  const handleOpenCraftModal = () => {
    setShowCraftModal(true);
  };

  const handleCloseCraftModal = () => {
    setShowCraftModal(false);
  };

  const craftItems = [
    { src: "/Craft/back-to-future.mov", alt: "back-to-future" },
    { src: "/Craft/carerix-job-preview.mp4", alt: "Carerix-job-preview" },
    { src: "/Craft/carerix-vision.mp4", alt: "Carerix Vision" },
  ];
  const craftItems2 = [
    { src: "/Craft/spichify.mov", alt: "spichify" },
    { src: "/Craft/triple_tree.mp4", alt: "triple_tree" },
    { src: "/Craft/nivia.mov", alt: "nivia" },
    // { src: "/Craft/notifications.mp4", alt: "notifications" },
    // { src: "/Craft/ai-chat-perplexity.mov", alt: "AI Chat Perplexity" },
    // { src: "/Craft/guidefoot.mp4", alt: "guidefoot" },
  ];

  return (
    <div>
      {/* <BaseCard
        title="Craft"
        imageSrc="/Craft/craft-preview.png"
        onClick={handleOpenCraftModal}
      >
      </BaseCard> */}
      <BaseCard
        title="Craft"
        mediaSrc="/Craft/spichify.mov"
        onClick={setShowCraftModal}
      >
      </BaseCard>

      <Modal
        isOpen={showCraftModal}
        onClose={handleCloseCraftModal}
        title="Craft"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-8 w-full mx-auto">
          <div className="flex flex-col gap-4">
            {craftItems.map((item, index) => (
              <CraftItem key={index} src={item.src} alt={item.alt} />
            ))}
          </div>
          <div className="flex flex-col gap-4">
            {craftItems2.map((item, index) => (
              <CraftItem key={index} src={item.src} alt={item.alt} />
            ))}
          </div>
        </div>
        
      </Modal>
    </div>
  )
}
