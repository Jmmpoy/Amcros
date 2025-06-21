import { motion } from "framer-motion";
import { GradientOverlay } from "./GradientOverlay";
import { delayedFade } from "@/helpers/transitions";

interface CSSBackgroundSectionProps {
  children: React.ReactNode;
  backgroundImage: string;
  backgroundPosition?: string;
  height?: string;
  topOpacity?: number;
  bottomOpacity?: number;
  className?: string;
  fadeInDelay?: number;
  fadeInDuration?: number;
}

export const CSSBackgroundSection = ({
  children,
  backgroundImage,
  backgroundPosition = "30% 20%",
  height = "h-[100vh]",
  topOpacity = 70,
  bottomOpacity = 70,
  className = "",
  fadeInDelay = 0.5,
  fadeInDuration = 0.3,
}: CSSBackgroundSectionProps) => {
  return (
    <section
      className={`relative ${height} w-full overflow-hidden ${className}`}
    >
      {/* Motion background */}
      <motion.div className="absolute inset-0">
        <motion.div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url("${backgroundImage}")`,
            backgroundPosition: backgroundPosition,
          }}
          variants={delayedFade}
          initial="initial"
          animate="enter"
          transition={{ delay: fadeInDelay, duration: fadeInDuration }}
        />
      </motion.div>

      {/* Overlay + Content */}
      <div className="absolute inset-0">
        <GradientOverlay
          topOpacity={topOpacity}
          bottomOpacity={bottomOpacity}
        />
        <div className="relative z-10 h-full flex flex-col justify-center items-start px-8 md:px-18 lg:px-24">
          {children}
        </div>
      </div>
    </section>
  );
};
