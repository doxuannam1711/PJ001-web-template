import { RefreshedPopup } from "@components/popup";
import { HomeTitle } from "./common/HomeTitle";
import { ScrollInfo } from "./common/ScrollInfo";
import { DomainsCard } from "./domains/domainsCard";
import ImgExample01 from "/images/example/imgexample01.jpg";
import { useHorizontalScroll } from "@hooks/index";

export function Domain() {
  const ref = useHorizontalScroll<HTMLDivElement>();

  return (
    <>
      <HomeTitle textClassName="text-black" className="hidden md:flex md:pl-[70px]">
        Domains
      </HomeTitle>
      <section
        id="domain-container"
        className="domain flex flex-col gap-1 w-full justify-center h-fit md:min-h-screen mx-auto max-md:pl-0 xl:items-center"
      >
        <div className="flex w-full xl:px-[66px] lg:px-[13px] md:px-[33px] h-full items-center max-w-[1440px]">
          <div
            ref={ref}
            className="overscroll-auto scroll-custom pb-[84px] flex overflow-x-auto overflow-y-hidden md:gap-[84px] scroll-mx-8 md:scroll-mx-110p max-sm:gap-[24px] w-full flex-nowrap"
          >
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
      </section>
      <ScrollInfo className="my-10 md:mt-[163px] md:mb-[288px]" />
    </>
  );
}
