"use client";
import { motion } from "framer-motion";
import Container from "@/components/container";
import Navigation from "./header/navigation";
import amcrosVideo from "@videos/amcrosInstitut.mp4";
import amcrosVideoMobile from "@videos/amcros-events.mov";
import Video from "next-video";
import { useEffect, useRef, useState } from "react";
import useIntro from "hooks/useIntro";

export default function Hero({ canFade }: any) {
  const [hasSeenCover, setHasSeenCover] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const showAnimation = useIntro();

  useEffect(() => {
    const seen = sessionStorage.getItem("hasSeenCover");
    if (seen === "true") setHasSeenCover(true);
  }, []);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  const menuItems = [
    { title: "Selected Works", url: "/works" },
    { title: "About", url: "/about" },
    { title: "Amcros Events", url: "/events" },
    { title: "Instagram", url: "https://www.instagram.com/amcros.events/" },
  ];

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
    }
  }, []);

  console.log("showanim", showAnimation);

  const shouldFade = canFade || !showAnimation;

  return (
    <div className="mx-auto w-full Hero-Containe h-screen-minus-footer relative overflow-hidden bg-black">
      {/* VIDÉO EN FOND */}
      <div className="absolute inset-0">
        <Video
          ref={videoRef}
          src={isMobile ? amcrosVideoMobile : amcrosVideo}
          autoPlay
          loop
          muted
          playsInline
          controls={false}
          className="w-screen h-screen"
        />
        {/* OVERLAY NOIR */}
        <div className="absolute inset-0 bg-black opacity-80" />
      </div>

      {/* CONTENU */}
      <motion.main className="relative z-10 h-screen flex flex-col justify-center items-center px-6">
        <div className="w-full sm:min-w-[550px] md:w-1/2 md:max-w-3xl text-center">
          <motion.p
            className="mb-0 font-neueBold uppercase sm:mb-3 text-5xl lg:text-8xl text-white hover:text-[#C5A880] transition-colors duration-300"
            key="amcros-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: shouldFade ? 1 : 0 }}
            transition={{ duration: 0.6, ease: [0.65, 0.05, 0.36, 1] }}
          >
            amcros
          </motion.p>
          <Navigation items={menuItems} canFade={shouldFade} />
        </div>
      </motion.main>
    </div>
  );
}
