"use client"

import BaseCard from "./base-card"
import { useState, useMemo } from "react"
import { Plus, X } from 'lucide-react'
import { Modal } from './ui/modal'
import { Button } from "./ui/button"
import AboutInnerCard from "./ui/about-inner-card"
import Autoplay from "embla-carousel-autoplay"
import * as React from "react"
import { Checkbox } from "@/components/ui/checkbox"
import Image from 'next/image';

interface AboutCardProps {
  title: string;
  imageSrc: string;
}

export function AboutCard({ title, imageSrc }: AboutCardProps) {
  const [showAboutModal, setShowAboutModal] = useState(false);
  const plugin = React.useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));

  const memories = useMemo(() => [
    { src: "/images/about/photos/Singapore.png", alt: "Singapore" },
    { src: "/images/about/photos/Koh-Samui.png", alt: "Koh Samui" },
    { src: "/images/about/photos/Bali-2.png", alt: "Bali" },
    { src: "/images/about/photos/Kuala-Lumpur.png", alt: "Kuala Lumpur" },
    { src: "/images/about/photos/Alicante.png", alt: "Alicante" },
    { src: "/images/about/photos/Paris.png", alt: "Paris" },
    { src: "/images/about/photos/Rotterdam.png", alt: "Rotterdam" },
    { src: "/images/about/photos/Warsaw.png", alt: "Warsaw" },
  ], []);

  const quotes = useMemo(() => [
    { quote: "I'm free before I lost", author: "Feans Jhafka" },
    { quote: "I met people so poor, so the only thing they have is money", author: "Unknown" },
    { quote: "I didn't have time to write a short letter, so I wrote a long one instead.", author: "Mark Twain" },
    { quote: "Much of what I stumbled into by following my curiosity and intuition turned out to be priceless later on.", author: "Steve Jobs" },
    { quote: "We buy things we don't need with money we don't have to impress people we don't like.", author: "Fight Club (1999)" },
    { quote: "There are two ways to be rich: One is by acquiring much, and the other is by desiring little.", author: "Jackie French Koller, 1948" },
  ], []);

  const todo = useMemo(() => [
    { text: "Build the house", completed: true },
    { text: "Ride a Tesla", completed: true },
    { text: "Live in Asia for 4 months", completed: true },
    { text: "Surf in Bali", completed: true },
    { text: "Skydive", completed: true },
    { text: "Live in another country for some time", completed: true },
    { text: "Visit Metallica concert", completed: true },
    { text: "Visit AC/DC concert", completed: true },
    { text: "Attend a match in Barcelona with son", completed: true },
    { text: "Live near sea", completed: true },
    { text: "Record an album", completed: false },
    { text: "Surf in Portugal", completed: false },
    { text: "Start my own business", completed: false },
    { text: "Burning Man", completed: false },
    { text: "US road trip", completed: false },
    { text: "Euro trip in a camper van", completed: false },
    { text: "Alps motorcycle tour", completed: false },
    { text: "See the Northern Lights", completed: false },
    { text: "Ride a Ferrari", completed: false },
    { text: "Take my kids to a rock concert", completed: false },
    { text: "Attend a football match in England with dad", completed: false },
    { text: "Return to the square in Paris where I proposed to Iryna", completed: false },
    { text: "Safari tour in Africa", completed: false },
    { text: "Visit Nepal", completed: false },
    { text: "Visit South America", completed: false },
    { text: "Visit Iceland", completed: false },
    { text: "Visit Tenerife", completed: false },
    { text: "Visit Dubai", completed: false },
    { text: "Yacht tour in the Mediterranean", completed: false },
  ], []);

  const person = useMemo(() => [
    { src: "/images/about/My bubble/Anton-Sten.jpg", title: "Anton Sten", twitterHandle: "antonsten" },
    { src: "/images/about/My bubble/Marco-Cornacchia.jpg", title: "Marco Cornacchia", twitterHandle: "marcofyi" },
    { src: "/images/about/My bubble/Rauno.jpg", title: "Rauno", twitterHandle: "raunofreiberg" },
    { src: "/images/about/My bubble/Ridd.png", title: "Ridd", twitterHandle: "ridd_design" },
    { src: "/images/about/My bubble/mds.jpg", title: "MDS", twitterHandle: "mds" },
    { src: "/images/about/My bubble/Tobias-van-Schneider.jpg", title: "Tobias van Schneider", twitterHandle: "vanschneider" },
    { src: "/images/about/My bubble/Ran-Segall.jpg", title: "Ran Segall", twitterHandle: "ransegall" },
    { src: "/images/about/My bubble/Raphael-Schaad.jpg", title: "Raphael Schaad", twitterHandle: "raphaelschaad" },
    { src: "/images/about/My bubble/Dan-Petty.jpg", title: "Dan Petty", twitterHandle: "dannpetty" },
    { src: "/images/about/My bubble/Jason-Fried.png", title: "Jason Fried", twitterHandle: "jasonfried" },
    { src: "/images/about/My bubble/Ggeg-Isenberg.jpg", title: "Greg Isenberg", twitterHandle: "gregisenberg" },
    { src: "/images/about/My bubble/Pieter-Levels.jpg", title: "Pieter Levels", twitterHandle: "levelsio" },
    { src: "/images/about/My bubble/Sahil-Lavingia.jpg", title: "Sahil Lavingia", twitterHandle: "shl" },
    { src: "/images/about/My bubble/Steve-Jobs.jpg", title: "Steve Jobs", twitterHandle: "apple" },
  ], []);

  const handleOpenAboutModal = () => {
    setShowAboutModal(true);
  };

  const handleCloseAboutModal = () => {
    setShowAboutModal(false);
  };

  const renderMemoryItem = (image, index) => (
    <CarouselItem key={index}>
      <Image src={image.src} alt={image.alt} layout="responsive" width={600} height={600} className="border-radius-inside overflow-hidden" />
      <p className="text-center text-sm pt-4">{image.alt}</p>
    </CarouselItem>
  );

  return (
    <div className="grid grid-cols-1 gap-6">
      <BaseCard
        title="About Me"
        mediaSrc="/images/about/about-preview.png"
        onClick={handleOpenAboutModal}
      >
      </BaseCard>

      <Modal isOpen={showAboutModal} onClose={handleCloseAboutModal} title="About me">
        <div className="max-w-[600px] grid grid-cols-1 gap-6">
          <AboutInnerCard title="Hey 👋 I'm Ilya Zoria">
          <div className="pl-6 pr-6 pb-6">
            <p className="mt-4">
              For over a decade, I've been helping companies bridge the gap between user needs and product vision through thoughtful design. Currently, I'm at <a className="hover:underline" href="https://brainly.com">Brainly</a>, designing AI tools to help students study smarter.
            </p>
            <p className="mt-4">
              Originally from 🇺🇦 Ukraine, I'm now based in 🇪🇸 Spain (because of a crazy neighbor). Actually, the war has changed not only my location; it has changed everything in my life. It’s like clicking the <code>Reset</code> button and starting onboarding from the beginning. But that’s another story.
            </p>
            <p className="mt-4">
              I love creating intuitive user experiences and prototyping new ideas in Figma or code. I don't limit myself to design only—I truly enjoy building products with the power of AI (thanks to Cursor and v0). I believe in a future where everyone can create their own products for their own needs. I'm working on that as well...
            </p>
            <p className="mt-4">
              When I’m not designing, I enjoy playing music with 🎸 + 🎹 and exploring the world with my family 👦🏼 👧🏻.
            </p>
            <img src="/images/about/about-preview.png" className="mt-6 border-radius-inside" alt="About preview" />
          </div>
          </AboutInnerCard>

          <AboutInnerCard title="Memories">
            <div className="pl-6 pr-6 pb-6">
              <Carousel
                plugins={[plugin.current]}
                className="cursor-grab" 
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
              >
                <CarouselContent>
                  {memories.map(renderMemoryItem)}
                </CarouselContent>
              </Carousel>
            </div>
          </AboutInnerCard>

          <div className="bg-background-grey dark:bg-background-lightDark shadow-sm border overflow-hidden border-radius-inside">
            <div className="bg-gradient-to-b from-[#FFD703] to-[#FABD03] px-6 py-4 border-b border-b-[#DCA604]">
              <h3 className="dark:text-text">Favorite quotes</h3>
            </div>
            <div className="dotted-divider mt-1" />
            <div className="max-h-[400px] overflow-auto scrollbar-hide px-6 py-4">
              {quotes.map((item, index) => (
                <div key={index} className="mb-4 last:mb-0">
                  <p className="mb-1">{item.quote}</p>
                  <p className="text-sm text-text-gray">{item.author}</p>
                </div>
              ))}
            </div>
          </div>

          <AboutInnerCard title={`To do (${todo.filter(task => task.completed).length}/${todo.length})`}>
            <div className="max-h-[400px] overflow-auto scrollbar-hide pl-6 pr-6">
              <ul className="list-none flex flex-col gap-4 pb-6">
                {todo.map((task, index) => (
                  <li key={index} className="flex items-center">
                    <Checkbox id={`task-${index}`} checked={task.completed} disabled />
                    <label htmlFor={`task-${index}`} className={`ml-3 ${task.completed ? "line-through text-text-body" : ""}`}>
                      {task.text}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          </AboutInnerCard>

          <AboutInnerCard title="My bubble">
            <div className="flex overflow-x-auto scrollbar-hide pl-4 pr-4 pb-6">
              {person.map((photo, index) => (
                <div key={index} className="flex-none px-3">
                  <a href={`https://x.com/${photo.twitterHandle}`} target="_blank" rel="noopener noreferrer">
                    <Photo image={photo.src} title={photo.title} />
                  </a>
                </div>
              ))}
            </div>
          </AboutInnerCard>

          <AboutInnerCard title="One More Thing …">
            <div className="pl-6 pr-6 pb-6">
              <p className="">
                Life can be much broader once you discover one simple fact—and that is: everything around you that you call life was made up by people that were no smarter than you.
              </p>
              <p className="mt-4">
                And you can change it. You can influence it. You can build your own things that other people can use.
              </p>
              <p className="mt-4">
                And the minute you can understand that you can poke life, and if you push in, then something will pop out the other side; that you can change it, you can mold it—that's maybe the most important thing: to shake off this erroneous notion that life is there, and you're just going to live in it versus embrace it, change it, improve it, make your mark upon it.
              </p>
              <p className="mt-4">
                I think that's very important, and however you learn that, once you learn it, you'll want to change life and make it better. Because it's kind of messed up in a lot of ways.
              </p>
              <p className="mt-4">
                Once you learn that, you'll never be the same again.
              </p>
              <p className="mt-4">Steve, 1994</p>
            </div>
          </AboutInnerCard>
        </div>
      </Modal>
    </div>
  )
}
