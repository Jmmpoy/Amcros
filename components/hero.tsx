"use client";
import { motion } from "framer-motion";
import Container from "@/components/container";
import Navigation from "./header/navigation";
import amcrosVideo from "@videos/amcrosInstitut.mp4";
import amcrosVideoMobile from "@videos/amcros-events.mov";
import Video from "next-video";
import { useEffect, useRef, useState } from "react";
import useIntro from "hooks/useIntro";
import amcrosVideoPoster from "public/assets/images/8E2A8316.webp";

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
    { title: "Réalisations", url: "/works", type: "text" as const },
    { title: "À propos", url: "/about", type: "text" as const },
    { title: "Amcros Events", url: "/events", type: "text" as const },
    {
      title: "Instagram",
      url: "https://www.instagram.com/amcros.events/",
      type: "logo" as const,
    },
    {
      title: "Tiktok",
      url: "https://www.tiktok.com/@amcros.events?_t=ZG-8xOLVEmH3XU&_r=1",
      type: "logo" as const,
    },
    {
      title: "Facebook",
      url: "https://www.facebook.com/people/Amcrosinstitut/61564426320328/?mibextid=wwXIfr&rdid=opv5oQSoMrqVoOLt&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1F2Da6DgWa%2F%3Fmibextid%3DwwXIfr",
      type: "logo" as const,
    },
  ];

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
    }
  }, []);
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
          poster={amcrosVideoPoster}
        />
        {/* OVERLAY NOIR */}
        <div className="absolute inset-0 bg-black opacity-80" />
      </div>

      {/* CONTENU */}
      <motion.main className="relative z-10 h-screen flex flex-col justify-center items-center px-6">
        <div className="w-full sm:min-w-[550px] md:w-1/2 md:max-w-3xl text-center">
          <motion.p
            className="mb-0 font-neueLight uppercase sm:mb-3 text-5xl lg:text-8xl text-white hover:text-[#C5A880] transition-colors duration-300"
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
