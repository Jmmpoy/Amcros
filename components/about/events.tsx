import { FadeInWhenVisible } from "../fadeInWhenVisible";
import Image from "next/image";
import eventsSection from "@/public/assets/images/work.jpg";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const Events = () => {
  return (
    <section className="relative w-full h-[100vh]">
      <Image
        src={eventsSection}
        alt="Amcros Event"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-start px-16 lg:px-24">
        {/* Dégradé du haut vers le bas */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-transparent pointer-events-none"></div>
        {/* Dégradé du bas vers le haut */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent pointer-events-none"></div>

        <div className="relative z-10">
          <FadeInWhenVisible>
            <motion.h2 className="text-white text-4xl md:text-6xl font-neueLight uppercase mb-4">
              Repousser les
              <br /> limites de <br /> l'innovation
            </motion.h2>
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <motion.p className="text-white font-neueLight text-lg md:text-xl max-w-2xl">
              Le Grand Salon de Beauté (octobre 2024) et l'événement "Innover et
              Entreprendre" ont marqué les débuts d'Amcros. Ils ont su fédérer
              des figures influentes autour de l'impact, la beauté et
              l'entrepreneuriat.
            </motion.p>
          </FadeInWhenVisible>
        </div>
      </div>
    </section>
  );
};
