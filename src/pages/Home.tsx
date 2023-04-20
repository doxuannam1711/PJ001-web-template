
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
        <div>
            <BackToTop/>
            <Header />
            <Hero />
            <OurMission />
            <SocialBenefits />
            <FocusPoint />
            <Domain />
            <Interested />
            <TrustedBy />
            <WhatWeDo />
            <WorkWithUs />
            <Footer />
        </div>
    )
}