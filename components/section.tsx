import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useRef, useState } from "react";
import Image from "next/image";
import background from "@/public/assets/images/runway.jpg";
import event1 from "@/public/assets/images/main-event.png";
import event2 from "@/public/assets/images/event-2.jpg";
import event3 from "@/public/assets/images/8E2A8989.webp";
import event4 from "@/public/assets/images/8E2A8986.webp";
import event5 from "@/public/assets/images/8E2A8544.webp";

import { FadeInWhenVisible } from "./fadeInWhenVisible";

import useEmblaCarousel from "embla-carousel-react";
import Link from "next/link";

// Composant pour l'image de fond avec overlay
const BackgroundContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="relative w-full h-[140vh] overflow-hidden">
      {/* Image de fond */}
      <Image
        src={background}
        alt="Amcros Event Background"
        layout="fill"
        objectFit="cover"
        priority
      />

      {/* Dégradé du haut vers le bas */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/40 to-transparent pointer-events-none" />
      {/* Dégradé du bas vers le haut */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none" />

      {/* Contenu principal */}
      <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-12 lg:px-24">
        {children}
      </div>
    </section>
  );
};

// Composant pour le titre
const Title = () => {
  return (
    <div className="text-center mb-8">
      <motion.h2
        className="text-white text-xl md:text-3xl font-neueBold uppercase hover:text-gold transition-colors duration-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Nos évènements
      </motion.h2>
    </div>
  );
};

// Composant pour la description
const Description = () => {
  const [hovered, setHovered] = useState(false);
  return (
    <div className="w-full text-center mb-12">
      <FadeInWhenVisible>
        <motion.p
          className="text-white font-neueRegular text-md sm:text-lg md:text-xl leading-relaxed max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Chez <strong>Amcros Events</strong>, nous façonnons des expériences
          uniques pour célébrer l'excellence, la culture et la créativité
          africaines. À travers galas, conférences et performances, nous mettons
          en lumière l'héritage et l'innovation du continent, tout en inspirant
          une nouvelle génération d'acteurs du changement.
        </motion.p>
        <div
          onMouseEnter={() => setHovered(!hovered)}
          onMouseLeave={() => setHovered(!hovered)}
          className="relative mx-2 text-lg lg:text-xl  text-white mt-10"
        >
          <Link
            href="https://ponaevent.com/events/55/?fbclid=PAZXh0bgNhZW0CMTEAAad70NnqkUGeqJ7wFJ4y3wPSIfWOKaGz2D3Gwh18fsJlSGnyxAfcvinQ8MdHLw_aem_VUKcF3q6LV1SWuPq8mUEyg"
            className="relative inline-block py-1 text-gold font-neueLight transition-colors duration-300 hover:text-[#C5A880]"
          >
            Billeterie de notre prochain évènement
            <AnimatePresence>
              {hovered && (
                <motion.div
                  className="absolute bottom-0 left-0 h-[1px] w-full bg-[#C5A880] origin-left"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  exit={{ scaleX: 0 }}
                  transition={{
                    duration: 0.3,
                    ease: [0.65, 0.05, 0.36, 1],
                  }}
                />
              )}
            </AnimatePresence>
          </Link>
        </div>
      </FadeInWhenVisible>
    </div>
  );
};

