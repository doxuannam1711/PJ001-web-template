import { Bubble1, Cursor } from "@components/vector";
import { HomeTitle } from "./common/HomeTitle";
import { DomainsCard } from "./domains/domainsCard";
import ImgExample01 from "/images/example/imgexample01.jpg";

export function Domain() {
  return (
    <section className="domain flex flex-col gap-1 w-full justify-center min-h-screen mx-auto md:pl-[70px] max-md:pl-0">
      <HomeTitle textClassName="text-black" className="hidden md:flex">
        Domains
      </HomeTitle>

      <div className="card flex w-full xl:px-[290px] md:px-[33px] h-full items-center max-sm:px-[16px]">
        <div className="card-item pb-[84px] flex overflow-x-auto overflow-y-hidden gap-[42px] md:pl-[42px] w-full">
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
  );
}
