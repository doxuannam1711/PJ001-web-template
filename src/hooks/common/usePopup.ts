import { useState } from "react";

export interface UsePopup {
  init?: boolean;
}
export function usePopup({ init = false }: UsePopup = { init: false }) {
  const [isOpen, setIsOpen] = useState(init);
  const open = (callback = () => {}) => {
    setIsOpen(true);
    callback();
  };
  const close = (callback = () => {}) => {
    setIsOpen(false);
    callback();
  };
  return { isOpen, open, close };
}
