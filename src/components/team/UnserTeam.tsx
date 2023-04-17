export function UnserTeam() {
    return (
        <section className={`max-w-[1400px] px-[4vw] py-[6.6vmax] m-auto`}>
            <h1 className={`m-auto text-center text-[47px] font-normal`}>Unser Team</h1>
            <div className={`w-full flex gap-10 mt-20`}>
                <div className={`w-1/2`}>
                    <h3 className={`text-[35px]`}>Lars Dänzer</h3>
                    <h4 className={`text-[25px] my-8`}>Geschäftsführer</h4>
                    <p className={`font-light`}>
                        Seit ich die Entwicklung und den Prototypenbau in der Elektronik Branche verlassen habe, bin ich
                        in der Informatik als Administrator, Application Manager oder technischer Projektleiter tätig
                        und immer mit den neusten Entwicklungen in meinem Fachgebiet vertraut. Dies befähigt mich, die
                        Projekte auf die Bedürfnisse des Kunden auszurichten. Ich denke analytisch, strategisch und
                        zukunftsorientiert, sehe schnell Potentiale und bin immer für innovative und neue Lösungen zu
                        begeistern.
                        <br /><br />

                        Als Bindeglied zwischen Menschen und Maschine bin ich mit meiner strategischen Begabung in der
                        Lage, mich durch jedes erdenkliche Dickicht zu schlagen und spontan den direkten Weg zum Ziel zu
                        finden. Ich kann aus meinem Blickwinkel dort Muster erkennen wo für andere nur ein
                        unübersichtliches Durcheinander herrscht. Ich nutze diese Möglichkeit, um über den
                        Tellerrand hinauszuschauen und eventuelle Hindernisse adäquat einzuschätzen. Mit meiner
                        Faszination für die Zukunft, lasse ich meinen Blick gerne über den Horizont hinaus schweifen.
                    </p>
                </div>
                <img src="/lars.jpeg" className={`w-1/2`} alt="" />
            </div>
            <a href="https://www.linkedin.com/company/daenzer-consulting/" target={`_blank`}>
                <button
                    className={`mt-10 bg-[#DF050F] px-[35px] py-[19px] text-white text-[14px] font-medium hover:bg-[#d95a49]`}>
                    LinkedIn
                </button>
            </a>
        </section>
    )
}