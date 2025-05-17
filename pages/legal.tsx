import Container from "@/components/container";
import { NextSeo } from "next-seo";
import React from "react";

const Legal = () => {
  return (
    <Container extraClasses="Content-Container  h-screen py-12 overflow-auto  md:overflow-hidden">
      <NextSeo title="Legal Notice" description="Amcros Legal Notice" />
      Legal
    </Container>
  );
};

export default Legal;
