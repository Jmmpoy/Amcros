"use client";
import { m } from "framer-motion";
import { useState } from "react";
import Logo from "./logo";
import useIntro from "hooks/useIntro";

const transitionEase = { duration: 0.3, ease: "easeInOut" };
const slideTransition = { duration: 1, ease: [0.65, 0.05, 0.36, 1] };

const Cover = ({ onFinish }) => {
  const [fadeLogo, setFadeLogo] = useState(false);
  const [fadeButton, setFadeButton] = useState(false);
  const [startExit, setStartExit] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const showAnimation = useIntro();
  const handleLogoFadeComplete = () => {
    if (fadeLogo) setFadeButton(true);
  };

  const handleButtonFadeComplete = () => {
    if (fadeButton) setStartExit(true);
  };

  const handleButtonClick = () => setFadeLogo(true);

  const buttonOpacity = fadeButton ? 0 : isHovered ? 1 : 0;

  if (!showAnimation) return null;
  return (
    <m.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-white text-black"
      initial={{ opacity: 1, y: 0 }}
      animate={startExit ? { opacity: 1, y: "-100vh" } : { opacity: 1, y: 0 }}
      transition={slideTransition}
      onAnimationComplete={() => {
        if (startExit) onFinish();
      }}
    >
      <div className="text-center">
        <m.div
          initial={{ opacity: 1 }}
          animate={fadeLogo ? { opacity: 0 } : { opacity: 1 }}
          transition={transitionEase}
          onAnimationComplete={handleLogoFadeComplete}
          className="relative"
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
        >
          <Logo width={340} height={340} />
          <m.button
            aria-label="Entrer dans le site"
            className="absolute left-1/2 -translate-x-1/2 top-[250px] text-lg font-neueLight"
            initial={{ opacity: 0 }}
            animate={{ opacity: buttonOpacity }}
            transition={transitionEase}
            onAnimationComplete={handleButtonFadeComplete}
            onClick={handleButtonClick}
          >
            ENTRER
          </m.button>
        </m.div>
      </div>
    </m.div>
  );
};

export default Cover;
