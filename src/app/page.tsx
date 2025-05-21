"use client"

import { useState, useRef, useEffect } from "react";
import CraftItem from "../components/ui/craft-item";
import ProjectRow from "../components/ui/project-row";
import { projects } from '@/data/projects';
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import AnimateOnScroll from "@/components/ui/animate-on-scroll";

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

  function AnimatedTestimonialsDemo() {
    const testimonials = [
      {
        quote:
          "Ilya is always inspired to find better solutions to solve user flows. Creative with new tools and always helpful to push a product to the next phase",
        name: "Arco Westbroek",
        designation: "CPO at Carerix",
        src: "/images/testimonials/Arco.jpeg",
      },
      {
        quote:
          "Ilya did a fantastic job taking new ideas and conceptualising them. They especially good when requirements and user journeys are at their genesis in the ideation stage.",
        designation: "VP Digital at Fareportal",
        name: "Michael Nuciforo",
        src: "/images/testimonials/Michael_Nuciforo.jpeg",
      },
      {
        quote:
          "We enjoyed working with Ilya on the Mood Tracking App, and I was impressed with thier dedication, creativity, and attention to detail.",
        name: "Dmitriy Dovgan",
        designation: "Founder of The Point",
        src: "/images/testimonials/Dmitriy_Dovgan.jpeg",
        
      },
      {
        quote:
          "I had the great pleasure of working closely with Ilya on Brainly's transformation from a Q&A into a Learning Companion experience.",
        name: "Agnieszka Stanisławska",
        designation: "Senior Product Manager at Brainly",
        src: "/images/testimonials/Agnieszka_Stanisławska.jpeg",
      },
      {
        quote:
          "Ilya brings a perfect mix of strategic thinking, creativity, and execution to every project.",
        name: "Fabio Secci",
        designation: "Design leader at Brainly",
        src: "/images/testimonials/Fabio_Secci.jpeg",
      },
    ];
    return <AnimatedTestimonials testimonials={testimonials} autoplay={true} />;
  }

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="w-full flex flex-col gap-28 sm:gap-40 p-6 sm:p-12">
        <Header />
        
        {/* Work */}
        <div className="flex flex-col gap-12">
          <AnimateOnScroll delay={0}><h2>Work</h2></AnimateOnScroll>
            <AnimateOnScroll delay={0.1}>
              <ProjectRow
                title={projects['brainly-ai'].title}
                description={projects['brainly-ai'].description}
                items={craftItemsBrainly}
                projectId="brainly-ai"
              />
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.2}>
              <ProjectRow
                title={projects['carerix'].title}
                description={projects['carerix'].description}
                items={craftItemsCarerix}
                projectId="carerix"
              />
            </AnimateOnScroll>
        </div>

        {/* Past projects */}
        <div className="flex flex-col gap-12">
          <AnimateOnScroll delay={0.3}><h2>Past projects</h2></AnimateOnScroll>
            <AnimateOnScroll delay={0.4}>
              <ProjectRow
                title={projects['guidefoot'].title}
                description={projects['guidefoot'].description}
                items={craftItemsGuidefoot}
                projectId="guidefoot"
              />
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.5}>
              <ProjectRow
                title={projects['side-projects'].title}
                description={projects['side-projects'].description}
                items={craftItemsExplore}
                projectId="side-projects"
              />
            </AnimateOnScroll>
        </div>

        {/* Testimonials */}
        <div className="flex flex-col gap-0 sm:gap-8">
          <AnimateOnScroll delay={0.6}>
            <h2 className="text-center">People I worked with</h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.7}>
            <AnimatedTestimonialsDemo />
          </AnimateOnScroll>
        </div>
        <Footer />
      </div>
    </div>
  );
}