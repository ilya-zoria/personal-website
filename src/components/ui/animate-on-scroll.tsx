import { motion } from "framer-motion";
import React from "react";

interface AnimateOnScrollProps {
  children: React.ReactNode;
  delay?: number;
}

const AnimateOnScroll: React.FC<AnimateOnScrollProps> = ({
  children,
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60, filter: "blur(5px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{
        duration: 1,
        delay: delay,
        ease: [0, 0, 0.2, 1],
      }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export default AnimateOnScroll; 