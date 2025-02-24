"use client"

import { useState } from "react"
import { LeftCard } from "../components/left-card"
import { ProjectsCard } from "../components/projects-card"
import { CraftCard } from "../components/craft-card"
import { AboutCard } from "../components/about-card"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"


export default function Home() {
  const [projectsUnlocked, setProjectsUnlocked] = useState(false)

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="max-w-[900px] w-full flex flex-col gap-4 sm:gap-6 p-4 sm:p-8">
        <LeftCard />
        <div className="grid gap-4 sm:gap-6">
          <ProjectsCard
            isLocked={!projectsUnlocked}
            onUnlock={() => setProjectsUnlocked(true)}
          />
          <div className="h-full grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <CraftCard />
            <AboutCard title="About Me" imageSrc="/images/about/about-preview.png" />
          </div>
        </div>
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
                <a href="https://v0.dev/">
                  <img src="images/icons/ic-v0.svg" alt="ic-v0" width="20" height="20" />
                </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-sm">Vercel v0</p>
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