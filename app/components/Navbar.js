"use client";

import React, { useState } from "react";
import MenuDropdown from "./MenuDropdown";
import ToggleTheme from "./ToggleTheme";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center mb-4 md:mb-8 min-w-[370px] md:min-w-full pt-5">
      <div>
        <img className="transform scale-75 md:scale-100" src="./assets/images/logo.svg" />
      </div>
      <div className="ml-auto">
        <MenuDropdown />
      </div>
      <div className="mx-5 text-[#E9E9E9]">|</div>
      <div className="flex items-center justify-center scale-75 md:scale-100">
        <ToggleTheme />
      </div>
    </div>
  );
}
