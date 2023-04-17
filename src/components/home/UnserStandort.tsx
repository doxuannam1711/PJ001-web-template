export function UnserStandort() {
    return (
        <section className={`max-w-[1400px] m-auto mt-32`}>
            <div className={`flex flex-row-reverse items-center gap-8`}>
                <div className={`w-1/2 p-5`}>
                    <iframe
                        title={`Map`}
                        className={`w-full h-[500px] map`}
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d42109.45187778527!2d7.444904166142379!3d46.94672345492886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1681568205752!5m2!1sen!2s"
                        allowFullScreen={undefined} loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
                <div className={`w-1/2 pl-8`}>
                    <h3 className={`text-[43px]`}>Unser Standort</h3>
                    <div className={`font-light leading-[27px] mt-4 text-[23px] leading-[40px]`}>
                        Unser Firmensitz befindet sich in Bern, einer zentral gelegenen Stadt in der schönen Schweiz.
                        Obwohl wir gerne in der Nähe unseres Büros zusammenarbeiten, nutzen wir die heutigen
                        Kommunikationsmittel, um mit den besten Fachleuten aus anderen Teilen der Schweiz und sogar aus
                        dem Ausland zusammenarbeiten. Durch die Möglichkeit, von überall aus zu arbeiten, können wir uns
                        auf die besten Talente und Ideen aus allen Teilen der Welt stützen und unsere Projekte auf das
                        höchste Niveau bringen.
                    </div>
                </div>
            </div>
        </section>
    )
}