"use client"

import { useState } from "react"
import { LeftCard } from "../components/left-card"
import { ProjectsCard } from "../components/projects-card"
import { CraftCard } from "../components/craft-card"
import { AboutCard } from "../components/about-card"

export default function Home() {
  const [projectsUnlocked, setProjectsUnlocked] = useState(false)

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="max-w-[900px] w-full flex flex-col gap-6 p-6">
        <LeftCard />
        <div className="grid gap-6">
          <ProjectsCard
            isLocked={!projectsUnlocked}
            onUnlock={() => setProjectsUnlocked(true)}
          />
          <div className="h-full grid grid-cols-1 sm:grid-cols-2 gap-6">
            <CraftCard />
            <AboutCard title="About Me" imageSrc="/images/about/about-preview.png" />
          </div>
        </div>
        <div className="w-full max-w-[1400px] padding-24 sm:padding-32 flex flex-row justify-between">
          <p className="text-sm">© 2025 Ilya Zoria</p>
          <p className="text-sm">Made with ❤️</p>
        </div>
      </div>
    </div>
  )
}