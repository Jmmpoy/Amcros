import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { delayedFade } from "@/helpers/transitions";
import Missons from "./missons";
import { FadeInWhenVisible } from "../fadeInWhenVisible";

export const EventsHero = () => {
  return (
    <section className="relative h-[200vh] w-full overflow-hidden">
      {/* Motion background */}
      <motion.div className="absolute inset-0">
        <motion.div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: 'url("/assets/images/events/event-1.png")',
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
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-transparent pointer-events-none z-0"></div>
        {/* Dégradé du bas vers le haut */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent pointer-events-none z-0"></div>

        <motion.h1
          className="relative z-20 text-white text-7xl md:text-[10rem] lg:text-[11rem] leading-[0.9] tracking-tight uppercase font-neueLight hover:text-gold transition-colors duration-300"
          variants={delayedFade}
          initial="initial"
          animate="enter"
          transition={{ delay: 3 }}
        >
          Amcros
          <br />
          Events
        </motion.h1>
        <motion.p
          variants={delayedFade}
          initial="initial"
          animate="enter"
          transition={{ delay: 3 }}
          className="relative z-20 text-white text-sm md:text-lg font-neueLight italic"
        >
          A future where dreaming, creating, and undertaking
          <br /> come together as acts of collective transformation.
        </motion.p>

        <div className="relative z-20 mx-auto">
          <Missons />
        </div>
      </div>
    </section>
  );
};
