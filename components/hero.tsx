import { motion } from "framer-motion";
import Container from "@/components/container";

import Navigation from "./header/navigation";
import { title } from "process";

export default function Hero() {
  const menuItems = [
    { title: "Selected Works", url: "/works" },
    { title: "About", url: "/about" },
    { title: "Amcros Events", url: "/events" },
    { title: "Instagram", url: "https://www.instagram.com/amcros.events/" },
  ];

  return (
    <Container extraClasses="Hero-Container relative">
      <main className=" h-screen flex flex-col justify-center items-center px-6 ">
        <div className=" w-[2/3] md:w-1/2 md:max-w-3xl sm:min-w-[550px]  text-center">
          <motion.p
            className={`mb-0 font-neueBold uppercase  sm:mb-3 text-5xl lg:text-8xl`}
            key="amcros-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            amcros
          </motion.p>
          <Navigation items={menuItems} />
        </div>
      </main>
    </Container>
  );
}
