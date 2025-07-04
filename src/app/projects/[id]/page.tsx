"use client";

import { notFound } from 'next/navigation';
import { projects } from '@/data/projects';
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import CraftItem from "@/components/ui/craft-item";
import AnimateOnScroll from "@/components/ui/animate-on-scroll";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

interface ProjectProps {
  params: {
    id: string;
  };
}

export default function Project({ params }: ProjectProps) {
  const project = projects[params.id];

  if (!project) {
    notFound();
  }

  const renderContent = () => {
    switch (params.id) {
      case 'brainly-ai':
        return (
          <>
            {/* <CraftItem src="/Craft/intertactive-widgets.mp4" alt="intertactive-widgets" /> */}
            <CraftItem src="/Craft/ai_learning_companion_interactions.mp4" alt="learning_companion_interactions" />
            <CraftItem src="/Craft/png/Brainly-1.png" alt="" />
            <CraftItem src="/Craft/png/Brainly-3.png" alt="" />
            <CraftItem src="/Craft/png/Brainly-2.png" alt="" />
          </>
        );
      case 'carerix':
        return (
          <>
            <CraftItem src="/Craft/Carerix-v-1.mp4" alt="Carerix-v-1" />
            <CraftItem src="/Craft/Carerix-v-2.mp4" alt="Carerix-v-2" />
            <CraftItem src="/Craft/png/Carerix-2.png" alt="Carerix-2" />
            <CraftItem src="/Craft/png/Carerix-3.png" alt="Carerix-3" />
            <CraftItem src="/Craft/png/Carerix-4.png" alt="Carerix-4" />
            <CraftItem src="/Craft/png/Carerix-5.png" alt="Carerix-5" />
            <CraftItem src="/Craft/png/Carerix-6.png" alt="Carerix-6" />
          </>
        );
    //   case 'cheapoair':
    //     return (
    //       <>
    //         <h3>Project Overview</h3>
    //         <p>CheapOair is a leading travel platform helping millions of travelers find affordable flights across 450+ airlines.</p>
    //         {/* Add more content sections as needed */}
    //       </>
    //     );
      case 'guidefoot':
        return (
          <>
           <CraftItem src="/Craft/png/Guidefoot-2.png" alt="Guidefoot-2" />
           <CraftItem src="/Craft/png/Guidefoot-3.png" alt="Guidefoot-3" />
           <CraftItem src="/Craft/png/Guidefoot-4.png" alt="Guidefoot-4" />
           <CraftItem src="/Craft/png/Guidefoot-5.png" alt="Guidefoot-5" />
          </>
        );
      case 'side-projects':
        return (
          <>
            <CraftItem src="/Craft/spichify.mp4" alt="spichify" />
            <CraftItem src="/Craft/back-to-future.mov" alt="back-to-future" />
            <CraftItem src="/Craft/triple_tree.mp4" alt="triple_tree" />
            <CraftItem src="/Craft/png/Point-2.png" alt="Point-2" />
            <CraftItem src="/Craft/pet-app.mp4" alt="pet-app" />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="w-full flex flex-col gap-16 sm:gap-24 p-6 sm:p-12">
        <Header />
        
        <div className="max-w-5xl mx-auto w-full flex flex-col gap-6 sm:gap-8">
            <div className="max-w-3xl mx-auto flex flex-col gap-6 sm:gap-8 mb-8 items-left sm:items-center text-left sm:text-center">
                <AnimateOnScroll delay={0.1}>
                    <h2 className="">{project.title}</h2>
                </AnimateOnScroll>
                <AnimateOnScroll delay={0.2}>
                    <p className="big-body">
                        {project.description.split(' ').map((word, index, array) => (
                            <React.Fragment key={index}>
                                <motion.span
                                    initial={{ opacity: 0, y: 5 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.2,
                                        ease: "easeInOut",
                                        delay: 0.05 * index,
                                    }}
                                    className="inline-block"
                                >
                                    {word}
                                </motion.span>
                                {index < array.length - 1 && ' '}
                            </React.Fragment>
                        ))}
                    </p>
                </AnimateOnScroll>
                {project.case && (
                 <AnimateOnScroll delay={0.3}>
                     <div className="bg-background-lightDark rounded-full text-center px-4 py-2">
                        <p className="">{project.case}</p>
                    </div>
                 </AnimateOnScroll>
                )}
            </div>

            {/* project image/video */}
            {project.media && (
                <AnimateOnScroll delay={0.4}>
                    <div>
                      <div className="relative aspect-video">
                          {project.media.type === 'video' ? (
                          <video
                              src={project.media.src}
                              className="object-cover w-full h-full border-radius-small sm:border-radius-inside"
                              controls
                              playsInline
                              muted
                          />
                          ) : (
                          <Image
                              src={project.media.src}
                              alt={project.media.alt}
                              fill
                              className="object-cover border-radius-small sm:border-radius-inside"
                              priority={true}
                          />
                          )}
                      </div>
                  </div>
                </AnimateOnScroll>      
            )}

            {/* project description */}
            {/* <div className="max-w-3xl mx-auto">
                <div className="flex flex-row gap-8">
                    {project.role && (
                        <div>
                            <div className="uppercase text-xs tracking-widest text-gray-400 mb-1">Role</div>
                            <span className="big-body">{project.role}</span>
                        </div>
                    )}
                    {project.team && (
                        <div>
                            <div className="uppercase text-xs tracking-widest text-gray-400 mb-1">Team</div>
                            <span className="big-body">{project.team}</span>
                        </div>
                    )}
                    {project.year && (
                        <div>
                            <div className="uppercase text-xs tracking-widest text-gray-400 mb-1">Year</div>
                            <span className="big-body">{project.year}</span>
                        </div>
                    )}
                </div>
            </div> */}

            <AnimateOnScroll delay={0.5}>
              <div className="flex flex-col gap-6 sm:gap-8">
                  {renderContent()}
              </div>
            </AnimateOnScroll>
        </div>
        <Footer />
      </div>
    </div>
  );
} 