import Container from "@/components/container";
import { NextSeo } from "next-seo";
import React from "react";
import Video from "next-video";
import amcrosVideo from "@videos/amcros-works.mp4";
import Instaplay from "player.style/instaplay/react";
import { motion } from "framer-motion";

const pageVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,

    transition: { duration: 0.8, ease: "easeInOut" },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

const Works = () => {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="relative"
    >
      <Container extraClasses="Content-Container h-screen-minus-footer py-12 overflow-auto md:overflow-hidden">
        <NextSeo title="Selected Works" description="Amcros Selected Works" />

        {/* VIDEO BACKGROUND */}
        <div className="absolute inset-0">
          <Video
            theme={Instaplay}
            src={amcrosVideo}
            autoPlay
            loop
            muted
            className="w-full h-full object-cover z-0 "
          />
        </div>
      </Container>
    </motion.div>
  );
};

export default Works;
