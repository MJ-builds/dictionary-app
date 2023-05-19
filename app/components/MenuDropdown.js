"use client";

import React, { useState } from "react";
import { useWordContext } from "../context/WordContext";

export default function MenuDropdown() {
  const { activeFont, setActiveFont } = useWordContext();
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
    <div className="relative flex-row ">
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
