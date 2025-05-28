import Container from "@/components/container";
import { NextSeo } from "next-seo";
import React from "react";
import Video from "next-video";
import amcrosVideo from "@videos/amcros-works.mp4";
import Instaplay from "player.style/instaplay/react";

const Works = () => {
  return (
    <Container extraClasses="Content-Container  h-screen py-12 overflow-auto  md:overflow-hidden">
      <NextSeo title="Selected Works" description="Amcros Selected Works" />
      <div className="absolute w-full h-full left-0 top-0">
        <Video
          theme={Instaplay}
          src={amcrosVideo}
          autoPlay={true}
          loop
          muted
          className="w-full h-full object-cover z-50"
        />
      </div>
    </Container>
  );
};

export default Works;
