import { BackToTop, Footer, Header } from "@components/common";
import {
  Domain,
  FocusPoint,
  Hero,
  Interested,
  OurMission,
  SocialBenefits,
  TrustedBy,
  WhatWeDo,
  WorkWithUs,
} from "@components/home";

export default function () {
  return (
    <>
      <Header />
      <BackToTop />
      <div className="overflow-hidden m-auto">
        <Hero />
        <OurMission />
        <SocialBenefits />
        <FocusPoint />
        <Domain />
        <Interested />
        <TrustedBy />
        <WhatWeDo />
        <WorkWithUs />
      </div>
      <Footer />
    </>
  );
}
