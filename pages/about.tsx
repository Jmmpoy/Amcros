import Container from "@/components/container";
import { delayedFade } from "@/helpers/transitions";
import { NextSeo } from "next-seo";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <Container extraClasses="Content-Container py-12">
      <NextSeo title="About" description="About Amcros" />

      {/* Hero Section */}
      <section className="relative h-[80vh] w-full overflow-hidden">
        <Image
          src="/images/hero-kinshasa.jpg"
          alt="Kinshasa Vision"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-start px-8 md:px-24 z-10">
          <motion.h1
            className="text-white text-6xl md:text-[7rem] leading-[1.1] tracking-tight uppercase font-neueBold"
            variants={delayedFade}
            initial="initial"
            animate="enter"
          >
            About <br />
            <span className="text-yellow-400">Amcros</span>
          </motion.h1>
          <p className="text-white mt-4 uppercase tracking-widest text-sm font-neueLight">
            Sustainability / Impact / Talent
          </p>
        </div>
      </section>

      {/* Manifesto */}
      <section className="py-24 px-6 md:px-24 bg-white md:ml-[30%]">
        <motion.h2
          className="text-5xl md:text-6xl font-neueBold uppercase mb-10 leading-tight tracking-tight"
          variants={delayedFade}
          initial="initial"
          animate="enter"
        >
          Un modèle qui connecte et transforme
        </motion.h2>
        <motion.p
          className="text-xl md:text-2xl font-neueRegular leading-relaxed max-w-4xl"
          variants={delayedFade}
          initial="initial"
          animate="enter"
        >
          Amcros est une industrie congolaise fondée en 2024 par Clarisse
          Tshisekedi Ilunga, jeune entrepreneure passionnée de beauté, de
          communication et d’innovation. Profondément attachée à Kinshasa,
          Clarisse incarne une nouvelle génération de leaders africains qui
          investissent leur savoir-faire au service du développement local.
        </motion.p>
      </section>

      {/* Event Highlight */}
      <section className="relative w-full h-[70vh]">
        <Image
          src="/images/amcros-event.jpg"
          alt="Amcros Event"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-start px-8 md:px-24 z-10">
          <motion.h2
            className="text-white text-4xl md:text-5xl font-neueBold uppercase mb-4"
            variants={delayedFade}
            initial="initial"
            animate="enter"
          >
            Repousser les limites de l’innovation
          </motion.h2>
          <motion.p
            className="text-white font-neueRegular text-lg md:text-xl max-w-2xl"
            variants={delayedFade}
            initial="initial"
            animate="enter"
          >
            Le Grand Salon de Beauté (octobre 2024) et l’événement “Innover et
            Entreprendre” ont marqué les débuts d’Amcros. Ils ont su fédérer des
            figures influentes autour de l’impact, la beauté et
            l’entrepreneuriat.
          </motion.p>
        </div>
      </section>

      {/* Vision & Structure */}
      <section className="py-24 px-6 md:px-24 bg-black text-white md:ml-[25%]">
        <motion.h2
          className="text-5xl md:text-6xl font-neueBold uppercase mb-16"
          variants={delayedFade}
          initial="initial"
          animate="enter"
        >
          Les piliers de la structure Amcros
        </motion.h2>

        <div className="space-y-16">
          <motion.div variants={delayedFade} initial="initial" animate="enter">
            <h3 className="text-2xl md:text-3xl uppercase font-neueBold mb-3">
              1. Amcros Institut
            </h3>
            <p className="text-lg md:text-xl font-neueRegular leading-relaxed">
              Formation professionnelle, valorisation des métiers de la beauté,
              accompagnement des talents émergents.
            </p>
          </motion.div>

          <motion.div variants={delayedFade} initial="initial" animate="enter">
            <h3 className="text-2xl md:text-3xl uppercase font-neueBold mb-3">
              2. Amcros Event
            </h3>
            <p className="text-lg md:text-xl font-neueRegular leading-relaxed">
              Organisation d’événements à fort impact social, culturel et
              économique. Mise en réseau des acteurs du changement.
            </p>
          </motion.div>

          <motion.p
            className="text-center text-2xl md:text-3xl font-neueLight mt-16 italic leading-snug"
            variants={delayedFade}
            initial="initial"
            animate="enter"
          >
            Une même ambition : Inspirer, former et connecter les talents.
          </motion.p>
        </div>
      </section>
    </Container>
  );
}
