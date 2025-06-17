import { motion } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import background from "@/public/assets/images/main-event.png";
import { FadeInWhenVisible } from "./fadeInWhenVisible";

export default function Section() {
  return (
    <div className="relative flex items-center justify-center  h-screen-minus-footer md:h-[50vh] overflow-hidden md:py-32 bg-black">
      <FadeInWhenVisible>
        <Image
          src={background}
          fill
          alt="image"
          style={{ objectFit: "contain", objectPosition: "center" }}
          priority
          placeholder="blur"
          className="max-h-full max-w-full "
        />
      </FadeInWhenVisible>
    </div>
  );
}
