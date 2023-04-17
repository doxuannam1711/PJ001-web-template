
import { Footer } from "@components/common";
import {
    Hero,
    UnserAnsatz,
    UnserStandort,
    UnsereDienstleistungen,
    UnserePartner,
    CTA
} from "@components/home";



export default function () {
    return (
        <div>
            <Hero />
            <UnserAnsatz />
            <UnserStandort />
            <UnsereDienstleistungen />
            <UnserePartner />
            <CTA />
            <Footer />
        </div>
    )
}