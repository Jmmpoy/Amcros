import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import background from "@/public/assets/images/main-event.png";

export default function Section() {
  return (
    <div
      className="relative flex items-center justify-center h-screen overflow-hidden"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
        <motion.div className="relative w-full h-full">
          <Image
            src={background}
            fill
            alt="image"
            style={{ objectFit: "contain" }}
            priority
            placeholder="blur"
          />
        </motion.div>
      </div>
    </div>
  );
}
