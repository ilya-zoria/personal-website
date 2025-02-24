"use client"

import React from "react"
import { motion, easeInOut, AnimatePresence } from "framer-motion"
import { Moon, Sun } from 'lucide-react'
import { useTheme } from "../components/theme-provider"
import Gridball from "./ui/Gridball"

const transition = { duration: 1, ease: easeInOut };
const variants = {
  hidden: { filter: "blur(10px)", opacity: 0 },
  visible: { filter: "blur(0)", opacity: 1 },
};

const titleSuffixes = ["interfaces", "for humans", "experience"]

export function LeftCard() {
  const { theme, toggleTheme } = useTheme()
  const [titleIndex, setTitleIndex] = React.useState(0)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prevIndex) => (prevIndex + 1) % titleSuffixes.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div id="left-card" className="border-radius-outside bg-background-grey dark:bg-background-lightDark border p-6 flex flex-col gap-52 relative h-full">
      {/* <Gridball className="absolute inset-0" /> */}
      <div className="flex justify-between items-center">
        <div className="relative inline-flex items-center group">
            {/* Arrow icon that appears on hover */}
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
      <div className="flex-1 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={titleIndex}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={transition}
          >
            <div className="md:text-7xl text-5xl font-semibold flex flex-col text-center">
              <span>Design</span>
              <span className="mt-2 text-5xl font-semibold text-text-gray">
                {titleSuffixes[titleIndex].split("").map((letter, index) => (
                  <motion.span
                    key={index}
                    variants={variants}
                    transition={{ ...transition, delay: index * 0.03 }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="flex justify-between items-center">
        <p className="text-sm">Currently at <a className="hover:underline" href="https://brainly.com/">Brainly</a></p>
        <div className="flex gap-4 items-center">
          <a href="https://drive.google.com/file/d/12cO4HPtnB-IOtTcSiD3k-1gLMPC12dWl/view" target="_blank" rel="noopener noreferrer" className="text-sm hover:underline">
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

