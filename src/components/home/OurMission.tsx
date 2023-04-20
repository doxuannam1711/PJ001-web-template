import { Bubble2 } from "@components/vector";


export function OurMission() {
    return (
        <section className="w-full min-h-screen flex justify-center text-center mx-auto">
            <div className="w-[100%] flex justify-center">
                <Bubble2 className="md:w-[760px] max-md:w-[365px] opacity-20">
                </Bubble2>
                <div className="absolute left-0 top-[120%] mx-[120px] md:block hidden">
                    <p className="text-center font-bold text-[44px] leading-[48px]">Unsere Mission</p>
                    <p className="mt-[10px] text-center font-bold text-[60px] leading-[64px] tracking-[-0.5px] text-[#C1121F]">
                        Innovationen für Menschen schaffen durch massgeschneiderte Beratungen und IT-Lösungen.
                    </p>
                </div>
                <div className="absolute left-0 top-[110%] md:hidden">
                    <p className="text-center font-bold text-[44px] leading-[48px]">Our Mission</p>
                    <p className="mx-[32px] mt-[10px] text-center font-bold text-[23px] leading-[32px] tracking-[-0.5px] text-[#C1121F]">
                        We innovate for humans,
                        with customized solutions that integrate data and engineering.
                    </p>
                </div>
            </div>
        </section>
    );
}
