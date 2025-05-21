import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import heroImage from "@/public/assets/images/8E2A8316.webp";
import { useRef } from "react";
import { delayedFade } from "@/helpers/transitions";

export const HeroSection = () => {
  const { scrollYProgress } = useScroll({
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "150vh"]);

  // Animation sur l'axe X (horizontal)
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-300%"]);

  return (
    <section className="relative h-[120vh] w-full overflow-hidden">
      {/* Animation fade-in pour l'image */}
      <motion.div
        style={{ y }}
        className="h-full relative will-change-transform"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          src={heroImage}
          alt="hero image"
          layout="fill"
          objectFit="cover"
          style={{ objectPosition: "30% 20%" }}
          priority
          placeholder="blur"
        />
      </motion.div>

      <div className="absolute inset-0 bg-opacity-70 bg-gradient-to-t from-black via-black/50 to-transparent  flex flex-col justify-center items-start px-8 md:px-18 lg:px-24">
        {/* Animation du texte avec un délai */}
        <motion.h1
          className="text-white text-7xl md:text-[10rem] lg:text-[11rem] leading-[0.9] tracking-tight uppercase font-neueBold"
          variants={delayedFade}
          initial="initial"
          animate="enter"
          transition={{ delay: 1 }} // Le texte apparaîtra après l'image (1 seconde)
        >
          About
          <br />
          Amcros
        </motion.h1>
        <motion.p
          variants={delayedFade}
          initial="initial"
          animate="enter"
          transition={{ delay: 1 }}
          className="text-white mt-4 uppercase tracking-widest text-sm font-neueLight"
        >
          Sustainability / Impact / Talent
        </motion.p>
      </div>
    </section>
  );
};
