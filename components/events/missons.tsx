import React from "react";
import { FadeInWhenVisible } from "../fadeInWhenVisible";
import { motion } from "framer-motion";

const Missons = () => {
  return (
    <section className="bg-white text-brown px-6  text-center flex flex-col items-center justify-center">
      <div className="max-w-5xl space-y-8">
        <FadeInWhenVisible>
          <motion.p className="font-neueRegular text-lg sm:text-xl leading-relaxed">
            Amcros Events est la branche événementielle d’AMCROS Institut,
            pensée comme une plateforme où beauté, innovation et entrepreneuriat
            se rencontrent pour inspirer, connecter et valoriser le potentiel
            africain, notamment congolais.
          </motion.p>
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          <motion.p className="font-neueRegular text-lg sm:text-xl leading-relaxed">
            Notre mission est claire : créer des événements d’exception,
            porteurs de sens et d’impact, qui célèbrent le talent, la créativité
            et l’excellence sous toutes leurs formes. Chaque initiative vise à
            favoriser les connexions, encourager la croissance, stimuler la
            réflexion et offrir aux acteurs locaux comme à la diaspora des
            opportunités concrètes et enrichissantes.
          </motion.p>
        </FadeInWhenVisible>
      </div>
    </section>
  );
};

export default Missons;
