"use client"

import { useState, useRef, useEffect } from "react";
import CraftItem from "../components/ui/craft-item";
import ProjectRow from "../components/ui/project-row";
import { projects } from '@/data/projects';
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

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

  const craftItemsBrainly = [
    { src: "/Craft/brainly-main.mp4", alt: "brainly-main" },
    { src: "/Craft/ai_learning_companion_interactions.mp4", alt: "learning_companion_interactions" },
    { src: "/Craft/png/Brainly-1.png", alt: "Brainly-1" },
  ];
  const craftItemsCarerix = [
    { src: "/Craft/png/Carerix-1.png", alt: "Carerix-1" },
    { src: "/Craft/Carerix-v-1.mp4", alt: "Carerix-v-1" },
    { src: "/Craft/Carerix-v-2.mp4", alt: "Carerix-v-2" },
  ];
  const craftItemsCoA = [
    { src: "/Craft/png/CoA-1.png", alt: "CoA-1" },
    { src: "/Craft/png/CoA-2.png", alt: "CoA-2" },
    { src: "/Craft/png/CoA-3.png", alt: "CoA-3" },
  ];
  const craftItemsGuidefoot = [
    { src: "/Craft/png/Guidefoot-1.png", alt: "Guidefoot-1" },
    { src: "/Craft/png/Guidefoot-2.png", alt: "Guidefoot-2" },
    { src: "/Craft/png/Guidefoot-4.png", alt: "Guidefoot-4" },
  ];
  // const craftItemsPoint = [
  //   { src: "/Craft/png/Point-1.png", alt: "Point-1" },
  //   { src: "/Craft/png/Point-1.png", alt: "Point-1" },
  //   { src: "/Craft/png/Point-1.png", alt: "Point-1" },
  // ];
  const craftItemsExplore = [
    { src: "/Craft/spichify.mp4", alt: "spichify" },
    { src: "/Craft/back-to-future.mov", alt: "back-to-future" },
    { src: "/Craft/triple_tree.mp4", alt: "triple_tree" },
  ];

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="w-full flex flex-col gap-16 sm:gap-24 p-8 sm:p-12">
        <Header />
        
        {/* Work */}
        <div className="flex flex-col gap-12">
          <h2>Work</h2>
            <ProjectRow
              title={projects['brainly-ai'].title}
              description={projects['brainly-ai'].description}
              items={craftItemsBrainly}
              projectId="brainly-ai"
            />
            <ProjectRow
              title={projects['carerix'].title}
              description={projects['carerix'].description}
              items={craftItemsCarerix}
              projectId="carerix"
            />
            {/* <ProjectRow
              title={projects['cheapoair'].title}
              description={projects['cheapoair'].description}
              items={craftItemsCoA}
              projectId="cheapoair"
            /> */}
        </div>

        {/* Past projects */}
        <div className="flex flex-col gap-12">
          <h2>Past projects</h2>
            <ProjectRow
              title={projects['guidefoot'].title}
              description={projects['guidefoot'].description}
              items={craftItemsGuidefoot}
              projectId="guidefoot"
            />
            <ProjectRow
              title={projects['explorations'].title}
              description={projects['explorations'].description}
              items={craftItemsExplore}
              projectId="explorations"
            />
        </div>

        <Footer />
      </div>
    </div>
  );
}