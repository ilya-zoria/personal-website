"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
  className,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
  className?: string;
}) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 7000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };

  return (
    <div className={cn("w-full md:max-w-4xl mx-auto px-0 md:px-8 lg:px-12 py-20", className)}>
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex mx-auto">
          <div className="relative h-40 w-40 sm:h-60 sm:w-60">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.src}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: randomRotateY(),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : randomRotateY(),
                    zIndex: isActive(index)
                      ? 999
                      : testimonials.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: randomRotateY(),
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-bottom"
                >
                  <Image
                    src={testimonial.src}
                    alt={testimonial.name}
                    width={300}
                    height={300}
                    draggable={false}
                    className="h-full w-full rounded-3xl object-cover object-center"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        <div className="flex justify-between flex-col py-4">
          <motion.div
            key={active}
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
          >
            <h3 className="text-center sm:text-left mb-1">
              {testimonials[active].name}
            </h3>
            <p className="text-center sm:text-left uppercase text-xs tracking-widest">
              {testimonials[active].designation}
            </p>
            <motion.p className="my-4 tracking-light h-28 sm:h-32 big-body text-center sm:text-left">
              {testimonials[active].quote.split(" ").map((word, index, arr) => (
                <motion.span
                  key={index}
                  initial={{
                    filter: "blur(10px)",
                    opacity: 0,
                    y: 5,
                  }}
                  animate={{
                    filter: "blur(0px)",
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                    delay: 0.02 * index,
                  }}
                  className="inline-block mr-1"
                >
                  {word}{index < arr.length - 1 && ' '}
                </motion.span>
              ))}
            </motion.p>
          </motion.div>
          <div className="flex gap-4 mx-auto sm:mx-0">
            <button
              onClick={handlePrev}
              className="h-7 w-7 rounded-full bg-background-lightDark transition duration-150 hover:bg-white flex items-center justify-center group/button dark:bg-neutral-800"
            >
              <IconArrowLeft className="h-5 w-5 text-text group-hover/button:text-neutral-950 group-hover/button:rotate-12 transition-transform duration-150" />
            </button>
            <button
              onClick={handleNext}
              className="h-7 w-7 rounded-full bg-background-lightDark transition duration-150 hover:bg-white flex items-center justify-center group/button dark:bg-neutral-800"
            >
              <IconArrowRight className="h-5 w-5 text-text group-hover/button:text-neutral-950 group-hover/button:-rotate-12 transition-transform duration-150" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};