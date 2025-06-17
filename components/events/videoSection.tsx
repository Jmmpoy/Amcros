import Video from "next-video";
import React from "react";
import EventVideo from "@videos/amcros-events.mov";
import FallbackImage from "@/public/assets/images/8E2A8989.webp";
import Instaplay from "player.style/instaplay/react";

const VideoSection = () => {
  return (
    <section className="pt-24 h-screen-minus-footer sm:h-[50vh] relative overflow-hidden">
      <div className="absolute inset-0">
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
    </section>
  );
};

export default VideoSection;
