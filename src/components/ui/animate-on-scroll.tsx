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
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.7,
        delay: delay,
        ease: [0.455, 0.03, 0.515, 0.955],
      }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export default AnimateOnScroll; 