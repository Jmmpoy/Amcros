import { useState, useRef } from "react";
import Layout from "@/components/layout";
import Hero from "@/components/hero";
import { LazyMotion, domAnimation, m, AnimatePresence } from "framer-motion";
import { NextSeo } from "next-seo";
import Cover from "@/components/cover";

export default function Home() {
  const containerRef = useRef(null);
  const [showCover, setShowCover] = useState(true);
  const [canFade, setCanFade] = useState(false);
  const onCoverAnimationComplete = () => {
    setCanFade(true);
  };

  return (
    <Layout class="no-scrollbar">
      <NextSeo title="Amcros" description="Amcros HomePage" />
      <div data-scroll-container ref={containerRef} id="scroll-container">
        <div data-scroll-section>
          <LazyMotion features={domAnimation}>
            <AnimatePresence>
              <Cover onFinish={onCoverAnimationComplete} />
            </AnimatePresence>
            <m.div initial="initial" animate="enter" exit="exit">
              <Hero canFade={canFade} />
            </m.div>
          </LazyMotion>
        </div>
      </div>
    </Layout>
  );
}
