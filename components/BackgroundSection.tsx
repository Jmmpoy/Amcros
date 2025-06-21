import Image from "next/image";
import { StaticImageData } from "next/image";
import { GradientOverlay } from "./GradientOverlay";

interface BackgroundSectionProps {
  children: React.ReactNode;
  imageSrc: string | StaticImageData;
  imageAlt: string;
  height?: string;
  topOpacity?: number;
  bottomOpacity?: number;
  className?: string;
}

export const BackgroundSection = ({
  children,
  imageSrc,
  imageAlt,
  height = "h-[100vh]",
  topOpacity = 70,
  bottomOpacity = 70,
  className = "",
}: BackgroundSectionProps) => {
  return (
    <section className={`relative w-full ${height} ${className}`}>
      <Image src={imageSrc} alt={imageAlt} layout="fill" objectFit="cover" />
      <div className="absolute inset-0">
        <GradientOverlay
          topOpacity={topOpacity}
          bottomOpacity={bottomOpacity}
        />
        <div className="relative z-10 h-full flex flex-col justify-center items-center px-6">
          {children}
        </div>
      </div>
    </section>
  );
};
