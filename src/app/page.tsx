"use client"

import { useState, useRef, useEffect } from "react";
import CraftItem from "../components/ui/craft-item";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import ProjectRow from "../components/ui/project-row";

export default function Home() {
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
    craftItemRefs.current = craftItemRefs.current.slice(0, craftItemsBrainly.length + craftItemsCarerix.length + craftItemsCoA.length + craftItemsGuidefoot.length);
  }, []);

  // { src: "/Craft/spichify.mp4", alt: "spichify" },
  // { src: "/Craft/pet-app.mp4", alt: "pet-app" },
  // { src: "/Craft/triple_tree.mp4", alt: "triple_tree" },
  // { src: "/Craft/back-to-future.mov", alt: "back-to-future" },
  // { src: "/Craft/nivia.mp4", alt: "nivia" },

  const craftItemsBrainly = [
    { src: "/Craft/ai_learning_companion_interactions.mp4", alt: "learning_companion_interactions" },
    { src: "/Craft/intertactive-widgets.mp4", alt: "intertactive-widgets" },
    { src: "/Craft/png/Brainly-Q&A.png", alt: "Brainly-Q&A" },
  ];
  const craftItemsCarerix = [
    { src: "/Craft/png/Carerix-1.png", alt: "Carerix-1" },
    { src: "/Craft/carerix-job-preview.mp4", alt: "Carerix-job-preview" },
    { src: "/Craft/carerix_vision.mp4", alt: "carerix_vision" },
  ];
  const craftItemsCoA = [
    { src: "/Craft/png/CoA-1.png", alt: "CoA-1" },
    { src: "/Craft/png/CoA-2.png", alt: "CoA-2" },
    { src: "/Craft/png/CoA-3.png", alt: "CoA-3" },
  ];
  const craftItemsGuidefoot = [
    { src: "/Craft/png/Guidefoot-1.png", alt: "Guidefoot-1" },
    { src: "/Craft/png/Guidefoot-2.png", alt: "Guidefoot-2" },
    { src: "/Craft/png/Guidefoot-3.png", alt: "Guidefoot-3" },
  ];
  const craftItemsPoint = [
    { src: "/Craft/png/Point-1.png", alt: "Point-1" },
    { src: "/Craft/png/Point-1.png", alt: "Point-1" },
    { src: "/Craft/png/Point-1.png", alt: "Point-1" },
  ];
  const craftItemsExplore = [
    { src: "/Craft/spichify.mp4", alt: "spichify" },
    { src: "/Craft/back-to-future.mov", alt: "back-to-future" },
    { src: "/Craft/triple_tree.mp4", alt: "triple_tree" },
  ];

  

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="w-full flex flex-col gap-16 sm:gap-24 p-8 sm:p-12">
        {/* header */}
        <div className="flex justify-between items-center">
          <div className="relative group flex flex-col">
            <span className="">Ilya Zoria</span>
            <p className="text">Product designer</p>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex gap-4 items-center">
              <a href="https://docs.google.com/document/d/11aLN-ZYWHOVM0TJ3mkV2PHSwiRUD3Tvy01J-QFZfmC8/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-sm hover:underline">
                cv
              </a>
              <a href="https://www.linkedin.com/in/ilya-zoria/" target="_blank" rel="noopener noreferrer" className="text-sm hover:underline">
                in
              </a>
              <a href="https://x.com/ilya_zoria" target="_blank" rel="noopener noreferrer" className="text-sm hover:underline">
                x
              </a>
            </div>
          </div>
        </div>
        {/* Work */}
        <div className="flex flex-col gap-12">
          <h2 className="">Work</h2>
            <ProjectRow
              title="Brainly. AI Learning Companion"
              description="Brainly is one of the world's largest learning platforms with over 300M students globally — was entering a new chapter. The product was evolving beyond its roots in community-driven Q&A toward becoming an AI-powered Learning Companion."
              items={craftItemsBrainly}
            />
            <ProjectRow
              title="Carerix"
              description="Recruitment software for enterprise recruitment and staffing agencies. I was responsible for a new design vision for a 20-year-old applicant tracking system."
              items={craftItemsCarerix}
            />
            <ProjectRow
              title="CheapOair"
              description="CheapOair main product in the Fareportal family helps 5M monthly active travellers fly cheaply on over 450 airlines. I was responsible for creating design vision for iOS and Android app."
              items={craftItemsCoA}
            />
        </div>

        {/* Past projects */}
        <div className="flex flex-col gap-12">
          <h2 className="">Past projects</h2>
            <ProjectRow
              title="Guidefoot"
              description="First side project. author’s tours"
              items={craftItemsGuidefoot}
            />
            <ProjectRow
              title="The Point"
              description="AI assistant"
              items={craftItemsPoint}
            />
            <ProjectRow
              title="Explorations"
              description="Different ideas"
              items={craftItemsExplore}
            />
        </div>

        {/* Footer */}
        <div className="w-full flex flex-row justify-between my-4">
          <p className="text-sm"><a className="hover:underline" href="https://savelife.in.ua/en/">Support Ukraine 🇺🇦</a></p>
          <div className="flex gap-2 align-baseline">
            <p className="text-sm">Made with</p>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                <a href="https://www.figma.com/">
                  <img src="images/icons/ic-figma.svg" alt="ic-figma" width="20" height="20" />
                </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-sm">Figma</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                <a href="https://www.cursor.com/">
                  <img src="images/icons/ic-cursor.svg" alt="ic-cursor" width="20" height="20" />
                </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-sm">Cursor AI</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </div>
    </div>
  )
}