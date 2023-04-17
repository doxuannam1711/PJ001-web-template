import { Footer, Header } from "@components/common";

export default function () {
    return (
        <div>
            <Header />
            <section className={`m-auto max-w-[580px]`}>
                <h3 className={`mt-20`}>Impressum.</h3>
                <p className={`my-5`}><strong>Kontakt-Adresse</strong></p>
                <p className={`font-light leading-[27px]`}>
                    Dänzer Consulting GmbH<br />Parkstrasse 25<br />3014 Bern<br />Schweiz
                </p>
                <p className={`my-5`}><strong>Vertretungsberechtigte Person(en)</strong></p>
                <p className={`font-light leading-[27px]`}>
                    Lars Dänzer, Geschäftsführer
                </p>
                <p className={`my-5`}><strong>Handelsregister-Eintrag</strong></p>
                <p className={`font-light leading-[27px]`}>
                    Eingetragener Firmenname:
                </p>
                <p className={`mb-5`}><strong>Dänzer Consulting GmbH</strong></p>
                <p className={`font-light leading-[27px]`}>
                    Unternehmens-Nr (UID): <br />
                    CHE-303.266.725<br /><br />

                    Mehrwertsteuer-Nummer<br />
                    CHE-303.266.725 MWST
                </p>

                <p className={`my-5`}><strong>Haftungsausschluss</strong></p>
                <p className={`font-light leading-[27px]`}>
                    Der Autor übernimmt keinerlei Gewähr hinsichtlich der inhaltlichen Richtigkeit, Genauigkeit,
                    Aktualität, Zuverlässigkeit und Vollständigkeit der Informationen. <br /><br />

                    Haftungsansprüche gegen den Autor wegen Schäden materieller oder immaterieller Art, welche aus dem
                    Zugriff oder der Nutzung bzw. Nichtnutzung der veröffentlichten Informationen, durch Missbrauch der
                    Verbindung oder durch technische Störungen entstanden sind, werden ausgeschlossen.<br /><br />

                    Alle Angebote sind unverbindlich. Der Autor behält es sich ausdrücklich vor, Teile der Seiten oder
                    das gesamte Angebot ohne besondere Ankündigung zu verändern, zu ergänzen, zu löschen oder die
                    Veröffentlichung zeitweise oder endgültig einzustellen.<br /><br />
                </p>

                <p className={`my-5`}><strong>Haftungsausschluss für Links</strong></p>
                <p className={`font-light leading-[27px]`}>
                    Verweise und Links auf Webseiten Dritter liegen ausserhalb unseres Verantwortungsbereichs. Es wird
                    jegliche Verantwortung für solche Webseiten abgelehnt. Der Zugriff und die Nutzung solcher Webseiten
                    erfolgen auf eigene Gefahr des jeweiligen Nutzers.
                </p>

                <p className={`my-5`}><strong>Urheberrechte</strong></p>
                <p className={`font-light leading-[27px]`}>
                    Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos oder anderen Dateien auf dieser
                    Website, gehören ausschliesslich der Firma Dänzer Consulting GmbH oder den speziell genannten
                    Rechteinhabern. Für die Reproduktion jeglicher Elemente ist die schriftliche Zustimmung des
                    Urheberrechtsträgers im Voraus einzuholen.
                </p>
            </section>
            <Footer />
        </div>
    )
}