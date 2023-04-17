import { Header } from "../common/";

export function Hero() {
    return (
        <section className={`flex flex-col justify-between items-start h-screen w-screen bg-[url('/bg.jpg')] text-white`}>
            <Header dark />
            <div className={`w-full px-[4vw] pb-20`}>
                <h1 className={`text-[44px]`}>Dänzer Consulting: Deine digitalen <br /> Herausforderungen sind unsere <br /> Leidenschaft</h1>
                <div className={`mt-10 text-[24px] font-light`}>
                    Wirf mit uns einen Blick in die Zukunft <br /> und fasse Fuss in der nächsten Ära.
                </div>
            </div>
        </section>
    )
}