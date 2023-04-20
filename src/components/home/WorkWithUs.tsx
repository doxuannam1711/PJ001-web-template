import { Bubble1 } from "@components/vector";
import { HomeMobileTitle } from "./common/HomeMobileTitle";
import { Button, ButtonOutline } from "@components/common";


export function WorkWithUs() {
    return (
        <section className="flex flex-col w-full justify-center min-h-screen mx-auto md:pl-[70px]">
            <HomeMobileTitle className="md:hidden mt-20">ICG <span className="text-primary-light">x</span> Career</HomeMobileTitle>

            {/* Bubbles */}
            <div className="w-full flex flex-col justify-center items-center md:hidden">
                {/* Image Growth */}
                <div className="mt-[587.66px]">
                    <Bubble1 size={423.34}>
                        <div className="z-[1] w-[300.86px] h-[97.05px] absolute
                        font-semibold text-primary-contrast tracking-[-0.91px] leading-[72.79px] rotate-[-8.43deg] 
                        text-[66.12px] pl-[27px]">
                            Growth
                        </div>
                    </Bubble1>
                </div>

                {/* Image Vibes */}
                <div className="mt-[96px]">
                    <Bubble1 size={285} className="ml-[96px]">
                        <div className="z-[1] w-[276px] h-[89.03px] absolute
                        font-semibold text-primary-contrast tracking-[-0.81px] leading-[64.62px] rotate-[7.22deg] 
                        text-[58.7px] pl-[46px]">
                            Vibes
                        </div>
                    </Bubble1>
                </div>

                {/* Image Vorzuge */}
                <div className="mt-[155.98px]">
                    <Bubble1 size={384}>
                        <div className="z-[1] w-[251.16px] h-[81.02px] absolute
                        font-semibold text-primary-contrast tracking-[-0.76px] leading-[60.76px] rotate-[-5.25deg] 
                        text-[55.19px] pl-[2px]">
                            Vorzüge
                        </div>
                    </Bubble1>
                </div>
            </div>

            <div className="font-bold leading-[48px] text-[40px] ml-[39.5px] mr-[40.5px] text-center mt-[222px] md:hidden">
                Work <span className="text-primary-light">with</span> us
                <div className="mt-[11px] h-[3px] w-[184px] bg-[#ED4842] mx-auto" />
            </div>

            <div className="mt-[45px] font-bold text-[30px] leading-[37px] w-full justify-center flex flex-row items-center 
            gap-x-[7px] md:text-[45px] md:leading-[54.86px]">
                <div className="h-[3px] bg-black w-[36px] md:hidden" />
                One for All.
            </div>

            <div className="mt-[8px] text-typo-body text-center w-[288px] mx-auto md:mt-[6px]">
                This is a brief explanation of the service with USP and an attractive product value for the client. This
                is a brief explanation of the service with USP and an attractive product.
            </div>

            <div className="md:mt-[6px] md:font-semibold hidden md:block">
                Bei ICG schätzen wir deine einzigartigen Fähigkeiten, Erfahrungen und Perspektiven. Werde Teil unseres Teams und
                arbeite mit talentierten Fachleuten in einer flachen Hierarchie zusammen, um für unsere Kunden innovative Lösungen
                zu entwickeln, die einen Unterschied machen.
            </div>

            {/* Button Zu allen Jobs */}
            <div className="mt-[53px] w-fit mx-auto">
                <Button className="py-[13.5px] px-[36px]"
                    textClassName="w-[122px] h-[21px] font-bold text-[17px] leading-[21px]" props={{}}>
                    Zu allen Jobs!
                </Button>
            </div>

            {/* Button Mehr anzeigen! */}
            <div className="mt-[16px] w-fit mx-auto">
                <ButtonOutline className="py-[13.5px] px-[28px]"
                    textClassName="w-[138px] h-[21px] font-bold text-[17px] leading-[20.72px]" props={{}}>
                    Mehr anzeigen!
                </ButtonOutline>
            </div>
        </section>
    )
}