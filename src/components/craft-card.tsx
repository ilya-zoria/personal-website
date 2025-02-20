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

  // Array of video/image sources
  const craftItems = [
    { src: "/Craft/nivia.mov", alt: "nivia" },
    // { src: "/Craft/spichify.mov", alt: "spichify" },
    // { src: "/Craft/travel-memo.mov", alt: "travel-memo" },
    { src: "/Craft/Carerix-vision.mp4", alt: "Carerix Vision" },
    { src: "/Craft/AI-chat-perplexity.mov", alt: "AI Chat Perplexity" },
    { src: "/Craft/Carerix-vision.mp4", alt: "Carerix Vision" },
  ];

  return (
    <div>
      <BaseCard
        title="Craft"
        imageSrc="/images/craft/craft-preview.png"
        onClick={handleOpenCraftModal} // Open modal on card click
      >
      </BaseCard>

      <Modal
        isOpen={showCraftModal}
        onClose={handleCloseCraftModal}
        title="Craft"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mx-auto p-8">
          {craftItems.map((item, index) => (
            <CraftItem key={index} src={item.src} alt={item.alt} />
          ))}
        </div>
      </Modal>
    </div>
  )
}
