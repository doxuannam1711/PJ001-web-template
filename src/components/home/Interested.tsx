import { Logo1 } from "@components/vector";


export function Interested() {
    return (
        <section>
            <Logo1></Logo1>
            {/* <div className="text-center h-[447px] w-[100%] bg-[url('public/images/logo-03.svg')] bg-no-repeat bg-center scale-[75%]">
            </div> */}
            <div className="hidden md:flex w-full max-w-[100%] flex-col items-center">
                <p className="mx-[180px] text-center font-bold text-[44px] leading-[48px] ">
                    Interessiert uns kennenzulernen?<br />
                    Bei einem Kaffi oder Bier?<br />
                    Wir empfangen dich gerne!
                </p>
                <p>Bewirb dich!</p>
            </div>
            <div className="w-full max-w-[100%] flex-col flex items-center md:hidden">
                <p className="text-center font-bold text-[23px] leading-[32px] tracking-[-0.5px]">
                    Interessiert? <br />
                    Wir freuen uns immer darauf, neue Talente kennenzulernen!
                </p>
                <p>Bewirb dich!</p>
            </div>
        </section>
    )
}