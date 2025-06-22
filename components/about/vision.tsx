import { delayedFade } from "@/helpers/transitions";
import { motion } from "framer-motion";
import { FadeInWhenVisible } from "../fadeInWhenVisible";

export const Vision = () => {
  return (
    <section className="relative bg-black text-white min-h-[70vh] w-full flex items-center justify-center px-6 py-20">
      <div className="text-center max-w-4xl space-y-8">
        <FadeInWhenVisible>
          <motion.h2
            className="text-4xl md:text-6xl font-neueLight uppercase leading-tight tracking-tight"
            variants={delayedFade}
            initial="initial"
            animate="enter"
          >
            Les piliers de la
            <br />
            structure Amcros
          </motion.h2>
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          <div className="space-y-2 text-center flex flex-col justify-center items-center">
            <p className="text-xl md:text-8xl font-neueLight uppercase">1</p>
            <h3 className="text-lg md:text-xl font-neueLight uppercase">
              Amcros Institut
            </h3>
            <p className="text-base md:text-lg font-neueLight max-w-[30rem]">
              Un lieu de beauté, de bien-être et d’avenir. Très bientôt, un
              institut pensé pour révéler les talents, former avec passion et
              inspirer la nouvelle génération
            </p>
          </div>
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          <div className="space-y-2text-center flex flex-col justify-center items-center">
            <p className="text-xl md:text-8xl font-neueLight uppercase">2</p>
            <h3 className="text-lg md:text-xl font-neueLight uppercase">
              Amcros Event
            </h3>
            <p className="text-base md:text-lg font-neueLight max-w-[30rem]">
              Organisation d’événements à fort impact social, culturel et
              économique. Mise en réseau des acteurs du changement.
            </p>
          </div>
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          <p className="text-sm md:text-md font-neueLight italic pt-6">
            Une même ambition : Inspirer, former et connecter les talents.
          </p>
        </FadeInWhenVisible>
      </div>
    </section>
  );
};
