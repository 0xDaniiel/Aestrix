"use client";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, ReactNode } from "react";

type FadeInOnScrollProps = {
  children: ReactNode;
  className?: string;
};

const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const FadeInOnScroll = ({ children, className = "" }: FadeInOnScrollProps) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.01, // triggers sooner
    triggerOnce: true,
    rootMargin: "0px 0px -50px 0px", // preload animation slightly before full view
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={fadeInVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeInOnScroll;
