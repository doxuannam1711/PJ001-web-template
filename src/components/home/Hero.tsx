import { Bubble1 } from "@components/vector";

export function Hero() {
  return (
    <section className="hero-banner flex flex-col items-center gap-1 w-full min-h-screen px-[5px]">
      <Bubble1 className="md:w-[760px] sm:w-[365px]">
        <div className="title-heading-1">Innovation</div>
        <div className="title-heading-2">Designed.</div>
      </Bubble1>

      {/* desktop div content */}

      {/* mobile div content */}
      <div className="title text-center font-[700] text-[21px] leading-[32px] tracking-[-0.5px] mt-[-38px] md:hidden">
        <div className="text-center font-bold">We are a Consulting Group.</div>
        <div className="text-center">And this is how we do it: <br/>Centralized.</div>
      </div>
    </section>
  );
}
