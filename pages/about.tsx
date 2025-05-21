import { NextSeo } from "next-seo";
import Image from "next/image";
import { useEffect } from "react";
import heroImage from "@/public/assets/images/8E2A8316.webp";

import { HeroSection } from "../components/about/hero";
import Lenis from "lenis";
import { FadeInWhenVisible } from "@/components/fadeInWhenVisible";
import { Manifesto } from "@/components/about/manifesto";
import Section from "@/components/about/section";
import { Events } from "@/components/about/events";
import { Vision } from "@/components/about/vision";

export default function About() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);

      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="mx-auto w-full">
      <NextSeo title="About" description="About Amcros" />
      <HeroSection />
      <Manifesto />
      <Events />
      <Vision />
    </div>
  );
}
