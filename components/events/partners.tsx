import React from "react";
import { FadeInWhenVisible } from "../fadeInWhenVisible";
import { motion } from "framer-motion";

const Partners = () => {
  return (
    <section className="bg-black text-white px-6 flex justify-center text-center py-24 lg:py-24 h-[40vh]">
      <div className="max-w-5xl w-full space-y-6 flex flex-col items-center justify-center">
        <FadeInWhenVisible>
          <motion.h2 className="text-xl md:text-3xl font-neueRegular uppercase mb-6 hover:text-gold transition-colors duration-300">
            Nos partenaires
          </motion.h2>
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          <ul className="grid grid-cols-1  md:grid-cols-4 gap-2  md:gap-6 font-neueLight leading-relaxed my-10 sm:mt-6">
            <li className="text-xl">Socimex</li>
            <li className="text-xl">Hilton</li>
            <li className="text-xl">Sky Agency</li>
            <li className="text-xl">Tupuca</li>
            <li className="text-xl">Le Ministère du Tourisme</li>
            <li className="text-xl">Le Ministère des Finances</li>
            <li className="text-xl">La Kinoise Café</li>
          </ul>
        </FadeInWhenVisible>
      </div>
    </section>
  );
};

export default Partners;
