import { Bubble2 } from "@components/vector";


export function OurMission() {
    return (
        <section className="flex flex-col items-center w-full min-h-screen mx-auto">

            <Bubble2 className="md:w-[760px] max-md:w-[365px] opacity-20" textClassName="md:flex md:flex-col">
            </Bubble2>
            <div className="hidden md:flex w-full max-w-[100%] leading-9 my-8 flex-col items-center justify-center translate-y-[-240%]">
                <p className="text-center font-bold text-[44px] leading-[48px]">Unsere Mission</p>
                <p className="mx-[165px] mt-[10px] text-center font-bold text-[60px] leading-[64px] tracking-[-0.5px] text-[#C1121F]">
                    Innovationen für Menschen schaffen durch massgeschneiderte Beratungen und IT-Lösungen.
                </p>
            </div>

            <div className="w-full max-w-[100%] leading-9 my-8 flex flex-col items-center justify-center md:hidden translate-y-[-170%]">
                <p className="text-center font-bold text-[44px] leading-[48px]">Our Mission</p>
                <p className="mx-[32px] mt-[10px] text-center font-bold text-[23px] leading-[32px] tracking-[-0.5px] text-[#C1121F]">
                    We innovate for humans,
                    with customized solutions that integrate data and engineering.
                </p>
            </div>
        </section>

    );
}
