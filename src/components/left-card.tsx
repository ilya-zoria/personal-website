"use client"

import React, { useEffect, useRef } from "react"
import { motion, easeInOut, AnimatePresence } from "framer-motion"
import { Moon, Sun, MapPin } from 'lucide-react'
import { useTheme } from "../components/theme-provider"
import Image from "next/image"
import { Button } from "./ui/button"
import gsap from "gsap"
import { PixiPlugin } from "gsap/PixiPlugin"

gsap.registerPlugin(PixiPlugin)

const transition = { duration: 1, ease: easeInOut };
const variants = {
  hidden: { filter: "blur(10px)", opacity: 0 },
  visible: { filter: "blur(0)", opacity: 1 },
};

const titleSuffixes = ["interfaces", "for humans", "experience"]

export function LeftCard() {
  const { theme, toggleTheme } = useTheme()
  const [titleIndex, setTitleIndex] = React.useState(0)
  const imageRef = useRef(null);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prevIndex) => (prevIndex + 1) % titleSuffixes.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const element = imageRef.current;
    let animation;
    
    const handleMouseEnter = () => {
      animation = gsap.to(element, {
        duration: 1,
        pixi: {
          turbulence: 0.2,
          distortion: 20,
        },
        scale: 1.05,
        ease: "power2.out"
      });
    };
    
    const handleMouseLeave = () => {
      if (animation) animation.kill();
      gsap.to(element, {
        duration: 0.8,
        pixi: {
          turbulence: 0,
          distortion: 0,
        },
        scale: 1,
        ease: "power2.inOut"
      });
    };
    
    if (element) {
      element.addEventListener("mouseenter", handleMouseEnter);
      element.addEventListener("mouseleave", handleMouseLeave);
    }
    
    return () => {
      if (element) {
        element.removeEventListener("mouseenter", handleMouseEnter);
        element.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <div id="left-card" className="border-radius-outside bg-background-grey dark:bg-background-lightDark border p-6 flex flex-col sm:gap-32 gap-24 relative h-full">
      <div className="flex justify-between items-center">
        <div className="relative group">
          {/* Default state - simple text */}
          <span className="absolute text-sm group-hover:opacity-0 transition-opacity duration-200">
            Ilya Zoria
          </span>

          {/* Hover state - pill with arrow */}
          <div className="relative inline-flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <motion.svg
              fill="none"
              height="18"
              viewBox="0 0 17 18"
              width="17"
              className="absolute left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            >
              <path d="M1.4964 3.11002L4.46428 15.4055C4.73338 16.5204 6.23625 16.7146 6.77997 15.7049L9.5237 10.6094L14.9962 8.65488C16.0841 8.26638 16.108 6.73663 15.0329 6.31426L3.16856 1.65328C2.22708 1.28341 1.25905 2.12672 1.4964 3.11002ZM9.43322 10.6417L9.43355 10.6416C9.43344 10.6416 9.43333 10.6416 9.43322 10.6417L9.34913 10.4062L9.43322 10.6417Z" fill="black" stroke="white" strokeWidth="2"></path>
            </motion.svg>
            <span className="inline-flex items-center border-radius-inside bg-background-dark px-2 py-1 text-xs font-medium text-white dark:bg-background dark:text-background-dark group-hover:translate-x-3 group-hover:translate-y-4 transition-transform duration-200">
              Ilya Zoria
            </span>
          </div>
        </div>
        <button
          onClick={toggleTheme}
          className="inline-flex items-center justify-center rounded-full bg-transparent hover:bg-gray-300/50 dark:hover:bg-gray-700/50 transition-colors duration-200 p-2"
        >
          {theme === "light" ? (
            <Sun className="h-5 w-5" />
          ) : (
            <Moon className="h-5 w-5" />
          )}
        </button>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center gap-6">
        <div className="w-40 h-40 rounded-full overflow-hidden">
          <div ref={imageRef} className="w-full h-full">
            <Image 
              src="/images/Profile.png" 
              alt="Ilya Zoria profile"
              width={160}
              height={160}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
          {/* Animated text */}

        <div className="flex flex-col text-center gap-5 mb-3">
          <span className="md:text-5xl text-3xl font-semibold">Ilya Zoria</span>
          {/* <span className="md:text-xl text-lg">
            Product designer with indiemaker mindset
          </span> */}
        </div>
        <div className="flex gap-2">
          <Button 
            variant="default" 
            size="default"
            asChild
          >
            <a href="mailto:ilzorya@gmail.com">
              Say hi 👋
            </a>
          </Button>
          <Button 
            variant="outline" 
            size="default" 
            onClick={() => {
              const element = document.getElementById('projects-section');
              if (element) {
                const isMobile = window.innerWidth < 640; // sm breakpoint is 640px in Tailwind
                const offset = isMobile ? 16 : 24; // 16px for mobile, 24px for desktop
                
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - offset;
                
                window.scrollTo({
                  top: offsetPosition,
                  behavior: 'smooth'
                });
              }
            }}
          >
            View my work ↓
          </Button>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <p className="text-sm flex gap-1 items-center"><MapPin className="w-5 h-5" /> Alicante</p>
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
  )
}

