import { Link } from "react-router-dom";

export interface Header {
    dark?: boolean;
}

export function Header({ dark = false }: Header) {
    const currentPage = window.location.pathname;

    return (
        <header
            className={`flex justify-between bg-transparent px-[4vw] py-[1.5vw] w-screen ${dark ? 'text-white' : ''}`}>
            <div className={`flex gap-10 items-center`}>
                <Link to={`/`}>
                    <img src="/logo.png" alt="logo" className={`w-[48px]`} />
                </Link>
                <div className={`flex items-center gap-5 font-light text-[16px]`}>
                    <Link to={`/`}
                        className={`${currentPage === '/' ? 'underline underline-offset-8' : ''}`}>Home</Link>
                    <Link to={`/services`}
                        className={`${currentPage === '/services' ? 'underline underline-offset-8' : ''}`}>Services</Link>
                    <Link to={`/`}>Produkte</Link>
                    <Link to={`/team`}
                        className={`${currentPage === '/team' ? 'underline underline-offset-8' : ''}`}>Team</Link>
                    <Link to={`/blog`}
                        className={`${currentPage === '/blog' ? 'underline underline-offset-8' : ''}`}>Blog</Link>
                    <Link to={`/jobs`}
                        className={`${currentPage === '/jobs' ? 'underline underline-offset-8' : ''}`}>Jobs</Link>
                    <Link to={`/contact`}
                        className={`${currentPage === '/contact' ? 'underline underline-offset-8' : ''}`}>Kontakt</Link>
                </div>
            </div>


            <div className={`flex items-center gap-10`}>
                <a href="https://www.instagram.com/daenzerconsulting/" target={`_blank`}>
                    <img src={dark ? '/instagram-white.png' : 'instagram.png'} className={`w-[15px]`} />
                </a>
                <a href="https://www.linkedin.com/company/daenzer-consulting/" target={`_blank`}>
                    <img src={dark ? '/linkedin-white.png' : '/linkedin.svg'} className={`w-[15px]`} />
                </a>
                <a href="https://daenzer-consulting.atlassian.net/servicedesk/customer/portal/1" target={`_blank`}>
                    <button
                        className={`${dark ? 'bg-white text-black hover:bg-[#d7d7d7]' : 'bg-[#DF050F] text-white hover:bg-[#d95a49]'} px-[35px] py-[19px] text-[14px] font-medium`}>
                        Support
                    </button>
                </a>
            </div>

        </header>
    )
}