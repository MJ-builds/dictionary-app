"use client";
import React, { useState } from "react";
import { useWordContext } from "../context/WordContext";

export default function DefinitionDisplay() {
  const { wordData, activeWord } = useWordContext();

  const data = wordData[0];

  if (!wordData) {
    return null;
  }

  if (wordData.title === "No Definitions Found") {
    return (
      <div className="flex w-full md:w-[737px] pt-5">
        <div className="flex flex-col w-[350px] md:w-full md:justify-center md:items-center gap-2">
          <div className="flex justify-center pb-5">
            <img src="./assets/images/face.png" />
          </div>
          <div className="font-bold flex justify-center pb-8">
            {wordData.title}
          </div>
          <div className="font-light text-[#757575]">
            {wordData.message} {wordData.resolution}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-between min-w-[370px] md:min-w-full">
      <div className="flex flex-row justify-between items-center w-full text-[#2D2D2D] text-[2rem] md:text-[4rem]">
        {wordData.length > 0 && data.word}
        <div>
          <button className="flex items-center">
            <img
              src="./assets/images/icon-play.svg"
              className="w-12 h-12 md:w-20 md:h-20"
            />
          </button>
        </div>
      </div>
      <div className="text-[#A445ED] font-normal">{data.phonetic}</div>
    </div>
  );
}
