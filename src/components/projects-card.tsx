"use client"

import { useState } from "react"
import { Lock, Plus, X, LockOpen } from 'lucide-react' 
import Image from "next/image"
import Link from 'next/link';
import Card from './ui/card';
import { Modal } from './ui/modal' 
import { Button } from "./ui/button"
import { Input } from "./ui/input"

export function ProjectsCard({ isLocked, onUnlock }: { isLocked: boolean, onUnlock: () => void }) {
  const [showPasswordModal, setShowPasswordModal] = useState(false)
  const [password, setPassword] = useState("")
  const [showProjectModal, setShowProjectModal] = useState(false)

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === "111") {
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
    setShowPasswordModal(false)
  }

  // Close modal when clicking outside
  const handleOutsideClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.classList.contains("modal-background")) {
      handleClosePasswordModal();
    }
  }

  return (
    <div className="">
      <div className="h-full flex flex-col gap-6 border-radius-outside bg-background-grey dark:bg-background-lightDark cursor-pointer border hover:border-black/20 dark:hover:border-white/20 shadow-sm ease-in-out duration-150" onClick={handleOpenProjectModal}>
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
          <img src="/images/projects/Projects-preview.png" className="absolute object-cover bottom-0" alt="" />
        </div>
      </div>

      {/* Projects Modal */}
      <Modal
        isOpen={showProjectModal}
        onClose={handleCloseProjectModal}
        title="Projects"
      >
        <div className="">
          <div className="grid grid-cols-1 gap-6 px-8 max-w-[700px]">
            <Card
              image="/images/projects/Carerix.png"
              title="Carerix"
              description="Redesign applicant tracking system"
              link="https://ilyazoria.notion.site/Carerix-8a8958db2aad4ba3bcec1468a67c856a?pvs=4"
              className="gradient-2"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card
                image="/images/projects/Brainly.png "
                title="Brainly"
                description="Design an AI study tool for students"
                link="https://ilyazoria.notion.site/Brainly-Test-Prep-864230d6c2384846a2fc4e138820e07f?pvs=4"
                className="gradient-1"
              />
              <Card
                image="/images/projects/Guidefoot.png"
                title="Guidefoot"
                description="My first startup for author's tours"
                link="https://medium.com/@ilya_zoria/guidefoot-website-for-authors-tours-ace39054783b"
                className="gradient-4"
              />
            </div>
            {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card
                image="/images/projects/CheapOair.png"
                title="CheapOair"
                description="Redesign booking a flight on apps"
                link="https://ilyazoria.notion.site/CheapOair-8497be415ed049319577bc8d0ce53dc5?pvs=4"
                className="gradient-3"
              />
                            <Card
                image="/images/projects/UIA.png"
                title="Ukraine International Airlines"
                description="Check-in online redesign"
                link="https://ilyazoria.notion.site/UIA-Check-in-online-redesign-8fc7a9f6eed44653a12b6d374f5aa7a5?pvs=4"
                className="gradient-5"
              />
            </div> */}
          </div>
        </div>
      </Modal>

      {/* Password Modal */}
      {showPasswordModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center modal-overlay" onClick={handleOutsideClick}>
          <div className="w-full max-w-md border-radius-outside p-6 m-6 bg-background dark:bg-background-lightDark">
            <div className="flex justify-between items-start">
              <h3>Unlock projects</h3>
              <button
                onClick={handleClosePasswordModal}
                className="rounded-full hover:bg-gray-300/50 dark:hover:bg-gray-700/50 p-2"
              >
                <X className="h-5 w-5 text" />
              </button>
            </div>
            <p className="pt-4">
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
                {/* <Button variant="default" size="icon"><LockOpen className="text-white" /></Button> */}
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
        </div>
      )}
    </div>
  )
}
