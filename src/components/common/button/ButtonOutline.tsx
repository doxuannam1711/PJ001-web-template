import { ReactNode } from "react";

export interface ButtonOutline {
    className?: string;
    textClassName?: string;
    children: ReactNode;
    props?: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
}
export function ButtonOutline({ className = "", textClassName = "", children, props }: ButtonOutline) {
    return <button  {...props}
        className={`border-[2px] hover:border-[2px] border-primary-light  hover:bg-primary-light transition duration-500 ease-in-out text-primary-default hover:text-primary-contrast rounded-full ${className}`}>
        <p className={` text-[17px] leading-[21px] font-bold text-center ${textClassName}`}>{children}</p>
    </button>
}