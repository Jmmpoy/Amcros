import React from "react";
import { FadeInWhenVisible } from "../fadeInWhenVisible";
import { motion } from "framer-motion";
import Image from "next/image";
import backgroundImage from "@/public/assets/images/events/event-3.jpg";

const Actions = () => {
  return (
    <section className="relative px-6 flex flex-col justify-center items-center text-white py-16 lg:py-24 h-[80vh]">
      {/* Image de fond */}
      <Image
        src={backgroundImage}
        alt="Background Events"
        layout="fill"
        objectFit="cover"
      />

      {/* Dégradé du haut vers le bas */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/60 to-transparent pointer-events-none"></div>
      {/* Dégradé du bas vers le haut */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent pointer-events-none"></div>

      <div className="relative z-10 max-w-4xl text-center">
        <FadeInWhenVisible>
          <motion.h2 className="text-xl md:text-3xl font-neueBold uppercase mb-6 hover:text-gold transition-colors duration-300">
            Nos domaines d'action
          </motion.h2>
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          <ul className="list-none list-inside font-neueRegular text-lg space-y-2">
            <li>Beauté (avec l'ouverture prochaine de AMCROS Institut)</li>
            <li>Entrepreneuriat</li>
            <li>Influence & médias</li>
            <li>Musique & cinéma</li>
            <li>Éveil patriotique & jeunesse</li>
          </ul>
        </FadeInWhenVisible>
      </div>
    </section>
  );
};

export default Actions;
