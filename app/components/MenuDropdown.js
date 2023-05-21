"use client";

import React, { useState, useRef, useEffect } from "react";
import { useWordContext } from "../context/WordContext";

export default function MenuDropdown() {
  const { activeFont, setActiveFont } = useWordContext();
  //local state re menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  //to be used for the event handler for clicking outside of the dropdown
  const menuRef = useRef();

  const toggleMenu = (event) => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleItemClick = (event) => {
    // handle the item click here
    setActiveFont(event.target.getAttribute("data-font"));
    //added for quality-feel
    setIsMenuOpen(!isMenuOpen);
  };

  // handler for closing the dropdown menu (if open) when clicking outside of the dropdown itself.
  const handleClickOutside = (event) => {
    // If there's a ref object (i.e., menuRef.current isn't null)...
    if (
      menuRef.current &&
      // ...and the clicked element isn't within the element referred to by the ref
      !menuRef.current.contains(event.target)
    ) {
      // then we know the click was outside the dropdown. Close it.
      setIsMenuOpen(false);
    }
  };

  // when state changes for isMenuOpen, run this useEffect hook (to assist with the above re non-dropdown click)
  useEffect(() => {
    if (isMenuOpen) {
      /* If a mousedown event occurs anywhere in the document (while menu is open), it calls 
        the handleClickOutside function */
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      /* If the menu is not open, remove the event listener (performance reasons) */
      document.removeEventListener("mousedown", handleClickOutside);
    }
    /* cleanup function - run before component unmounts (to prevent memory leaks).
    This also ensures that the event listener is removed when `isMenuOpen` changes,
    before a new one is potentially added. */
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <div className="relative flex-row " ref={menuRef}>
      {/* for now, placehold with Sans Serif but it will need to be dynamic 
        based on your choice of the dropdown - use state */}
      <button
        onClick={toggleMenu}
        className="flex flex-row gap-3 items-center text-sm md:text-lg"
      >
        {activeFont === "inter"
          ? "Sans Serif"
          : activeFont === "lora"
          ? "Serif"
          : "Mono"}
        <img src="./assets/images/icon-arrow-down.svg" />
      </button>

      {isMenuOpen && (
        <div className="absolute right-0 grid-flow-row h-full items-center z-10 dark:shadow-lobsided shadow-lobsided-light dark:shadow-[#A445ED] rounded-2xl p-4 bg-white dark:bg-[#1F1F1F] min-w-[122px] min-h-[101px] md:min-w-[183px] md:min-h-[152px]">
          <ul className="flex flex-col justify-between h-full cursor-pointer text-sm md:text-lg pl-2">
            <li
              className="font-inter hover:text-[#A445ED]"
              data-font="inter"
              onClick={handleItemClick}
            >
              Sans Serif
            </li>
            <li
              className="font-lora hover:text-[#A445ED]"
              data-font="lora"
              onClick={handleItemClick}
            >
              Serif
            </li>
            <li
              className="font-inconsolata hover:text-[#A445ED]"
              data-font="inconsolata"
              onClick={handleItemClick}
            >
              Mono
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
