import { FadeInWhenVisible } from "../fadeInWhenVisible";
import Image from "next/image";
import eventsSection from "@/public/assets/images/8E2A8989.webp";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const Events = () => {
  const { scrollYProgress } = useScroll({
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["10vh", "-30vh"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["25vh", "-30vh"]);
  return (
    <section className="relative w-full h-[100vh]">
      <Image
        src={eventsSection}
        alt="Amcros Event"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute inset-0  bg-gradient-to-b from-black via-black/70 to-transparent  flex flex-col justify-center items-start  px-16 lg:px-24">
        <FadeInWhenVisible>
          <motion.h2
            style={{ y }}
            className="text-white text-4xl md:text-7xl font-neueBold uppercase mb-4"
          >
            Repousser les
            <br /> limites de <br /> l’innovation
          </motion.h2>
        </FadeInWhenVisible>
        <FadeInWhenVisible>
          <motion.p
            style={{ y: y2 }}
            className="text-white font-neueRegular text-lg md:text-xl max-w-2xl"
          >
            Le Grand Salon de Beauté (octobre 2024) et l’événement “Innover et
            Entreprendre” ont marqué les débuts d’Amcros. Ils ont su fédérer des
            figures influentes autour de l’impact, la beauté et
            l’entrepreneuriat.
          </motion.p>
        </FadeInWhenVisible>
      </div>
    </section>
  );
};
