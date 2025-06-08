import React from "react";
import { FadeInWhenVisible } from "../fadeInWhenVisible";
import { motion } from "framer-motion";

const Highlight = () => {
  return (
    <section className="relative w-full  bg-white text-brown flex justify-center  px-16 lg:px-24  py-24  text-center h-auto">
      <div>
        <FadeInWhenVisible>
          <motion.p className=" font-neueRegular text-xl md:text-3xl ">
            L’événement « Entreprendre et innover à travers le monde »,
            coorganisé avec{" "}
            <strong className="text-gold">ELLE Côte d’Ivoire</strong>, a marqué
            un tournant. Il a réuni{" "}
            <strong className="text-gold">Harish Jegtani</strong>,{" "}
            <strong className="text-gold">Tysia Mukuna</strong>,
            <strong className="text-gold"> Meagan Good</strong> et bien d’autres
            autour du leadership, de l’innovation et du développement durable.
          </motion.p>
        </FadeInWhenVisible>
      </div>
    </section>
  );
};

export default Highlight;
