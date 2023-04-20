
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
    WorkWithUs
} from "@components/home";

export default function () {

    return (
        <div className="overflow-x-hidden">
            <BackToTop />
            <Header />
            <Hero />
            <OurMission />
            <WhatWeDo />
            <FocusPoint />
            <Domain />
            <TrustedBy />
            <WorkWithUs />
            <SocialBenefits />
            <Interested />
            <Footer />
        </div>
    )
}