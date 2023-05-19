"use client";

import React, { useState } from "react";
import MenuDropdown from "./MenuDropdown";
import ToggleTheme from "./ToggleTheme";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center mb-8 min-w-[370px] md:min-w-full pt-5">
      <div>
        <img className="transform scale-" src="./assets/images/logo.svg" />
      </div>
      <MenuDropdown />
      <div className="mx-5 text-[#E9E9E9]">|</div>
      <div className="flex items-center justify-center scale-75 md:scale-100">
        <ToggleTheme />
      </div>
    </div>
  );
}
