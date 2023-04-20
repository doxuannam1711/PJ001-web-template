import { Button, ButtonOutline } from "@components/common";
import { Logo1 } from "@components/vector";


export function Interested() {
    return (
        <section className="">
            <div className="flex justify-center">
                <Logo1 sizeDesktop={446.66} desktopClassName="" sizeMobile={325.64} mobileClassName="flex"></Logo1>
            </div>
            <div className="hidden md:flex w-full max-w-[100%] flex-col items-center">
                <p className="mx-[180px] text-center font-bold text-[44px] leading-[48px] ">
                    Interessiert uns kennenzulernen?<br />
                    Bei einem Kaffi oder Bier?<br />
                    Wir empfangen dich gerne!
                </p>
                <ButtonOutline
                    className="w-[224px] h-[48px] mt-[16px] py-[4.5px] mb-[44px]"
                    textClassName="text-primary-default text-center"
                    props={{
                        onClick: () => console.log("Button clicked"),
                        disabled: true
                    }}>
                    Bewerb dich!
                </ButtonOutline>
            </div>

            <div className="flex-col flex items-center md:hidden mx-[32px]">
                <p className="text-center font-bold text-[23px] leading-[32px] tracking-[-0.5px]">
                    Interessiert? <br />
                    Wir freuen uns immer darauf, neue Talente kennenzulernen!
                </p>
                <Button
                    className="w-[224px] h-[48px] mt-[16px] mb-[44px]"
                    textClassName="text-primary-contrast text-center"
                    props={{
                        onClick: () => console.log("Button clicked"),
                        disabled: true
                    }}>
                    Bewerb dich!
                </Button>
            </div>
        </section>
    )
}