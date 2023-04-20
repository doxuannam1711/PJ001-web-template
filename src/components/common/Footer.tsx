import { Bubble2, Cursor, Logo2 } from "@components/vector";
import { ButtonOutline } from "./button/ButtonOutline";
export interface Footer {
}

const footerMenuData = [
    {
        title: "Home",
        link: "#",
    },
    {
        title: "Career",
        link: "#",
    },
    {
        title: "Jobs",
        link: "#",
    },
    {
        title: "About",
        link: "#",
    },
]

export function Footer() {
    return (
        <footer className="bg-primary-default">
            <div className="md:flex absolute mt-[55px] ml-[114px] hidden">
                <Logo2 size={270}></Logo2>
            </div>
            <div className="h-[802px] w-[100% flex-col flex justify-around">
                <div className="flex-col justify-around">
                    <div className="text-center flex justify-center md:hidden">
                        <Logo2 size={130}></Logo2>
                    </div>
                    <p className="text-[40px] font-bold leading-[48px] text-center text-primary-contrast mt-[23px] md:mt-[288px]">Let’s Connect.</p>
                    <div className="mx-[88px] md:mx-[400px] w-auto md:w-auto h-0 border-solid border-[1px] border-primary-light mt-[11px] md:mt-[40px]"></div>
                </div>
                <div className="md:hidden text-center">
                    <p className="text-[18.38px] font-semibold leading-[24.5px] text-center text-primary-contrast">
                        Looking for an exciting career?<br />
                        You’re One click away.
                    </p>
                    <ButtonOutline
                        className="w-[224px] h-[48px] mt-[32px] mb-[44px]"
                        textClassName="text-primary-contrast text-center"
                        props={{
                            onClick: () => console.log("Button clicked"),
                            disabled: true
                        }}>
                        Join the adventure!
                    </ButtonOutline>
                    <p className="text-[18.38px] font-semibold leading-[24.5px] text-center text-primary-contrast">Looking for a collaboration?<br />
                        We’re ready for it!
                    </p>
                    <ButtonOutline
                        className="w-[224px] h-[48px] mt-[32px] mb-[44px]"
                        textClassName="text-primary-contrast text-center"
                        props={{
                            onClick: () => console.log("Button clicked"),
                            disabled: true
                        }}>
                        Contact us!
                    </ButtonOutline>
                    {/* <div className="text-primary-contrast w-[224] h-[48] border-2 border-solid border-primary-light text-center mt-[14px] mb-[44px]">Contact us!</div> */}
                </div>
                <div className="md:flex justify-center hidden">
                    <div className="flex-col mr-[106px] text-right">
                        <p className="text-[18.38px] font-semibold leading-[24.5px] text-primary-contrast text-right">
                            Spannenden Karriere gesucht ?<br />
                            Klicke hier! :)
                        </p>
                        <ButtonOutline
                            className="w-[224px] h-[48px] mt-[16px] mb-[44px]"
                            textClassName="text-primary-contrast text-center"
                            props={{
                                onClick: () => console.log("Button clicked"),
                                disabled: true
                            }}>
                            Join the adventure!
                        </ButtonOutline>
                    </div>
                    <div className="flex-col">
                        <p className="text-[18.38px] font-semibold leading-[24.5px] text-primary-contrast">
                            Willst du zusammenarbeiten?<br />
                            Wir sind immer offen.
                        </p>
                        <ButtonOutline
                            className="w-[224px] h-[48px] mt-[16px] mb-[44px]"
                            textClassName="text-primary-contrast text-center"
                            props={{
                                onClick: () => console.log("Button clicked"),
                                disabled: true
                            }}>
                            Kontaktiere uns!
                        </ButtonOutline>
                    </div>
                </div>
                <div className="">
                    <div className="mx-[88px] w-auto h-0 border-solid border-[1px] border-primary-light mb-[28px] md:hidden"></div>
                    <ul className="flex text-primary-contrast gap-[23px] justify-center mb-[13px]">
                        {footerMenuData.map(item => (
                            <li className="hover:text-primary-light" key={item.title}>
                                <a className="" href={item.link}>{item.title}</a>
                            </li>
                        ))}
                    </ul>
                    <div className="text-primary-contrast text-center hover:text-primary-light">
                        <a href="">Office</a>
                    </div>
                </div>
            </div>
            <div className="relative bottom-0 left-0 w-[100%] h-[6.33vh] overflow-hidden">
                <Bubble2 size={400} className="w-[100%] h-[100%] object-cover object-top scale-[3] translate-y-[45px]"></Bubble2>
            </div>
        </footer>
    )
}