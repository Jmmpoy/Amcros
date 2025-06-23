import Container from "@/components/container";
import { NextSeo } from "next-seo";
import React from "react";
import Video from "next-video";
import amcrosVideo from "@videos/amcros-works.mp4";
import amcrosVideo2 from "@videos/amcros-works-2.mp4";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import amcrosPoster from "@/public/assets/images/8E2A8989.webp";
import amcrosPoster2 from "@/public/assets/images/events-hero.webp";

const pageVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,

    transition: { duration: 0.8, ease: "easeInOut" },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

const videoList = [
  {
    src: amcrosVideo,
    alt: "Amcros Works 1",
    poster: amcrosPoster,
  },
  {
    src: amcrosVideo2,
    alt: "Amcros Works 2",
    poster: amcrosPoster2,
  },
];

const CarouselButtons = ({
  onPrev,
  onNext,
  disabledPrev = false,
  disabledNext = false,
}: {
  onPrev: () => void;
  onNext: () => void;
  disabledPrev?: boolean;
  disabledNext?: boolean;
}) => (
  <div className="absolute px-2 mt-1 left-0 z-10 flex w-full justify-between max-w-full">
    <button
      className={`embla__prev p-2 hover:bg-white/10 rounded transition-colors ${
        disabledPrev ? "opacity-40 cursor-not-allowed" : ""
      }`}
      onClick={onPrev}
      aria-label="Vidéo précédente"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 354.91 145.72"
        className="w-6 h-6 fill-white rotate-180"
      >
        <path d="M0,81.88h324.91l-46.28,48.64c-3.43,3.6-3.29,9.3.32,12.72,3.6,3.43,9.3,3.29,12.72-.32l60.77-63.86c.06-.06.1-.12.16-.19.1-.11.2-.23.3-.35.1-.12.19-.24.28-.36.09-.12.18-.25.26-.37.08-.13.16-.25.24-.38.07-.13.15-.25.21-.38.07-.13.14-.27.2-.41.06-.13.11-.26.17-.39.06-.14.11-.29.16-.43.05-.13.09-.26.13-.39.04-.15.08-.29.12-.44.03-.13.06-.27.09-.4.03-.15.05-.3.08-.45.02-.14.04-.27.05-.41.01-.15.03-.29.03-.44,0-.14,0-.28,0-.43s0-.28,0-.43c0-.15-.02-.29-.03-.44-.01-.14-.03-.27-.05-.41-.02-.15-.05-.3-.08-.45-.03-.13-.06-.27-.09-.4-.04-.15-.08-.3-.12-.44-.04-.13-.08-.26-.13-.39-.05-.14-.1-.29-.16-.43-.05-.13-.11-.26-.17-.39-.06-.14-.13-.27-.2-.41-.07-.13-.14-.26-.21-.38-.08-.13-.15-.25-.24-.38-.08-.13-.17-.25-.26-.37-.09-.12-.18-.24-.28-.36-.1-.12-.19-.23-.3-.35-.05-.06-.1-.13-.16-.19L291.67,2.8c-1.77-1.86-4.14-2.8-6.52-2.8-2.23,0-4.46.82-6.2,2.48-3.6,3.43-3.74,9.12-.32,12.72l46.32,48.67H0v18Z" />
      </svg>
    </button>
    <button
      className={`embla__next p-2 hover:bg-white/10 rounded transition-colors ${
        disabledNext ? "opacity-40 cursor-not-allowed" : ""
      }`}
      onClick={onNext}
      aria-label="Vidéo suivante"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 354.91 145.72"
        className="w-6 h-6 fill-white"
      >
        <path d="M0,81.88h324.91l-46.28,48.64c-3.43,3.6-3.29,9.3.32,12.72,3.6,3.43,9.3,3.29,12.72-.32l60.77-63.86c.06-.06.1-.12.16-.19.1-.11.2-.23.3-.35.1-.12.19-.24.28-.36.09-.12.18-.25.26-.37.08-.13.16-.25.24-.38.07-.13.15-.25.21-.38.07-.13.14-.27.2-.41.06-.13.11-.26.17-.39.06-.14.11-.29.16-.43.05-.13.09-.26.13-.39.04-.15.08-.29.12-.44.03-.13.06-.27.09-.4.03-.15.05-.3.08-.45.02-.14.04-.27.05-.41.01-.15.03-.29.03-.44,0-.14,0-.28,0-.43s0-.28,0-.43c0-.15-.02-.29-.03-.44-.01-.14-.03-.27-.05-.41-.02-.15-.05-.3-.08-.45-.03-.13-.06-.27-.09-.4-.04-.15-.08-.3-.12-.44-.04-.13-.08-.26-.13-.39-.05-.14-.1-.29-.16-.43-.05-.13-.11-.26-.17-.39-.06-.14-.13-.27-.2-.41-.07-.13-.14-.26-.21-.38-.08-.13-.15-.25-.24-.38-.08-.13-.17-.25-.26-.37-.09-.12-.18-.24-.28-.36-.1-.12-.19-.23-.3-.35-.05-.06-.1-.13-.16-.19L291.67,2.8c-1.77-1.86-4.14-2.8-6.52-2.8-2.23,0-4.46.82-6.2,2.48-3.6,3.43-3.74,9.12-.32,12.72l46.32,48.67H0v18Z" />
      </svg>
    </button>
  </div>
);

const Works = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    axis: "x",
  });
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  React.useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="relative"
    >
      <Container extraClasses="Content-Container h-screen-minus-footer py-12 overflow-auto md:overflow-hidden">
        <NextSeo title="Selected Works" description="Amcros Selected Works" />

        {/* VIDEO CAROUSEL */}
        <div className="w-full flex justify-center items-center min-h-[80vh] h-full">
          <div className="relative overflow-hidden h-[80vh] max-h-[80vh] bg-black w-full md:w-8/12 mx-auto px-5 pt-5 pb-10 flex items-center justify-center">
            <div className="h-full relative w-full">
              <div className="embla h-full" ref={emblaRef}>
                <div className="embla__container h-full">
                  {videoList.map((video, idx) => (
                    <div
                      key={idx}
                      className="embla__slide relative h-full w-full flex items-center justify-center"
                    >
                      <Video
                        src={video.src}
                        className="w-full h-full object-contain bg-black rounded-lg"
                        controls
                        muted
                        loop
                        poster={video.poster}
                      />
                    </div>
                  ))}
                </div>
              </div>
              <CarouselButtons
                onPrev={scrollPrev}
                onNext={scrollNext}
                disabledPrev={selectedIndex === 0}
                disabledNext={selectedIndex === videoList.length - 1}
              />
            </div>
          </div>
        </div>
      </Container>
    </motion.div>
  );
};

export default Works;
