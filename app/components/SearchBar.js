"use client";
import React, { useState } from "react";
import { useWordContext } from "../context/WordContext";

export default function SearchBar() {
  const { wordData, activeWord, setActiveWord, fetchWordData } =
    useWordContext();
  /* this is just used in addition to only update internally before enter 
  is pressed or search button is clicked - else API refreshes on every keystroke */
  const [inputValue, setInputValue] = useState("keyboard");

  const onChangeHandler = (e) => {
    setInputValue(e.target.value);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    setActiveWord(inputValue);
    fetchWordData(inputValue.toLowerCase());
  };

  if (!wordData) {
    return null;
  }

  return (
    <div
      className={`flex justify-between items-center mb-4 md:mb-8 h-[48px] md:h-[64px] min-w-[370px] md:w-[737px] bg-[#F4F4F4] dark:bg-[#1F1F1F] rounded-2xl ${
        activeWord === "" ? "border border-[#FF5252]" : ""
      }`}
    >
      <form className="flex w-full " onSubmit={onSubmitHandler}>
        <div className="flex flex-row gap-5 pl-5 w-full ">
          <input
            className="bg-transparent grow outline-none caret-[#A445ED] placeholder-[#2D2D2D] dark:placeholder-[#ffffff] placeholder-opacity-25 dark:placeholder-opacity-25 text-base md:text-xl "
            value={inputValue}
            placeholder="Search for any word..."
            onChange={onChangeHandler}
          />
        </div>
        <button className="pr-5">
          <img src="./assets/images/icon-search.svg" alt="Search icon"/>
        </button>
      </form>
    </div>
  );
}
