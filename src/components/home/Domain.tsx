import { Bubble1, Cursor } from "@components/vector";
import { HomeTitle } from "./common/HomeTitle";
import { DomainsCard } from "./domains/DomainsCard";
import ImgExample01 from "/images/example/imgexample01.jpg";
import { ScrollInfo } from "./common/ScrollInfo";

export function Domain() {
  return (
    <section className="domain flex flex-col gap-1 w-full justify-center min-h-screen mx-auto  max-md:pl-0">
      <HomeTitle textClassName="text-black" className="hidden md:pl-[70px] md:flex">
        Domains
      </HomeTitle>

      <div className="flex w-full xl:px-[66px] lg:px-[13px] md:px-[33px] h-full items-center ">
        <div className="scroll-custom pb-[84px] md:pb-[54px] flex max-md:overflow-x-scroll md:overflow-x-auto items-start overflow-y-hidden md:gap-[84px] max-sm:gap-[24px] w-full flex-nowrap lg:scroll-mx-24 scroll-mx-8">
          <DomainsCard
            title={"Offentclicher CVerkher"}
            imageUrl={ImgExample01}
            content="ICG revolutioniert den Verkehrssektor durch innovative IT-Lösungen für nachhaltige Mobilität. Wir gestalten die Zukunft der Mobilität nach den Bedürfnissen unserer Gesellschaft."
          />

          <DomainsCard
            title={"Offentclicher CVerkhsadadser"}
            imageUrl={ImgExample01}
            content="ICG revolutioniert den Verkehrssektor durch innovative IT-Lösungen für nachhaltige Mobilität. Wir gestalten die Zukunft der Mobilität nach den Bedürfnissen unserer Gesellschaft."
          />

          <DomainsCard
            title={"Offentclicher CVerkhsadadser"}
            imageUrl={ImgExample01}
            content="ICG revolutioniert den Verkehrssektor durch innovative IT-Lösungen für nachhaltige Mobilität. Wir gestalten die Zukunft der Mobilität nach den Bedürfnissen unserer Gesellschaft."
          />
        </div>
      </div>

      {/* Add hor scroll and add scroll block */}
      <ScrollInfo className="md:hidden" />
    </section>
  );
}
