
export interface Footer {
    className?: string
}
export function Footer({ className = "" }: Footer) {
    return (
        <footer className={` ${className}`}>

        </footer>
    )
}