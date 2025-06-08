"use client";

import { useRef, useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import { EventsHero } from "@/components/events/eventshero";
import Missons from "@/components/events/missons";
import Highlight from "@/components/events/highlight";
import { Gallery } from "@/components/events/gallery";
import Actions from "@/components/events/actions";
import Partners from "@/components/events/partners";
import MediaGrid from "@/components/events/mediagrid";

import runway from "@/public/assets/images/runway.jpg";
import work from "@/public/assets/images/work.jpg";
import mainEvent from "@/public/assets/images/main-event.png";
import secondImage from "@/public/assets/images/8E2A8989.webp";
import thirdImage from "@/public/assets/images/8E2A8544.webp";
import EventsVideo from "@videos/amcros-events.mov";
import EventsVideo2 from "@videos/amcros-works.mp4";
import { Asset } from "next-video/dist/assets.js";

gsap.registerPlugin(ScrollTrigger);

export interface Media {
  mediaType: string;
  src: any;
  alt: string;
}

export const Events = () => {
  const medias: Media[] = [
    {
      mediaType: "image",
      src: mainEvent.src,
      alt: "Upcomming Event",
    },
    // {
    //   mediaType: "image",
    //   src: mainEvent.src,
    //   alt: "Upcomming Event",
    // },
    { mediaType: "video", src: EventsVideo2, alt: "work" },
  ];
  const medias2: Media[] = [
    {
      mediaType: "image",
      src: mainEvent.src,
      alt: "Upcomming Event",
    },
    { mediaType: "image", src: secondImage.src, alt: "work" },
  ];
  const container = useRef<HTMLDivElement>(null);
  const galleryWrapperRef = useRef<HTMLDivElement>(null);
  const galleryTrackRef = useRef<HTMLUListElement>(null); // Ref pour le <ul>

  // Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  // ScrollTrigger horizontal scroll
  useGSAP(
    () => {
      const wrapper = galleryWrapperRef.current;
      const track = galleryTrackRef.current;

      if (!wrapper || !track) return;

      const totalScroll = track.scrollWidth - wrapper.offsetWidth;

      gsap.to(track, {
        x: -totalScroll,
        ease: "none",
        scrollTrigger: {
          trigger: wrapper,
          start: "center center",
          end: () => `+=${track.scrollWidth}`,
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });
    },
    { scope: container }
  );

  return (
    <main ref={container} className="w-full">
      <EventsHero />
      <MediaGrid medias={medias} columnsNum={2} />
      <Missons />
      <Highlight />

      <MediaGrid medias={medias2} columnsNum={2} />
      <Actions />
      <Partners />
    </main>
  );
};

export default Events;
