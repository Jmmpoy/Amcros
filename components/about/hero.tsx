import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { delayedFade } from "@/helpers/transitions";
import { Manifesto } from "./manifesto";

export const HeroSection = () => {
  return (
    <section className="relative h-[150vh] w-full overflow-hidden">
      {/* Motion background */}
      <motion.div className="absolute inset-0">
        <motion.div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: 'url("/assets/images/8E2A8316.webp")',
            backgroundPosition: "30% 20%",
          }}
          variants={delayedFade}
          initial="initial"
          animate="enter"
          transition={{ delay: 0.5, duration: 0.3 }}
        />
      </motion.div>

      {/* Overlay + Texte */}
      <div className="absolute inset-0 flex flex-col justify-center items-start px-8 md:px-18 lg:px-24">
        {/* Dégradé du haut vers le bas */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/10 to-transparent pointer-events-none"></div>
        {/* Dégradé du bas vers le haut */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent pointer-events-none"></div>

        <div className="relative z-10">
          <motion.h1
            className="text-white text-7xl md:text-[10rem] lg:text-[11rem] leading-[0.9] tracking-tight uppercase font-neueBold hover:text-gold transition-colors duration-300"
            variants={delayedFade}
            initial="initial"
            animate="enter"
            transition={{ delay: 3 }}
          >
            About
            <br />
            Amcros
          </motion.h1>
          <motion.p
            variants={delayedFade}
            initial="initial"
            animate="enter"
            transition={{ delay: 3 }}
            className="text-white mt-4 uppercase tracking-widest text-sm font-neueLight"
          >
            Sustainability / Impact / Talent
          </motion.p>
        </div>
      </div>
    </section>
  );
};
