import Container from "@/components/container";
import { NextSeo } from "next-seo";
import React from "react";

const Works = () => {
  return (
    <Container extraClasses="Content-Container  h-screen py-12 overflow-auto  md:overflow-hidden">
      <NextSeo title="Selected Works" description="Amcros Selected Works" />
      WORKS
    </Container>
  );
};

export default Works;
