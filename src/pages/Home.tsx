
import { Footer } from "@components/common";
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