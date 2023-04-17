export function KontaktForm() {
    return (
        <section className={`max-w-[1400px] px-[4vw] py-[6.6vmax] m-auto`}>
            <div className={`w-full flex gap-10`}>
                <div className={`w-1/2`}>
                    <h3 className={`text-[43px] font-normal`}>Kontakt</h3>
                    <p className={`font-light mt-10`}>
                        Telefonisch erreichst Du uns von Montag bis Freitag von 08:30 bis 17:30.
                        <br /><br />
                        +41 31 398 24 24
                    </p>
                    <div className={`flex items-center gap-4 mt-10`}>
                        <a href="https://www.instagram.com/daenzerconsulting/" target={`_blank`}>
                            <img src="/instagram.png" className={`w-[15px]`} />
                        </a>
                        <a href="https://www.linkedin.com/company/daenzer-consulting/" target={`_blank`}>
                            <img src="/linkedin.svg" className={`w-[15px]`} />
                        </a>
                    </div>
                </div>
                <form className={`w-1/2 font-light`}>
                    <div className={`mb-2`}>Name *</div>
                    <div className={`flex gap-4`}>

                        <input type="text" placeholder={`Vorname`} required
                            className={`w-1/2 border border-[#ccc] bg-[#fafafa] px-4 py-2 rounded-[4px]`} />
                        <input type="text" placeholder={`Nachname`} required
                            className={`w-1/2 border border-[#ccc] bg-[#fafafa] px-4 py-2 rounded-[4px]`} />
                    </div>
                    <div className={`mt-6 mb-2`}>E-Mail *</div>
                    <input type="text" required
                        className={`w-full border border-[#ccc] bg-[#fafafa] px-4 py-2 rounded-[4px]`} />

                    <div className={`mt-6 mb-2`}>Nachricht *</div>
                    <textarea required rows={4}
                        className={`w-full border border-[#ccc] bg-[#fafafa] px-4 py-2 rounded-[4px]`} />

                    <button
                        className={`mt-10 bg-[#DF050F] px-[35px] py-[19px] text-white text-[14px] font-medium hover:bg-[#d95a49]`}>
                        Senden
                    </button>

                </form>
            </div>
        </section>
    )
}