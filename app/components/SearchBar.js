"use client";
import React, { useState } from "react";
import { useWordContext } from "../context/WordContext";

export default function SearchBar() {
  const { wordData, activeWord, setActiveWord, fetchWordData } =
    useWordContext();
  /* this is just used in addition to only update internally before enter 
  is pressed or search button is clicked - else API refreshes on every keystroke */
  const [inputValue, setInputValue] = useState("");

  const onChangeHandler = (e) => {
    setInputValue(e.target.value);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    // confirm whether setActiveWord also needs to be .toLowerCase() or not...
    setActiveWord(inputValue);
    fetchWordData(inputValue.toLowerCase());
  };

  if (!wordData) {
    return null;
  }

  return (
    <div
      className={`flex justify-between items-center mb-8 h-[64px] min-w-[370px] md:w-[737px] bg-[#F4F4F4] rounded-2xl ${
        activeWord === "" ? "border border-[#FF5252]" : ""
      }`}
    >
      <form className="flex w-full" onSubmit={onSubmitHandler}>
        <div className="flex flex-row gap-5 pl-5 w-full">
          <input
            className="bg-transparent grow outline-none placeholder-[#2D2D2D] placeholder-opacity-25 text-base md:text-xl"
            value={inputValue}
            placeholder="Search for any word..."
            onChange={onChangeHandler}
          />
        </div>
        <button className="pr-5">
          <img src="./assets/images/icon-search.svg" />
        </button>
      </form>
    </div>
  );
}
