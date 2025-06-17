import React from "react";
import { FadeInWhenVisible } from "../fadeInWhenVisible";
import { motion } from "framer-motion";

const Actions = () => {
  return (
    <section className=" px-6 flex flex-col justify-center items-center bg-black text-white py-16 lg:py-24 h-[50vh]">
      <div className="max-w-4xl text-center">
        <FadeInWhenVisible>
          <motion.h2 className="text-xl md:text-3xl font-neueBold uppercase mb-6 hover:text-gold transition-colors duration-300">
            Nos domaines d’action
          </motion.h2>
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          <ul className="list-none list-inside font-neueRegular text-lg space-y-2">
            <li>Beauté (avec l’ouverture prochaine de AMCROS Institut)</li>
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
