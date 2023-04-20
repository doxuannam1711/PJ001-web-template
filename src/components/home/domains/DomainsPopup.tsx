import { CloseIcon } from "@components/vector/Close";
import { ReactNode } from "react";
import { DomainsPopupCard } from "./DomainsPopupCard";
import { HomeTitle } from "../common/HomeTitle";
interface DomainPopup {
  isOpen?: boolean;
  children?: ReactNode;
  title?: string;
  className?: string;
  closeClassName?: string;
  mainClassName?: string;
  clickOverlay?: boolean;
  onClose?: () => void;
}
export const DomainPopup = ({
  isOpen,
  children,
  title,
  className = "",
  closeClassName = "",
  mainClassName = "",
  onClose = () => true,
  clickOverlay = true,
}: DomainPopup) => {
  return (
    <div
      className={`w-[100vw] h-[100vh] z-[1000] fixed flex items-center overflow-y-auto overflow-x-hidden mx-auto justify-center custom-scroll top-0 left-0 bg-[rgb(17,17,17,0.5)]   ${
        isOpen ? "" : "hidden"
      } ${mainClassName}`}
    >
      <div className="bg-primary-contrast min-h-[529px] w-[calc(100%-30px)] box-border rounded-[30px] md:flex md:flex-col md:justify-center md:items-center md:overflow-hidden xl:items-start ">
        <div className="close flex justify-end w-full px-[15px] py-[15px] md:px-[27px] md:py-[21px]">
          <CloseIcon className="w-[14px] h-[14px]" />
        </div>

        {/* title - mobile */}
        <div className="text-center md:hidden font-bold text-[30px] px-[53px] leading-[36.57px]">
          <h1>Öffentlicher Verkehr</h1>
        </div>

        {/* title - desktop */}
        <HomeTitle className="max-md:hidden text-[44px] leading-[48px] font-bold xl:pl-[50px] xl:mb-[65px]">
          <h1>Öffentlicher Verkehr</h1>
        </HomeTitle>

        {/* divider */}
        <div className="flex xl:gap-[20px] w-full xl:px-[50px] justify-center">
          <div className="divider mx-[17px] h-[1px] bg-primary-main mt-[17px] mb-[50px] md:min-w-[640px] md:m-[29px] xl:w-full xl:mx-0"></div>
          <div className="divider mx-[17px] h-[1px] bg-primary-main mt-[17px] mb-[50px] md:min-w-[640px] md:m-[29px] max-xl:hidden xl:w-full xl:mx-0"></div>
        </div>

        {/* card */}
        <div className="flex flex-row w-full overflow-x-auto scroll-custom scroll-mx-8 gap-[50px] mb-[50px] md:mb-0 pb-[40px] md:max-h-[691px] box-border md:overflow-visible md:flex-col md:items-center md:overflow-y-auto xl:grid xl:grid-cols-2 xl:px-[50px] xl:gap-[55px]">
          <DomainsPopupCard
            title={"ACCUS Lorem lorem axus asus mira Totem."}
            content={
              "service description in brief. ACCUS Lorem lorem axus asus mira Totem. HAREM MALA in BOLGOM SCHIA. "
            }
          />
          <DomainsPopupCard
            title={"ACCUS Lorem lorem axus asus mira Totem."}
            content={
              "service description in brief. ACCUS Lorem lorem axus asus mira Totem. HAREM MALA in BOLGOM SCHIA. "
            }
          />
          <DomainsPopupCard
            title={"ACCUS Lorem lorem axus asus mira Totem."}
            content={
              "service description in brief. ACCUS Lorem lorem axus asus mira Totem. HAREM MALA in BOLGOM SCHIA. "
            }
          />
          <DomainsPopupCard
            title={"ACCUS Lorem lorem axus asus mira Totem."}
            content={
              "service description in brief. ACCUS Lorem lorem axus asus mira Totem. HAREM MALA in BOLGOM SCHIA. "
            }
          />
          <DomainsPopupCard
            title={"ACCUS Lorem lorem axus asus mira Totem."}
            content={
              "service description in brief. ACCUS Lorem lorem axus asus mira Totem. HAREM MALA in BOLGOM SCHIA. "
            }
          />
          <DomainsPopupCard
            title={"ACCUS Lorem lorem axus asus mira Totem."}
            content={
              "service description in brief. ACCUS Lorem lorem axus asus mira Totem. HAREM MALA in BOLGOM SCHIA. "
            }
          />{" "}
          <DomainsPopupCard
            title={"ACCUS Lorem lorem axus asus mira Totem."}
            content={
              "service description in brief. ACCUS Lorem lorem axus asus mira Totem. HAREM MALA in BOLGOM SCHIA. "
            }
          />
        </div>
      </div>
    </div>
  );
};
