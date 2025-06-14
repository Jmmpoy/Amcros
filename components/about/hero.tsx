import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { delayedFade } from "@/helpers/transitions";

export const HeroSection = () => {
  return (
    <section className="relative h-[120vh] w-full overflow-hidden">
      {/* Motion background */}
      <div className="absolute inset-0">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: 'url("/assets/images/8E2A8316.webp")',
            backgroundPosition: "30% 20%",
          }}
        />
      </div>

      {/* Overlay + Texte */}
      <div className="absolute inset-0 bg-opacity-70 bg-gradient-to-t from-black via-black/50 to-transparent flex flex-col justify-center items-start px-8 md:px-18 lg:px-24">
        <motion.h1
          className="text-white text-7xl md:text-[10rem] lg:text-[11rem] leading-[0.9] tracking-tight uppercase font-neueBold hover:text-gold transition-colors duration-300"
          variants={delayedFade}
          initial="initial"
          animate="enter"
          transition={{ delay: 1 }}
        >
          About
          <br />
          Amcros
        </motion.h1>
        <motion.p
          variants={delayedFade}
          initial="initial"
          animate="enter"
          transition={{ delay: 1 }}
          className="text-white mt-4 uppercase tracking-widest text-sm font-neueLight"
        >
          Sustainability / Impact / Talent
        </motion.p>
      </div>
    </section>
  );
};
