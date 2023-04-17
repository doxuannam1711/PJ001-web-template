import { Link } from "react-router-dom";

export function UnsereDienstleistungen() {
    return (
        <section className={`w-screen bg-[#363636] text-white py-20 mt-20`}>
            <div className={`w-full flex flex-col gap-20 items-center`}>
                <h2 className={`text-[43px]`}>Unsere Dienstleistungen</h2>
                <div className={`flex items-start gap-8`}>
                    <div className={`flex flex-col`}>
                        <img src="/Beratung.png" alt="" className={`w-[190px]`} />
                        <h3 className={`mt-6`}>Schulungen</h3>
                    </div>
                    <div className={`flex flex-col`}>
                        <img src="/Forensik.png" alt="" className={`w-[190px]`} />
                        <h3 className={`mt-6`}>Cyber <br /> Forensik</h3>
                    </div>
                    <div className={`flex flex-col`}>
                        <img src="/Malware.png" alt="" className={`w-[190px]`} />
                        <h3 className={`mt-6`}>Cyber <br /> Ermittlungen</h3>
                    </div>
                    <div className={`flex flex-col`}>
                        <img src="/Security.png" alt="" className={`w-[190px]`} />
                        <h3 className={`mt-6`}>Cyber <br /> Sicherheit</h3>
                    </div>
                </div>
            </div>
            <div className={`flex justify-center pt-20`}>
                <Link to={`/services`}>
                    <button
                        className={`bg-white text-black px-[35px] py-[19px] text-[14px] font-medium m-auto hover:bg-[#d7d7d7]`}>
                        MEHR ERFAHREN
                    </button>
                </Link>
            </div>
        </section>
    )
}