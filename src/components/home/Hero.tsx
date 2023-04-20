import { Bubble2, Bubble1 } from "@components/vector";

export function Hero() {
  return (
    <section className="hero-banner flex flex-col items-center gap-1 w-full min-h-screen px-[5px] mx-auto md:mb-[250px] mt-[60px]">
      <Bubble2 className="md:w-[760px] max-md:w-[365px]" textClassName="md:flex md:flex-col">
        <div className="text-[56px] !font-semibold text-primary-contrast md:text-[100px] w-full flex flex-col items-center">
          <div className="title-content color-primary-contrast drop-shadow-exl leading-none shadow-black md:ml-[-280px]">
            Innovation
          </div>
          <div className="title-content md:block max-md:hidden color-primary-contrast drop-shadow-exl leading-[1.05em] ml-[280px]">
            Consulted
          </div>

                    <div className="title-content-mobile md:hidden color-primary-contrast drop-shadow-exl leading-[1.1em]">
                        Designed.
                    </div>
                </div>
                {/* content for desktop */}
                <div className="content max-md:hidden font-semibold text-primary-contrast mt-[29px] text-center text-[24px] drop-shadow-xl leading-[32px]">
                    Wir sind eine 360° IT Beratung <br /> mit dem Fokus Public, Transport und
                    Finance.
                </div>
            </Bubble2>

            {/* mobile div content */}
            <div className="title text-center font-[700] text-[21px] leading-[32px] tracking-[-0.5px] mt-[-38px] md:hidden">
                <div className="text-center font-bold">We are a Consulting Group.</div>
                <div className="text-center">
                    And this is how we do it: <br />
                    Centralized.
                </div>
            </div>

            {/* scroll */}
            <div className="scroll w-full font-normal text-[16px] my-[109px] md:my-[3px] flex flex-col items-center">
                <span className="leading-none">Scroll</span>
                <div className="divider w-[1px] h-[63px] bg-gradient-to-b mt-3 from-primary-default to-primary-contrast"></div>
            </div>
        </section>
    );
}
