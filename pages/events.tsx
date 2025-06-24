"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import { EventsHero } from "@/components/events/eventshero";
import Missons from "@/components/events/missons";
import Highlight from "@/components/events/highlight";
import Actions from "@/components/events/actions";
import mainEvent from "@/public/assets/images/main-event.png";
import secondImage from "@/public/assets/images/8E2A8989.webp";
import EventsVideo2 from "@videos/amcros-works.mp4";
import MainEventSection from "@/components/section";
import VideoSection from "@/components/events/videoSection";
import { NextSeo } from "next-seo";

export interface Media {
  mediaType: string;
  src: any;
  alt: string;
}

export const Events = () => {
  const container = useRef<HTMLDivElement>(null);

  return (
    <main ref={container} className="w-full">
      <NextSeo title="Amcros Events" description="Amcros Events" />
      <EventsHero />
      <Highlight />
      <MainEventSection />
      <Actions />
      <VideoSection />
    </main>
  );
};

export default Events;
