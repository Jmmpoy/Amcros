import { FadeInWhenVisible } from "../fadeInWhenVisible";
import Image from "next/image";
import eventsSection from "@/public/assets/images/runway.jpg";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Highlight = () => {
  return (
    // <section className="relative w-full  bg-black text-white flex flex-col justify-center items-center  px-16 lg:px-24  py-24  text-center  mx-auto h-[50vh]">
    //   <div className="max-w-6xl">
    //     <FadeInWhenVisible>
    //       <motion.p className=" font-neueRegular text-xl md:text-4xl ">
    //         L’événement « Entreprendre et innover à travers le monde »,
    //         coorganisé avec <strong>ELLE Côte d’Ivoire</strong>, a marqué un
    //         tournant. Il a réuni <strong>Harish Jegtani</strong>,{" "}
    //         <strong>Tysia Mukuna</strong>,<strong> Meagan Good</strong> et bien
    //         d’autres autour du leadership, de l’innovation et du développement
    //         durable.
    //       </motion.p>
    //     </FadeInWhenVisible>
    //   </div>
    // </section>
    <section className="relative w-full h-[70vh]">
      <Image
        src={eventsSection}
        alt="Amcros Event"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute inset-0  bg-gradient-to-b from-black via-black/70 to-transparent  flex flex-col justify-center items-start px-6  md:px-16 lg:px-24">
        {/* <FadeInWhenVisible>
          <motion.h2 className="text-white text-4xl md:text-7xl font-neueBold uppercase mb-4">
            Repousser les
            <br /> limites de <br /> l’innovation
          </motion.h2>
        </FadeInWhenVisible> */}
        <FadeInWhenVisible>
          <motion.p className="text-white font-neueRegular text-xl sm:text-3xl leading-relaxed max-w-5xl w-full mx-auto text-center">
            L’événement « Entreprendre et innover à travers le monde »,
            coorganisé avec <strong>ELLE Côte d’Ivoire</strong>, a marqué un
            tournant. Il a réuni <strong>Harish Jegtani</strong>,
            <strong> Tysia Mukuna</strong>,<strong> Meagan Good</strong> et bien
            d’autres autour du leadership, de l’innovation et du développement
            durable.
          </motion.p>
        </FadeInWhenVisible>
      </div>
    </section>
  );
};

export default Highlight;