// Composant pour les boutons du carousel
const CarouselButtons = ({
  onPrev,
  onNext,
}: {
  onPrev: () => void;
  onNext: () => void;
}) => {
  return (
    <div className="absolute px-2 mt-1 left-0 z-10 flex w-full justify-between max-w-full">
      <button
        className="embla__prev p-2 hover:bg-white/10 rounded transition-colors"
        onClick={onPrev}
        aria-label="Image précédente"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 354.91 145.72"
          className="w-6 h-6 fill-black rotate-180"
        >
          <path d="M0,81.88h324.91l-46.28,48.64c-3.43,3.6-3.29,9.3.32,12.72,3.6,3.43,9.3,3.29,12.72-.32l60.77-63.86c.06-.06.1-.12.16-.19.1-.11.2-.23.3-.35.1-.12.19-.24.28-.36.09-.12.18-.25.26-.37.08-.13.16-.25.24-.38.07-.13.15-.25.21-.38.07-.13.14-.27.2-.41.06-.13.11-.26.17-.39.06-.14.11-.29.16-.43.05-.13.09-.26.13-.39.04-.15.08-.29.12-.44.03-.13.06-.27.09-.4.03-.15.05-.3.08-.45.02-.14.04-.27.05-.41.01-.15.03-.29.03-.44,0-.14,0-.28,0-.43s0-.28,0-.43c0-.15-.02-.29-.03-.44-.01-.14-.03-.27-.05-.41-.02-.15-.05-.3-.08-.45-.03-.13-.06-.27-.09-.4-.04-.15-.08-.3-.12-.44-.04-.13-.08-.26-.13-.39-.05-.14-.1-.29-.16-.43-.05-.13-.11-.26-.17-.39-.06-.14-.13-.27-.2-.41-.07-.13-.14-.26-.21-.38-.08-.13-.15-.25-.24-.38-.08-.13-.17-.25-.26-.37-.09-.12-.18-.24-.28-.36-.1-.12-.19-.23-.3-.35-.05-.06-.1-.13-.16-.19L291.67,2.8c-1.77-1.86-4.14-2.8-6.52-2.8-2.23,0-4.46.82-6.2,2.48-3.6,3.43-3.74,9.12-.32,12.72l46.32,48.67H0v18Z" />
        </svg>
      </button>
      <button
        className="embla__next p-2 hover:bg-white/10 rounded transition-colors"
        onClick={onNext}
        aria-label="Image suivante"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 354.91 145.72"
          className="w-6 h-6 fill-black"
        >
          <path d="M0,81.88h324.91l-46.28,48.64c-3.43,3.6-3.29,9.3.32,12.72,3.6,3.43,9.3,3.29,12.72-.32l60.77-63.86c.06-.06.1-.12.16-.19.1-.11.2-.23.3-.35.1-.12.19-.24.28-.36.09-.12.18-.25.26-.37.08-.13.16-.25.24-.38.07-.13.15-.25.21-.38.07-.13.14-.27.2-.41.06-.13.11-.26.17-.39.06-.14.11-.29.16-.43.05-.13.09-.26.13-.39.04-.15.08-.29.12-.44.03-.13.06-.27.09-.4.03-.15.05-.3.08-.45.02-.14.04-.27.05-.41.01-.15.03-.29.03-.44,0-.14,0-.28,0-.43s0-.28,0-.43c0-.15-.02-.29-.03-.44-.01-.14-.03-.27-.05-.41-.02-.15-.05-.3-.08-.45-.03-.13-.06-.27-.09-.4-.04-.15-.08-.3-.12-.44-.04-.13-.08-.26-.13-.39-.05-.14-.1-.29-.16-.43-.05-.13-.11-.26-.17-.39-.06-.14-.13-.27-.2-.41-.07-.13-.14-.26-.21-.38-.08-.13-.15-.25-.24-.38-.08-.13-.17-.25-.26-.37-.09-.12-.18-.24-.28-.36-.1-.12-.19-.23-.3-.35-.05-.06-.1-.13-.16-.19L291.67,2.8c-1.77-1.86-4.14-2.8-6.52-2.8-2.23,0-4.46.82-6.2,2.48-3.6,3.43-3.74,9.12-.32,12.72l46.32,48.67H0v18Z" />
        </svg>
      </button>
    </div>
  );
};

// Composant principal
export default function Section() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    axis: "x",
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const images = [
    { id: 1, src: event1, alt: "Événement principal" },
    { id: 2, src: event2, alt: "Événement secondaire" },
    { id: 3, src: event3, alt: "Événement 3" },
    { id: 4, src: event4, alt: "Événement 4" },
    { id: 5, src: event5, alt: "Événement 5" },
  ];

  return (
    <BackgroundContainer>
      <Title />
      <Description />

      {/* Section du carousel */}
      <div className="w-full flex justify-center">
        <div className="relative overflow-hidden h-[70vh] max-h-[70vh] bg-white w-full md:w-8/12 mx-auto px-5 pt-5 pb-10">
          <div className="h-full relative">
            <div className="embla" ref={emblaRef}>
              <div className="embla__container h-full">
                {images.map((item) => (
                  <div
                    key={item.id}
                    className="embla__slide relative h-full w-full"
                  >
                    <Image
                      src={item.src}
                      fill
                      alt={item.alt}
                      style={{
                        objectFit: "contain",
                        objectPosition: "center",
                      }}
                      priority
                      placeholder="blur"
                      className="max-h-full max-w-full opacity-90 hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
            <CarouselButtons onPrev={scrollPrev} onNext={scrollNext} />
          </div>
        </div>
      </div>
    </BackgroundContainer>
  );
}
