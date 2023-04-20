

export function OurMission() {
    return (
        <section>
            <div className="text-center h-[447px] w-[100%] bg-[url('src/assets/images/logo-02.svg')] bg-no-repeat bg-center scale-[75%] opacity-10">
            </div>
            <div className="hidden md:flex w-full max-w-[100%] leading-9 my-8 flex-col items-center justify-center">
                <p className="text-center font-bold text-[44px] leading-[48px]">Unsere Mission</p>
                <p className="mx-[165px] text-center font-bold text-[60px] leading-[64px] tracking-[-0.5px] text-[#C1121F]">
                    Innovationen für Menschen schaffen durch massgeschneiderte Beratungen und IT-Lösungen.
                </p>
            </div>
            <div className="w-full max-w-[100%] leading-9 my-8 flex flex-col items-center justify-center md:hidden">
                <p className="text-center font-bold text-[44px] leading-[48px]">Our Mission</p>
                <p className="mx-[32px] text-center font-bold text-[23px] leading-[32px] tracking-[-0.5px] text-[#C1121F]">
                    We innovate for humans,
                    with customized solutions that integrate data and engineering.
                </p>
            </div>
        </section>

    );
}
