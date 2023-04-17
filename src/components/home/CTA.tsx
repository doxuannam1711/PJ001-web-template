export function CTA() {
    return (
        <section className={`w-screen bg-[#363636] text-white py-20 mt-20`}>
            <h2 className={`text-[43px] text-center m-auto`}>
                Mach noch heute den ersten <br />
                Schritt – mit Dänzer Consulting.
            </h2>
            <div className={`flex justify-center pt-10`}>
                <a href={`https://calendly.com/`} target={`_blank`}>
                    <button
                        className={`bg-white text-black px-[35px] py-[19px] text-[14px] font-medium m-auto hover:bg-[#d7d7d7]`}>
                        Termin vereinbaren
                    </button>
                </a>
            </div>
        </section>
    )
}