import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const FadeInWhenVisible = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
};
