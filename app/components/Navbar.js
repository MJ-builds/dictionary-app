"use client";

import React, { useState } from "react";
import MenuDropdown from "./MenuDropdown";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center mb-8 min-w-[370px] md:min-w-full pt-5">
      <div>
        <img className="transform scale-" src="./assets/images/logo.svg" />
      </div>
      <MenuDropdown />
      <div className="mx-5 text-[#E9E9E9]">|</div>
      <button className="flex flex-row gap-5 items-center">
        Button
        <div>
          {/* this to be changed to dynamic depending on light/dark theme */}
          <img src="./assets/images/icon-moon.svg" />
        </div>
      </button>
    </div>
  );
}
