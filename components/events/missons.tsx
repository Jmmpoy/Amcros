import React from "react";
import { FadeInWhenVisible } from "../fadeInWhenVisible";
import { motion } from "framer-motion";

const Missons = () => {
  return (
    <section className="bg-black text-white px-6  text-center flex flex-col items-center justify-center h-[50vh]">
      <div className="max-w-5xl space-y-20">
        <FadeInWhenVisible>
          <motion.p className="font-neueRegular text-xl sm:text-3xl leading-relaxed">
            Amcros Events est la branche événementielle de
            <strong> AMCROS Institut</strong>, pensée comme une plateforme où
            <strong> beauté</strong>, innovation et entrepreneuriat se
            rencontrent pour <strong>inspirer</strong>, connecter et valoriser
            le potentiel africain, notamment congolais.
          </motion.p>
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          <motion.p className="font-neueRegular text-xl sm:text-3xl leading-relaxed">
            Notre mission est claire :{" "}
            <strong>créer des événements d’exception</strong>, porteurs de sens
            et d’impact, qui célèbrent le talent, la créativité et l’excellence
            sous toutes leurs formes. Chaque initiative vise à{" "}
            <strong>favoriser les connexions </strong>, encourager la
            croissance,
            <strong> stimuler</strong> la réflexion et offrir aux acteurs locaux
            comme à la diaspora des opportunités concrètes et enrichissantes.
          </motion.p>
        </FadeInWhenVisible>
      </div>
    </section>
  );
};

export default Missons;
