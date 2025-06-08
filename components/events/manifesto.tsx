import React from "react";
import { FadeInWhenVisible } from "../fadeInWhenVisible";
import { motion } from "framer-motion";
import { delayedFade } from "@/helpers/transitions";

const manifesto = () => {
  return (
    <section className="bg-white text-brown  px-6 h-[40vh] flex flex-col items-center justify-center">
      <div className="max-w-4xl text-center space-y-8">
        <FadeInWhenVisible>
          <motion.h2
            className="text-2xl md:text-3xl font-neueBold uppercase leading-tight tracking-tight hover:text-gold transition-colors duration-300"
            variants={delayedFade}
            initial="initial"
            animate="enter"
          >
            Une vision de transformation collective
          </motion.h2>
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          <motion.p className="text-lg md:text-xl font-neueRegular">
            Amcros Events est la branche événementielle d’AMCROS Institut,
            pensée comme une plateforme où beauté, innovation et entrepreneuriat
            se rencontrent pour inspirer, connecter et valoriser le potentiel
            africain, notamment congolais.
          </motion.p>
        </FadeInWhenVisible>
      </div>
    </section>
  );
};

export default manifesto;
