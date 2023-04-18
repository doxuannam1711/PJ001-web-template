
export interface RefreshedPopup {
    isOpen: boolean;
    onClose: () => void
}

export function RefreshedPopup({ isOpen, onClose }: RefreshedPopup) {
    return (
        <section>
            Refreshed Popup
        </section>
    )
}