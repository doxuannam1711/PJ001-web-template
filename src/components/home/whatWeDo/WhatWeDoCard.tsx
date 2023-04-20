
export interface WhatWeDoCard {
    title: string;
    children: string;
    className?: string;
    imageUrl?: string;
}
export function WhatWeDoCard({
    title,
    children,
    className = "",
    imageUrl = ""
}: WhatWeDoCard) {
    return <div className={`w-full ${className}`}>
        <div className="mt-[45px] w-full flex justify-center md:mt-[81px]">
            <img src={imageUrl} className="w-[229px] h-[229px]" />
        </div>

        <div className="mt-[26px] mx-auto w-[280px] h-[64px] font-bold text-[30px] leading-[32px] 
        text-center text-primary-default">
            {title}
        </div>

        <div className="mt-[16px] mx-auto w-[310px] h-[72px] text-[16px] tracking-[0.15px] leading-[24px] 
        text-center text-primary-default">
            {children}
        </div>
    </div>
}