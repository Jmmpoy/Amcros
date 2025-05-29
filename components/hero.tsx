import { motion } from "framer-motion";
import Container from "@/components/container";
import Navigation from "./header/navigation";
import amcrosVideo from "@videos/amcrosInstitut.mp4";
import Video from "next-video";
import { useEffect, useRef } from "react";

export default function Hero() {
  const menuItems = [
    { title: "Selected Works", url: "/works" },
    { title: "About", url: "/about" },
    { title: "Amcros Events", url: "/events" },
    { title: "Instagram", url: "https://www.instagram.com/amcros.events/" },
  ];

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
    }
  }, []);

  return (
    <div className=" mx-auto w-full Hero-Containe h-screen-minus-footer   relative overflow-hidden bg-black">
      {/* VIDÉO EN FOND */}
      {/* todo :  fix top margin to remove -30px */}
      <div className="absolute inset-0">
        <Video
          ref={videoRef}
          src={amcrosVideo}
          autoPlay
          loop
          muted
          playsInline
          controls={false}
          className="w-screen h-screen"
        />
        {/* OVERLAY NOIR */}
        <div className="absolute inset-0 bg-black opacity-70" />
      </div>
      {/* CONTENU */}
      <main className="relative z-10 h-screen flex flex-col justify-center items-center px-6">
        <div className="w-full sm:min-w-[550px] md:w-1/2 md:max-w-3xl text-center">
          <motion.p
            className="mb-0 font-neueBold uppercase sm:mb-3 text-5xl lg:text-8xl text-white"
            key="amcros-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            amcros
          </motion.p>
          <Navigation items={menuItems} />
        </div>
      </main>
    </div>
  );
}
