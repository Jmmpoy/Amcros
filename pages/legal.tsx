import Container from "@/components/container";
import { FadeInWhenVisible } from "@/components/fadeInWhenVisible";
import { NextSeo } from "next-seo";
import React from "react";

const Legal = () => {
  return (
    <Container extraClasses="Content-Container  py-12 overflow-auto max-w-3xl mx-auto">
      <NextSeo
        title="Mentions Légales"
        description="Mentions Légales d'Amcros"
      />
      <div className="text-white font-neueLight">
        <h1 className="text-3xl font-neueRegular mb-6">Mentions légales</h1>
        <FadeInWhenVisible>
          <section className="mb-8">
            <h2 className="text-xl font-neueRegular mb-2">Éditeur du site</h2>
            <p>
              <strong>Amcros</strong>
              <br />
              Société spécialisée dans l'organisation d'événements et la
              valorisation de la culture africaine.
              <br />
              Siège social : Kinshasa, Congo
              <br />
              Email : contact@amcros.com
              <br />
              Site web :{" "}
              <a href="https://www.amcros.com" className="text-gold underline">
                www.amcros.com
              </a>
            </p>
          </section>
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          <section className="mb-8">
            <h2 className="text-xl font-neueRegular mb-2">
              Directeur de la publication
            </h2>
            <p>Clarisse Tshisékédi (Représentant légal d'Amcros)</p>
          </section>
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          <section className="mb-8">
            <h2 className="text-xl font-neueRegular mb-2">Hébergement</h2>
            <p>
              Ce site est hébergé par :<br />
              <strong>Vercel Inc.</strong>
              <br />
              340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis
              <br />
              Site web :{" "}
              <a href="https://vercel.com" className="text-gold underline">
                vercel.com
              </a>
            </p>
          </section>
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          <section className="mb-8">
            <h2 className="text-xl font-neueRegular mb-2">
              Propriété intellectuelle
            </h2>
            <p>
              L'ensemble des contenus présents sur ce site (textes, images,
              vidéos, logos, etc.) sont la propriété exclusive d'Amcros ou de
              ses partenaires, sauf mention contraire. Toute reproduction,
              représentation, modification, publication, adaptation de tout ou
              partie des éléments du site, quel que soit le moyen ou le procédé
              utilisé, est interdite, sauf autorisation écrite préalable
              d'Amcros.
            </p>
          </section>
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          <section className="mb-8">
            <h2 className="text-xl font-neueRegular mb-2">
              Données personnelles
            </h2>
            <p>
              Les informations personnelles collectées via le site (formulaires
              de contact, inscriptions à des événements, etc.) sont destinées
              exclusivement à Amcros et ne sont en aucun cas cédées à des tiers.
              Conformément à la loi "Informatique et Libertés" et au RGPD, vous
              disposez d'un droit d'accès, de rectification et de suppression de
              vos données. Pour exercer ce droit, contactez-nous à l'adresse :{" "}
              <a
                href="mailto:contact@amcros.com"
                className="text-gold underline"
              >
                contact@amcros.com
              </a>
              .
            </p>
          </section>
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          <section className="mb-8">
            <h2 className="text-xl font-neueRegular mb-2">Cookies</h2>
            <p>
              Le site Amcros utilise des cookies à des fins de mesure d'audience
              et d'amélioration de l'expérience utilisateur. Vous pouvez à tout
              moment refuser ou paramétrer l'utilisation des cookies via les
              réglages de votre navigateur.
            </p>
          </section>
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          <section className="mb-8">
            <h2 className="text-xl font-neueRegular mb-2">Contact</h2>
            <p>
              Pour toute question ou demande d'information concernant le site ou
              son contenu, vous pouvez nous contacter à l'adresse suivante :{" "}
              <a
                href="mailto:contact@amcros.com"
                className="text-gold underline"
              >
                contact@amcros.com
              </a>
              .
            </p>
          </section>
        </FadeInWhenVisible>
      </div>
    </Container>
  );
};

export default Legal;
