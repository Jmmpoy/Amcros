import { delayedFade } from "@/helpers/transitions";
import { motion, useScroll, useTransform } from "framer-motion";
import { FadeInWhenVisible } from "../fadeInWhenVisible";
import { useRef } from "react";
import Image from "next/image";
import eventsSection from "@/public/assets/images/about-office.jpg";

export const Manifesto = () => {
  return (
    <section className="relative h-[120vh] w-full">
      <Image
        src={eventsSection}
        alt="Amcros Manifesto"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center px-6">
        {/* Dégradé du haut vers le bas */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-transparent pointer-events-none"></div>
        {/* Dégradé du bas vers le haut */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent pointer-events-none"></div>

        <div className="relative z-10 text-center max-w-4xl">
          <FadeInWhenVisible>
            <motion.h2
              className="text-white text-4xl md:text-6xl font-neueLight uppercase mb-8 leading-tight tracking-tight"
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
            <motion.p className="text-white font-neueLight text-lg md:text-xl leading-relaxed">
              Amcros est une industrie congolaise fondée en 2024 par Clarisse
              Tshisekedi Ilunga, jeune entrepreneure passionnée de beauté, de
              communication et d'innovation. Profondément attachée à Kinshasa,
              Clarisse incarne une nouvelle génération de leaders africains qui
              investissent leur savoir-faire au service du développement local.
            </motion.p>
          </FadeInWhenVisible>
        </div>
      </div>
    </section>
  );
};
