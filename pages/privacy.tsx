import Container from "@/components/container";
import { NextSeo } from "next-seo";
import React from "react";
import { FadeInWhenVisible } from "@/components/fadeInWhenVisible";

const Privacy = () => {
  return (
    <Container extraClasses="Content-Container py-12 overflow-auto max-w-3xl mx-auto">
      <NextSeo
        title="Politique de confidentialité"
        description="Politique de confidentialité d'Amcros"
      />
      <div className="text-white font-neueLight">
        <h1 className="text-3xl font-neueRegular mb-6">
          Politique de confidentialité
        </h1>
        <FadeInWhenVisible>
          <section className="mb-8">
            <h2 className="text-xl font-neueRegular mb-2">Introduction</h2>
            <p>
              La présente politique de confidentialité a pour but d'informer les
              utilisateurs du site{" "}
              <a href="https://www.amcros.com" className="text-gold underline">
                www.amcros.com
              </a>{" "}
              sur la manière dont Amcros collecte, utilise, protège et partage
              leurs données personnelles.
            </p>
          </section>
        </FadeInWhenVisible>
        <FadeInWhenVisible>
          <section className="mb-8">
            <h2 className="text-xl font-neueRegular mb-2">
              Données collectées
            </h2>
            <p>
              Nous collectons les informations suivantes lorsque vous utilisez
              notre site ou nos services :<br />
              - Informations d'identité (nom, prénom, email, etc.)
              <br />
              - Informations de contact (adresse email, téléphone, etc.)
              <br />
              - Données de navigation (adresse IP, type de navigateur, pages
              visitées, etc.)
              <br />- Toute information transmise via nos formulaires de contact
              ou d'inscription à des événements.
            </p>
          </section>
        </FadeInWhenVisible>
        <FadeInWhenVisible>
          <section className="mb-8">
            <h2 className="text-xl font-neueRegular mb-2">
              Finalités de la collecte
            </h2>
            <p>
              Les données collectées sont utilisées pour :<br />
              - Gérer les demandes de contact et d'information
              <br />
              - Organiser et gérer les inscriptions à nos événements
              <br />
              - Améliorer l'expérience utilisateur et le contenu du site
              <br />
              - Réaliser des analyses statistiques anonymes
              <br />- Respecter nos obligations légales et réglementaires
            </p>
          </section>
        </FadeInWhenVisible>
        <FadeInWhenVisible>
          <section className="mb-8">
            <h2 className="text-xl font-neueRegular mb-2">Cookies</h2>
            <p>
              Le site Amcros utilise des cookies pour améliorer la navigation,
              mesurer l'audience et proposer des contenus adaptés. Vous pouvez à
              tout moment refuser ou paramétrer l'utilisation des cookies via
              les réglages de votre navigateur.
            </p>
          </section>
        </FadeInWhenVisible>
        <FadeInWhenVisible>
          <section className="mb-8">
            <h2 className="text-xl font-neueRegular mb-2">
              Partage des données
            </h2>
            <p>
              Vos données personnelles ne sont jamais cédées à des tiers sans
              votre consentement, sauf obligation légale ou nécessité pour la
              bonne exécution de nos services (ex : prestataires techniques,
              hébergeur).
            </p>
          </section>
        </FadeInWhenVisible>
        <FadeInWhenVisible>
          <section className="mb-8">
            <h2 className="text-xl font-neueRegular mb-2">Sécurité</h2>
            <p>
              Amcros met en œuvre toutes les mesures techniques et
              organisationnelles appropriées pour protéger vos données
              personnelles contre la perte, l'accès non autorisé, la divulgation
              ou l'altération.
            </p>
          </section>
        </FadeInWhenVisible>
        <FadeInWhenVisible>
          <section className="mb-8">
            <h2 className="text-xl font-neueRegular mb-2">
              Droits des utilisateurs
            </h2>
            <p>
              Conformément à la réglementation en vigueur, vous disposez d'un
              droit d'accès, de rectification, d'opposition, de suppression et
              de portabilité de vos données personnelles. Pour exercer ces
              droits, contactez-nous à l'adresse suivante :{" "}
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
            <h2 className="text-xl font-neueRegular mb-2">Contact</h2>
            <p>
              Pour toute question relative à la présente politique de
              confidentialité ou à la gestion de vos données personnelles, vous
              pouvez nous contacter à l'adresse suivante :{" "}
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

export default Privacy;
