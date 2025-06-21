import { FadeInWhenVisible } from "../fadeInWhenVisible";
import Image from "next/image";
import eventsSection from "@/public/assets/images/event-bleu.jpg";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Highlight = () => {
  return (
    <section className="relative w-full h-[120vh]">
      <Image
        src={eventsSection}
        alt="Amcros Event"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-start px-6 md:px-16 lg:px-24">
        {/* Dégradé du haut vers le bas */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/40 to-transparent pointer-events-none"></div>
        {/* Dégradé du bas vers le haut */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none"></div>

        <div className="relative z-10 mx-auto">
          <FadeInWhenVisible>
            <motion.p className="text-white font-neueRegular text-xl sm:text-3xl leading-relaxed max-w-5xl w-full mx-auto text-center">
              L'événement « Entreprendre et innover à travers le monde »,
              coorganisé avec <strong>ELLE Côte d'Ivoire</strong>, a marqué un
              tournant. Il a réuni <strong>Harish Jegtani</strong>,
              <strong> Tysia Mukuna</strong>,<strong> Meagan Good</strong> et
              bien d'autres autour du leadership, de l'innovation et du
              développement durable.
            </motion.p>
          </FadeInWhenVisible>
        </div>
      </div>
    </section>
  );
};

export default Highlight;
