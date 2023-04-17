export function SOCaaS() {
    return (
        <section className={`max-w-[1400px] px-[4vw] py-[6.6vmax] m-auto`}>
            <h2 className={`m-auto text-center text-[43px]`}>
                <strong>S</strong>ecurity <strong>O</strong>peration <strong>C</strong>enter <strong>a</strong>s <strong>a</strong>
                <strong>S</strong>ervice
            </h2>

            <div className={`flex items-center gap-8`}>
                <div className={`w-1/2 p-16`}>
                    <img src="/soc-1.png" alt="" className={`max-w-[400px]`} />
                </div>
                <div className={`w-1/2`}>
                    <h3>24/7 Monitoring deiner Infrastruktur</h3>
                    <div className={`font-light leading-[27px] mt-4 text-[16px]`}>
                        Um dir ein Höchstmass an Sicherheit zu bieten, überwachen unsere Experten deine Infrastruktur
                        rund um die Uhr. Somit kannst du dich tagsüber auf deine Kernkompetenzen und Leidenschaften
                        konzentrieren und deine Freizeit geniessen, während wir deine wichtigsten Assets zuverlässig
                        schützen. So kannst du jederzeit entspannt schlafen, wissend, dass deine Daten und Systeme in
                        sicheren Händen sind.
                    </div>
                </div>
            </div>

            <div className={`flex flex-row-reverse items-center gap-8`}>
                <div className={`w-1/2 p-16`}>
                    <img src="/Forensik.png" alt="" className={`max-w-[400px]`} />
                </div>
                <div className={`w-1/2`}>
                    <h3>Incident Response</h3>
                    <div className={`font-light leading-[27px] mt-4 text-[16px]`}>
                        Unser Team aus erfahrenen Experten informiert dich umgehend, wenn es zu einem kritischen Vorfall
                        kommt. Durch die frühzeitige Benachrichtigung hast du die Möglichkeit, schnell zu reagieren und
                        Schlimmeres zu verhindern. Statistiken zeigen, dass die durchschnittliche Zeit bis zur
                        Entdeckung eines Sicherheitsvorfalls bis zu 30 Stunden liegt. In dieser Zeit können Hacker
                        erheblichen Schaden anrichten. Mit unserem SOCaaS reduzieren wir die Reaktionszeit auf wenige
                        Stunden und minimieren somit Ausfallzeiten und Unterbrechungen in der Verfügbarkeit.
                    </div>
                </div>
            </div>

            <div className={`flex items-center gap-8`}>
                <div className={`w-1/2 p-16`}>
                    <img src="/soc-3.png" alt="" className={`max-w-[400px]`} />
                </div>
                <div className={`w-1/2`}>
                    <h3>Threat Intelligence</h3>
                    <div className={`font-light leading-[27px] mt-4 text-[16px]`}>
                        Um dir höchstmögliche Sicherheit zu gewährleisten, passen unsere Experten täglich unsere
                        automatisierten Workflows an aktuelle Cyber-Bedrohungen an. So erhältst du stets aktuelle
                        Informationen zu den neuesten Bedrohungen, mit denen du dich optimal schützen kannst. Durch die
                        kontinuierliche Überwachung der Infrastruktur können wir das Risiko einer Bedrohung stets
                        einschätzen und die notwendigen Schutzmassnahmen ergreifen. Wir bieten dir somit ein Höchstmass
                        an Sicherheit und einen zentralen Ansprechpartner für alle Fragen rund um Cyber Security.
                    </div>
                </div>
            </div>

            <div className={`flex flex-row-reverse items-center gap-8`}>
                <div className={`w-1/2 p-16`}>
                    <img src="/soc-4.png" alt="" className={`max-w-[400px]`} />
                </div>
                <div className={`w-1/2`}>
                    <h3>Threat Hunting</h3>
                    <div className={`font-light leading-[27px] mt-4 text-[16px]`}>
                        Sollte es dennoch zu einem Sicherheitsvorfall kommen, stehen unsere Spezialisten jederzeit
                        bereit, um die Ursache des Vorfalls zu ermitteln, das Risiko einzuschätzen und allenfalls eine
                        weitere Ausbreitung im Netzwerk zu verhindern. Dadurch können wir sicherstellen, dass deine
                        Daten und Systeme bestmöglich geschützt sind und schnell wiederhergestellt werden können.
                    </div>
                </div>
            </div>

            <div className={`flex items-center gap-8`}>
                <div className={`w-1/2 p-16`}>
                    <img src="/Malware.png" alt="" className={`max-w-[400px]`} />
                </div>
                <div className={`w-1/2`}>
                    <h3>Forensic Investigations</h3>
                    <div className={`font-light leading-[27px] mt-4 text-[16px]`}>
                        Sollte es trotz aller vorbeugenden Massnahmen zu einem erfolgreichen Cyber Angriff kommen,
                        stehen dir unsere erfahrenen Experten jederzeit mit Rat und Tat zur Seite. Sie analysieren den
                        Vorfall, versuchen die Verantwortlichen zu ermitteln und bereiten die Daten so auf, dass sie vor
                        Gericht verwendet werden können. Mit unserer Unterstützung können wir sicherstellen, dass der
                        Angriff schnell aufgeklärt und die Verantwortlichen zur Rechenschaft gezogen werden.
                    </div>
                </div>
            </div>

            <div className={`flex justify-center`}>
                <button
                    className={`mt-10 bg-[#DF050F] px-[70px] py-[25px] text-white text-[16px] font-medium hover:bg-[#d95a49]`}>
                    Preise und Offerte
                </button>
            </div>
        </section>
    )
}