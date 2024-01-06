import { useState, useRef, useEffect } from "react";

export const useOutsideClick = () => {
  const [isOpen, setIsOpen] = useState(false);

  const ref = useRef<any>(null);

  const toggleOpen = () => {
    setIsOpen((s) => !s);
  };

  const handleOutsideClick = (e: MouseEvent) => {
    if (!ref?.current?.contains(e.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleOutsideClick);

    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return {
    ref,
    isOpen,
    toggleOpen,
  };
};
