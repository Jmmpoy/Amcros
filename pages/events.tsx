import Container from "@/components/container";
import { NextSeo } from "next-seo";
import { motion } from "framer-motion";
import { fade } from "@/helpers/transitions";

export default function Events() {
  return (
    <Container extraClasses="Content-Container py-12 ">
      <NextSeo title="Events" description="Amcros Events" />

      <motion.section
        className="w-full space-y-20"
        initial="initial"
        animate="enter"
        exit="exit"
        variants={fade}
      >
        <div className="w-full px-4 md:px-10 max-w-5xl">
          <h1 className="text-5xl md:text-6xl font-neueBold uppercase leading-[1.1]">
            Amcros Events
          </h1>
          <p className="mt-6 text-base md:text-lg font-neueLight italic max-w-2xl">
            A future where dreaming, creating, and undertaking come together as
            acts of collective transformation.
          </p>
        </div>

        <div className="w-full px-4 md:px-10 max-w-5xl space-y-12">
          <p className="font-neueRegular text-base md:text-lg leading-relaxed max-w-4xl">
            Amcros Events est la branche événementielle d’AMCROS Institut,
            pensée comme une plateforme où beauté, innovation et entrepreneuriat
            se rencontrent pour inspirer, connecter et valoriser le potentiel
            africain, notamment congolais.
          </p>

          <p className="font-neueRegular text-base md:text-lg leading-relaxed max-w-4xl">
            Notre mission est claire : créer des événements d’exception,
            porteurs de sens et d’impact, qui célèbrent le talent, la créativité
            et l’excellence sous toutes leurs formes. Chaque initiative vise à
            favoriser les connexions, encourager la croissance, stimuler la
            réflexion et offrir aux acteurs locaux comme à la diaspora des
            opportunités concrètes et enrichissantes.
          </p>

          <p className="font-neueRegular text-base md:text-lg leading-relaxed max-w-4xl">
            Parmi nos temps forts, l’événement{" "}
            <span className="font-neueBold">
              « Entreprendre et innover à travers le monde »
            </span>
            , coorganisé avec{" "}
            <span className="font-neueBold">ELLE Côte d’Ivoire</span>, a marqué
            un tournant dans notre engagement. Il a réuni des entrepreneurs,
            experts et figures emblématiques comme{" "}
            <span className="font-neueBold">Harish Jegtani</span>,
            <span className="font-neueBold"> Tysia Mukuna</span> ou encore{" "}
            <span className="font-neueBold">Meagan Good</span>, autour des
            enjeux de l’innovation, du leadership et du développement durable en
            RDC et à l’international.
          </p>
        </div>

        <div className="w-full px-4 md:px-10 max-w-5xl space-y-8">
          <h2 className="text-2xl md:text-3xl font-neueBold uppercase">
            Nos domaines d’action
          </h2>
          <ul className="list-disc list-inside font-neueRegular text-base md:text-lg space-y-2">
            <li>Beauté (avec l’ouverture prochaine de AMCROS Institut)</li>
            <li>Entrepreneuriat</li>
            <li>Influence & médias</li>
            <li>Musique & cinéma</li>
            <li>Éveil patriotique & jeunesse</li>
          </ul>
        </div>

        <div className="w-full px-4 md:px-10 max-w-5xl space-y-6">
          <h2 className="text-2xl md:text-3xl font-neueBold uppercase">
            Nos partenaires
          </h2>
          <p className="font-neueRegular text-base md:text-lg leading-relaxed max-w-4xl">
            Notre démarche a déjà convaincu de nombreux partenaires de renom,
            tels que
            <span className="font-neueBold"> Socimex</span>,{" "}
            <span className="font-neueBold">Hilton</span>,
            <span className="font-neueBold"> Sky Agency</span>,{" "}
            <span className="font-neueBold">Tupuca</span>,
            <span className="font-neueBold"> le Ministère du Tourisme</span>,{" "}
            <span className="font-neueBold">le Ministère des Finances</span>, ou
            encore <span className="font-neueBold">La Kinoise Café</span>.
          </p>
        </div>
      </motion.section>
    </Container>
  );
}
