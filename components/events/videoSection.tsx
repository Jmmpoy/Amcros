import Video from "next-video";
import React from "react";
import EventVideo from "@videos/amcros-events.mov";
import FallbackImage from "@/public/assets/images/8E2A8989.webp";
import Instaplay from "player.style/instaplay/react";
import { FadeInWhenVisible } from "../fadeInWhenVisible";
import { motion } from "framer-motion";

const VideoSection = () => {
  return (
    <section className="py-24 h-screen-minus-footer sm:h-[50vh] relative overflow-hidden bg-black mb-24 md:mb-16">
      <FadeInWhenVisible>
        <div className="absolute inset-0 w-6/12 mx-auto">
          <Video
            theme={Instaplay}
            src={EventVideo}
            autoPlay
            loop
            muted
            className="w-full h-full object-contain"
            poster={FallbackImage}
          />
        </div>
      </FadeInWhenVisible>
    </section>
  );
};

export default VideoSection;
