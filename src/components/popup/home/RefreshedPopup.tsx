import { Button } from "@components/common";
import { Logo2 } from "@components/vector";

export interface RefreshedPopup {
    isOpen: boolean;
    onClose: () => void
}

export function RefreshedPopup({ isOpen, onClose }: RefreshedPopup) {
    return (
        <section className="w-full min-h-screen flex justify-center text-center bg-[#1E1E1E]">
            <div className="w-[640px] h-[509.65px] overflow-hidden bg-[url('src/assets/images/background_refreshedpopup2.png')] bg-no-repeat bg-cover flex-col flex rounded-[33.2474px] shadow-[0_15px_46px_8px_rgba(38,38,38,0.08)]">
                <div className="relative flex justify-center items-center h-[182px] w-[640px] bg-[url('src/assets/images/background_refreshedpopup.png')]">
                    <Logo2 size={300} textFillColor="black"></Logo2>
                    <div className="absolute top-0 right-0 mt-[18px] mr-[24px]">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" fill="black" fill-opacity="0.56" />
                        </svg>
                    </div>
                </div>
                <div className="flex h-[100%] flex-col items-center justify-around">
                    <p className="text-primary-light mt-[40px] font-bold text-[48.76px] leading-[53.2px]">Refreshed!</p>
                    <p className="text-[#000000] h-[151px] text-center mx-[83px] font-normal text-[16px] leading-[24px] tracking-[0.15px]">Wir sind stolz darauf, unser brandneues Rebranding zu präsentieren
                        , das unseren Fokus auf zukunftsorientierte IT-Lösungen und kundenorientierte Dienstleistungen
                        unterstreicht. Taucht ein in unsere neue Welt der digitalen Möglichkeiten!</p>
                    <Button className="w-[194px] h-[48px] py-[13.5px] px-[36px] bg-primary-light mb-[32px]"
                        textClassName="w-[122px] h-[21px] font-bold text-[17px] leading-[21px]" props={{}}>
                        Zu allen Jobs!
                    </Button>
                </div>
            </div>
        </section>
    )
}