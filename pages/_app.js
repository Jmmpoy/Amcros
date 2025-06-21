import "@/styles/main.css";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { DefaultSeo } from "next-seo";
import Footer from "@/components/footer.tsx";
import SEO from "@/helpers/seo.config";
import { useEffect } from "react";
import Lenis from "lenis";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <DefaultSeo {...SEO} />

      <AnimatePresence mode="wait">
        <div key={router.asPath}>
          <Component {...pageProps} />
          <Footer />
        </div>
      </AnimatePresence>
    </>
  );
}
