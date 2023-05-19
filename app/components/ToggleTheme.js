"use client";
import React, { useState } from "react";
import { useWordContext } from "../context/WordContext";

export default function ToggleTheme() {
  // local state
  const [isChecked, setIsChecked] = useState(false);
  const { theme, toggleTheme } = useWordContext();

  // handles both the toggle and the setting of theme using toggleTheme from context
  const handleChange = () => {
    setIsChecked(!isChecked);
    toggleTheme();
    console.log(theme);
  };

  return (
    <label className="relative inline-flex items-center mb-4 cursor-pointer">
      <input
        type="checkbox"
        className="sr-only peer"
        checked={isChecked}
        onChange={handleChange}
      />
      <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
      <div>
        {theme === "light" ? (
          <img src="./assets/images/icon-moon.svg" />
        ) : (
            <svg className="dark:text-[#A445ED]" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M1 10.449a10.544 10.544 0 0 0 19.993 4.686C11.544 15.135 6.858 10.448 6.858 1A10.545 10.545 0 0 0 1 10.449Z"/></svg>
        )}
      </div>
    </label>
  );
}
