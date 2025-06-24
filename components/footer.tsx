import Container from "@/components/container";
import { motion } from "framer-motion";
import { delayedFade } from "@/helpers/transitions";
import Link from "next/link";

const footerLinks = [
  { title: "Mentions Légales", href: "/legal" },
  { title: "Politique de confidentialité", href: "/privacy" },
  { title: "By 350Lab", href: "https://www.350lab.com/" },
];

const copyright = {
  text: " © 2025 Amcros Events. All rights reserved",
  href: "",
};

export default function Footer() {
  return (
    <footer className="fixed bottom-0 w-full bg-[#F9F4EF] mb-0 z-50">
      <Container>
        <div className="py-2 flex flex-col md:flex-row justify-between md:items-center">
          <motion.div
            className="mb-1 md:mb-0"
            variants={delayedFade}
            initial="initial"
            animate="enter"
            exit="exit"
          >
            <a
              href={copyright.href}
              className="text-[12px] font-founders uppercase text-[#2E1E1E] hover:text-[#C5A880] transition-colors duration-300"
            >
              {copyright.text}
            </a>
          </motion.div>

          <motion.div
            className="justify-between sm:min-w-[250px] hidden md:visible md:flex gap-[10px]"
            variants={delayedFade}
            initial="initial"
            animate="enter"
            exit="exit"
          >
            {footerLinks.map(({ title, href }) => (
              <Link
                key={title}
                href={href}
                className="text-[12px] font-founders uppercase text-[#2E1E1E] hover:text-[#C5A880] transition-colors duration-300"
              >
                {title}
              </Link>
            ))}
          </motion.div>
        </div>
      </Container>
    </footer>
  );
}
