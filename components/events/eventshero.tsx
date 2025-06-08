import { delayedFade } from "@/helpers/transitions";
import { motion } from "framer-motion";
import Container from "../container";
export const EventsHero = () => {
  return (
    <Container>
      <div className="mx-auto  w-full lg:w-2/3 h-[60vh]  flex flex-col justify-center">
        {/* TITRE */}
        <div className="md:col-start-4 md:col-span-5 col-span-1">
          <motion.h1
            className=" text-brown text-4xl md:text-5xl lg:text-6xl leading-[0.9] tracking-tight uppercase font-neueBold text-center hover:text-gold transition-colors duration-300"
            variants={delayedFade}
            initial="initial"
            animate="enter"
            transition={{ delay: 0.2 }}
          >
            Amcros Events
          </motion.h1>
        </div>

        {/* DESCRIPTION */}

        {/* TAGLINE (répétée pour continuité sur mobile + desktop) */}
        <div className="md:col-span-2 col-span-1 mt-4 text-center">
          <motion.p className=" text-brown text-lg md:text-xl font-neueLight italic">
            A future where dreaming, creating, and undertaking come together as
            acts of collective transformation.
          </motion.p>
        </div>
      </div>
    </Container>
  );
};
