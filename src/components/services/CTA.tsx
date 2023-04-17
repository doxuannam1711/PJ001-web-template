import { Link } from "react-router-dom";
export function CTA() {
    return (
        <section className={`w-screen bg-[#363636] text-white py-56 mt-20`}>
            <h2 className={`text-[43px] text-center m-auto`}>
                Du hast noch ein paar Fragen, bevor es losgeht?
            </h2>
            <Link to={`/contact`}>
                <h2 className={`text-[43px] text-center m-auto underline underline-offset-8`}>
                    Melde dich bei uns.
                </h2>
            </Link>
        </section>
    )
}