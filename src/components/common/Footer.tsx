import { Link } from "react-router-dom";

export interface Footer {
    className?: string
}
export function Footer({ className = "" }: Footer) {
    return (
        <footer className={`w-screen ${className}`}>
            FOOTER
        </footer>
    )
}