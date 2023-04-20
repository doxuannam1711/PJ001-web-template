import { HomeMobileTitle } from "./common/HomeMobileTitle";
import WhatWeDo1 from 'public/images/example/what-we-do-1.svg'
import WhatWeDo2 from 'public/images/example/what-we-do-2.svg'
import WhatWeDo3 from 'public/images/example/what-we-do-3.svg'
import { HomeTitle } from "./common/HomeTitle";
import { WhatWeDoCard } from "./whatWeDo/WhatWeDoCard";

export function WhatWeDo() {
    return (
        <section>
            <HomeMobileTitle className="md:hidden mt-20">What We <span className="text-primary-light">Do</span></HomeMobileTitle>

            <HomeTitle textClassName="text-black" className="hidden md:flex md:pl-[70px]">
                Was wir tun.
            </HomeTitle>

            <div className="flex flex-row gap-x-[75px]">
                <WhatWeDoCard title="Process Engineering" imageUrl={WhatWeDo1} className="md:hidden flex flex-col">
                    This is a brief explanation of the service with USP and an attractive product value for it.
                </WhatWeDoCard>

                <WhatWeDoCard title="Projektleitung" imageUrl={WhatWeDo1} className="hidden md:flex md:flex-col">
                    Wir bieten Verfahrensingenieurwesen an: Optimierung und Planung von Produktionsprozessen. Effiziente Verfahren
                    für bessere Produkte und Dienstleistungen.
                </WhatWeDoCard>

                <WhatWeDoCard title="Business Analyse" imageUrl={WhatWeDo2} className="hidden md:flex md:flex-col">
                    Als Experten im System Engineering entwickeln wir maßgeschneiderte Systeme für unsere Kunden, um deren 
                    Anforderungen zu erfüllen.
                </WhatWeDoCard>

                <WhatWeDoCard title="DevOps Engineering" imageUrl={WhatWeDo3} className="hidden md:flex md:flex-col">
                    Als DevOps Engineers optimieren wir die Zusammenarbeit zwischen Softwareentwicklung und IT-Betrieb für 
                    schnelle und zuverlässige Software-Lieferungen.
                </WhatWeDoCard>
            </div>
        </section>
    )
}