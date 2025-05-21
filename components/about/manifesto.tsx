import { delayedFade } from "@/helpers/transitions";
import { motion, useScroll, useTransform } from "framer-motion";
import { FadeInWhenVisible } from "../fadeInWhenVisible";
import { useRef } from "react";

export const Manifesto = () => {
  return (
    <section className="relative h-[50vh] w-full bg-black text-white flex items-center justify-center px-6">
      <div className="text-center max-w-4xl">
        <FadeInWhenVisible>
          <motion.h2
            className="text-4xl md:text-6xl font-neueBold uppercase mb-8 leading-tight tracking-tight"
            variants={delayedFade}
            initial="initial"
            animate="enter"
          >
            Un modèle qui connecte
            <br />
            et transforme
          </motion.h2>
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          <motion.p className="text-lg md:text-xl font-neueRegular leading-relaxed">
            Amcros est une industrie congolaise fondée en 2024 par Clarisse
            Tshisekedi Ilunga, jeune entrepreneure passionnée de beauté, de
            communication et d’innovation. Profondément attachée à Kinshasa,
            Clarisse incarne une nouvelle génération de leaders africains qui
            investissent leur savoir-faire au service du développement local.
          </motion.p>
        </FadeInWhenVisible>
      </div>
    </section>
  );
};
