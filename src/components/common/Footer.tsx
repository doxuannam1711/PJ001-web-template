import { Link } from "react-router-dom";


export interface Footer {
    className?: string
}
export function Footer({ className = "" }: Footer) {
    return (
        <footer className={`w-screen ${className}`}>
            <div className={`flex justify-between max-w-[1400px] px-[4vw] py-[6.6vmax] m-auto`}>
                <div className={`text-[24px] font-light`}>
                    Stay safe! Bleibe in <br /> Verbindung!
                </div>

                <div className={`flex flex-col gap-8`}>
                    <div className={`text-[24px] font-light`}>
                        Fragen?
                    </div>
                    <Link to={'/contact'}>Kontakt</Link>
                    <div className={`flex items-center gap-4`}>
                        <a href="https://www.instagram.com/daenzerconsulting/" target={`_blank`}>
                            <img src="/instagram.png" className={`w-[15px]`} />
                        </a>
                        <a href="https://www.linkedin.com/company/daenzer-consulting/" target={`_blank`}>
                            <img src="/linkedin.svg" className={`w-[15px]`} />
                        </a>
                    </div>
                </div>

                <div className={`flex flex-col gap-5`}>
                    <Link to={'/blog'}>Blog</Link>
                    <Link to={'/services'}>Services</Link>
                    <Link to={'/team'}>Team</Link>
                </div>

                <div className={`flex flex-col gap-5`}>
                    <Link to={'/impressum'}>Impressum</Link>
                    <Link to={'/datenschutz'}>Datenschutz</Link>
                </div>
            </div>
        </footer>
    )
}