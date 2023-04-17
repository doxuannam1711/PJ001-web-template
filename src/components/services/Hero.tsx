import { Header } from "../common";

export function Hero() {
    return (
        <section className={`h-screen w-screen bg-[url('/bg.jpg')] text-white`}>
            <Header dark />
            <div className={`w-full h-full flex items-center justify-center`}>
                <h1 className={`text-[44px] text-center`}>
                    Deine digitalen Herausforderungen  <br />sind unsere Leidenschaft!</h1>
            </div>
        </section>
    )
}