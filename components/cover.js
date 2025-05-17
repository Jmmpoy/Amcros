"use client";
import { m } from "framer-motion";
import { useState } from "react";

const Cover = ({ onFinish }) => {
  const [startExit, setStartExit] = useState(false);

  return (
    <m.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-amber-400 to-yellow-200 text-black"
      initial={{ opacity: 1, y: 0 }}
      animate={startExit ? { opacity: 1, y: "-100vh" } : { opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      onAnimationComplete={() => {
        if (startExit) onFinish();
      }}
    >
      <div className="text-center space-y-4">
        <div className="text-4xl font-bold">AMCROS</div>
        <button
          className="text-lg underline"
          onClick={() => setStartExit(true)}
        >
          ENTRER
        </button>
      </div>
    </m.div>
  );
};

export default Cover;
