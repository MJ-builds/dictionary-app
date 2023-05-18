"use client";

import React, { useState } from "react";
import { useWordContext } from "../context/WordContext";

export default function MenuDropdown() {
  const { setActiveFont } = useWordContext();
  //local state re menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleItemClick = (event) => {
    // handle the item click here
    setActiveFont(event.target.getAttribute("data-font"));
    //added for quality-feel
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative ml-auto flex-row">
      {/* for now, placehold with Sans Serif but it will need to be dynamic 
        based on your choice of the dropdown - use state */}
      <button
        onClick={toggleMenu}
        className="flex flex-row gap-3 items-center text-sm md:text-lg"
      >
        Sans Serif
        <img src="./assets/images/icon-arrow-down.svg" />
      </button>

      {isMenuOpen && (
        <div className="absolute right-0 grid-flow-row h-full items-center z-10 shadow-lg rounded-2xl p-4 border border-[#faf8f8] bg-white min-w-[122px] min-h-[101px] md:min-w-[183px] md:min-h-[152px]">
          <ul className="flex flex-col justify-between h-full cursor-pointer text-sm md:text-lg">
            <li
              className="font-inter"
              data-font="inter"
              onClick={handleItemClick}
            >
              Sans Serif
            </li>
            <li
              className="font-lora"
              data-font="lora"
              onClick={handleItemClick}
            >
              Serif
            </li>
            <li
              className="font-inconsolata"
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
