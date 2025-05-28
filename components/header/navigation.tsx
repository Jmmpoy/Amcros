import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

interface NavItem {
  title?: string;
  url: string;
}

interface NavigationProps {
  items: NavItem[];
}

export default function Navigation({ items }: NavigationProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const container = {
    initial: {},
    enter: {
      transition: {
        staggerChildren: 0.2,
      },
    },
    exit: {},
  };

  const item = {
    initial: { opacity: 0 },
    enter: {
      opacity: 1,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };

  return (
    <nav className="flex">
      <motion.ul
        variants={container}
        initial="initial"
        animate="enter"
        exit="exit"
        className="flex flex-col mt-6 lg:flex-row lg:mt-0 justify-between w-full self-center"
      >
        {items.map(({ title, url }, index) => (
          <motion.li
            key={index}
            variants={item}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="relative mx-2 text-lg lg:text-xl uppercase text-white"
          >
            <Link
              href={url}
              className="relative inline-block py-1 font-neueLight"
            >
              {title}
              <AnimatePresence>
                {hoveredIndex === index && (
                  <motion.div
                    className="absolute bottom-0 left-0 h-[1px] w-full bg-black origin-left"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    exit={{ scaleX: 0 }}
                    transition={{
                      duration: 0.3,
                      ease: "easeInOut",
                    }}
                  />
                )}
              </AnimatePresence>
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </nav>
  );
}
