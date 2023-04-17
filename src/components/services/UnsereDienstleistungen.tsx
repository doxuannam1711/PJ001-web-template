export function UnsereDienstleistungen() {
    return (
        <section className={`max-w-[1400px] m-auto px-10`}>
            <h2 className={`text-[43px] m-auto text-center pt-20 pb-16`}>Unser Dienstleistungen</h2>
            <div className={`w-full flex gap-10 justify-center`}>
                <div className={`flex flex-col items-center max-w-[515px]`}>
                    <img src="/Beratung.png" alt="" className={`max-w-[275px]`} />
                    <h4 className={`text-center my-10`}>Schulungen</h4>
                    <p className={`text-center font-light`}>
                        Unsere Schulungen bieten dir die Möglichkeit, deine Kompetenzen im Bereich der
                        Informationssicherheit zu stärken und dein Unternehmen zu schützen. Du lernst, wie du deine
                        Infrastruktur schützen und mögliche Schwachstellen erkennen kannst. Wir verfügen über erfahrene
                        Experten, die dir das notwendige Wissen vermitteln, um sich auf zukünftige Bedrohungen
                        vorzubereiten.
                        <br /><br />
                        ab 180 CHF / Stunde
                    </p>
                </div>

                <div className={`flex flex-col items-center max-w-[515px]`}>
                    <img src="/Forensik.png" alt="" className={`max-w-[275px]`} />
                    <h4 className={`text-center my-10`}>Cyber Forensik</h4>
                    <p className={`text-center font-light`}>
                        Hast du Schwierigkeiten, auf deine Daten zuzugreifen, weil dein Laptop, Computer, NAS,
                        Festplatte oder USB-Stick beschädigt ist? Oder wurden deine Daten aufgrund eines Hackerangriffs
                        gelöscht? Keine Sorge, wir sind hier, um dir zu helfen. Unser Team von Experten verfügt über das
                        notwendige Wissen und die Technologien, um in solchen Fällen die Daten wahrscheinlich
                        wiederherzustellen zu können. Kontaktiere uns noch heute, wenn du Hilfe bei der Rettung deiner
                        Daten benötigst.
                        <br /><br />
                        ab 250 CHF / Stunde
                    </p>
                </div>
            </div>

            <div className={`w-full flex gap-10 justify-center mt-20`}>
                <div className={`flex flex-col items-center max-w-[515px]`}>
                    <img src="/Malware.png" alt="" className={`max-w-[275px]`} />
                    <h4 className={`text-center my-10`}>Cyber Ermittlungen</h4>
                    <p className={`text-center font-light`}>
                        Hast du Schwierigkeiten, einen Hackerangriff aufzuklären und den Täter zur Rechenschaft zu
                        ziehen? Oder möchtest du einfach wissen, was passiert ist und wie du dich in Zukunft besser
                        schützen kannst? Unser Team von Experten kann dir dabei helfen, den Angriff zu untersuchen und
                        die Beweise so aufzubereiten, dass sie vor Gericht verwendet werden können. Vertraue auf unsere
                        Erfahrung und unsere Leidenschaft, um den Angreifer zu finden und die notwendigen Schritte zu
                        unternehmen, um dich in Zukunft besser zu schützen.
                        <br /><br />
                        ab 250 CHF / Stunde
                    </p>
                </div>

                <div className={`flex flex-col items-center max-w-[515px]`}>
                    <img src="/Security.png" alt="" className={`max-w-[275px]`} />
                    <h4 className={`text-center my-10`}>Cyber Sicherheit</h4>
                    <p className={`text-center font-light`}>
                        Möchtest du wissen, wie sicher deine Infrastruktur ist oder wie du dein Unternehmen besser
                        schützen kannst? Wir sind gerne bereit, dich zu unterstützen und zu beraten. Unser Team von
                        Experten verfügt über umfassende Kenntnisse im Bereich der Informationssicherheit und kann dir
                        dabei helfen, Schwachstellen in deiner Infrastruktur zu identifizieren und Massnahmen zu
                        ergreifen, um dein Unternehmen besser zu schützen.
                        <br /><br />
                        ab 250 CHF / Stunde
                    </p>
                </div>
            </div>

            <div className={`w-full flex justify-center`}>
                <a href="https://calendly.com/" className={`block`} target={`_blank`}>
                    <button
                        className={`mt-20 bg-[#DF050F] px-[60px] py-[25px] text-white text-[16px] font-medium hover:bg-[#d95a49]`}>
                        Termin vereinbare
                    </button>
                </a>
            </div>
        </section>
    )
}