import Container from "@/components/container";
import { NextSeo } from "next-seo";
import React from "react";

const Privacy = () => {
  return (
    <Container extraClasses="Content-Container  h-screen py-12 overflow-auto  md:overflow-hidden">
      <NextSeo title="Privacy" description="Amcros Privacy Notice" />
      Privacy
    </Container>
  );
};

export default Privacy;
