"use client"

import { useState } from "react"
import { Lock, Plus, X, LockOpen } from 'lucide-react' 
import Image from "next/image"
import Link from 'next/link';
import Card from './ui/card';
import { Modal } from './ui/modal' 
import { Button } from "./ui/button"
import { Input } from "./ui/input"

interface ProjectsCardProps {
  isLocked: boolean;
  onUnlock: () => void;
  className?: string;
  id?: string;
}

export function ProjectsCard({ isLocked, onUnlock, className, id }: ProjectsCardProps) {
  const [showPasswordModal, setShowPasswordModal] = useState(false)
  const [password, setPassword] = useState("")
  const [showProjectModal, setShowProjectModal] = useState(false)
  const [isClosing, setIsClosing] = useState(false)

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === "Slava_Ukraini") {
      onUnlock?.()
      setShowPasswordModal(false)
      setShowProjectModal(true) // Open project modal after unlocking
    } else {
      alert("Incorrect password")
    }
  }

  const handleOpenProjectModal = () => {
    if (isLocked) {
      setShowPasswordModal(true)
    } else {
      setShowProjectModal(true)
    }
  }

  const handleCloseProjectModal = () => {
    setShowProjectModal(false)
  }

  const handleClosePasswordModal = () => {
    setShowPasswordModal(false);
  }

  const handleOutsideClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setIsClosing(true)
      setTimeout(() => {
        setIsClosing(false)
        setShowPasswordModal(false)
      }, 300)
    }
  }

  return (
    <div id={id} className={`h-full flex flex-col gap-6 border-radius-outside bg-background-grey dark:bg-background-lightDark cursor-pointer border hover:border-black/20 dark:hover:border-white/20 shadow-sm ease-in-out duration-150 ${className}`} onClick={handleOpenProjectModal}>
      <div className="flex justify-between items-center pl-6 pt-6 pr-6 pb-10">
        <h3>Projects</h3>
        {isLocked ? (
          <button className="p-2 rounded-full hover:bg-gray-300/50 dark:hover:bg-gray-700/50">
            <Lock className="h-5 w-5 text" />
          </button>
        ) : (
          <button onClick={handleOpenProjectModal} className="p-2 rounded-full hover:bg-gray-300/50 dark:hover:bg-gray-700/50">
            <Plus className="h-5 w-5 text" />
          </button>
        )}
      </div>
      <div className="relative w-full sm:h-[280px] h-[150px]">
        <img src="/images/projects/Projects-preview-2.png" className="absolute object-cover bottom-0" alt="" />
      </div>

      {/* Projects Modal */}
      <Modal
        isOpen={showProjectModal}
        onClose={handleCloseProjectModal}
        title="Projects"
      >
        <div className="">
          <div className="grid grid-cols-1 gap-4 sm:gap-6 max-w-[650px]">
            <Card
                image="/images/projects/Brainly. Learning companion.png"
                title="Brainly. AI Learning Companion"
                description="Design vision for Brainly's future"
                link="https://ilyazoria.notion.site/Brainly-AI-Learning-Companion-864230d6c2384846a2fc4e138820e07f?pvs=4"
                className="gradient-4"
              />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <Card
                image="/images/projects/Brainly.png "
                title="Brainly. Test Prep"
                description="AI study tool for students"
                link="https://ilyazoria.notion.site/Brainly-Test-Prep-1c18f771dc3580079944c99db806fe0a?pvs=4"
                className="gradient-1"
              />
              <Card
                image="/images/projects/Carerix.png"
                title="Carerix"
                description="Redesign of applicant tracking system"
                link="https://ilyazoria.notion.site/Carerix-8a8958db2aad4ba3bcec1468a67c856a?pvs=4"
                className="gradient-2"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <Card
                image="/images/projects/Guidefoot.png"
                title="Guidefoot"
                description="Side project for author's tours"
                link="https://medium.com/@ilya_zoria/guidefoot-website-for-authors-tours-ace39054783b"
                className="gradient-4"
              />
              <Card
                image="/images/projects/CheapOair.png"
                title="CheapOair"
                description="Redesign flight booking flow"
                link="https://medium.com/@ilya_zoria/cheapoair-redesign-flight-booking-flow-for-mobile-apps-a111c6bdb72d"
                className="gradient-5"
              />
            </div>
          </div>
        </div>
      </Modal>

      {/* Password Modal */}
      <Modal
        isOpen={showPasswordModal}
        onClose={handleClosePasswordModal}
        title={<h2>Unlock projects</h2>}
        width="max-w-md"
        showHeaderBlur={false}
        showFooterBlur={false}
      >
        <div className="max-w-md mb-8">
          <p className="">
            Due to NDA I can't share details of my previous projects. To access it please enter a password.
          </p>
          <form onSubmit={handleUnlock} className="mt-4">
            <div className="flex w-full max-w-sm items-center gap-2">
              <Input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button variant="default" size="default">Unlock</Button>
            </div> 
            <div className="flex justify-between items-center">
              <p className="text-xs text-gray-500 mt-2">
                Don't know the password?{' '}
                <a href="mailto:ilzorya@gmail.com" className="hover:underline">
                  Email me →
                </a>
              </p>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  )
}
