import { Bubble2 } from "@components/vector";


export function OurMission() {
    return (
        <section >
            <Bubble2 size={267.34} className="h-[447px] md:h-[606.58px] w-[100%] opacity-30 translate-y-[20%]" textClassName=""></Bubble2>

            <div className="hidden md:flex w-full max-w-[100%] leading-9 my-8 flex-col items-center justify-center translate-y-[-100%]">
                <p className="text-center font-bold text-[44px] leading-[48px]">Unsere Mission</p>
                <p className="mx-[165px] mt-[10px] text-center font-bold text-[60px] leading-[64px] tracking-[-0.5px] text-[#C1121F]">
                    Innovationen für Menschen schaffen durch massgeschneiderte Beratungen und IT-Lösungen.
                </p>
            </div>

            <div className="w-full max-w-[100%] leading-9 my-8 flex flex-col items-center justify-center md:hidden translate-y-[-100%]">
                <p className="text-center font-bold text-[44px] leading-[48px]">Our Mission</p>
                <p className="mx-[32px] mt-[10px] text-center font-bold text-[23px] leading-[32px] tracking-[-0.5px] text-[#C1121F]">
                    We innovate for humans,
                    with customized solutions that integrate data and engineering.
                </p>
            </div>
        </section>

    );
}
