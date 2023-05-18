"use client";
import React, { useState, useRef } from "react";
import { useWordContext } from "../context/WordContext";

export default function DefinitionDisplay() {
  const { wordData, activeWord } = useWordContext();

  //for playing of the audio
  const audioRef = useRef();

  const playAudio = () => {
    audioRef.current.play();
  };

  if (!wordData) {
    return null;
  }

  const data = wordData[0];

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
      <div className="flex flex-row justify-between items-center w-full text-[#2D2D2D] text-3xl md:text-6xl">
        <div className="flex flex-col">
          {wordData.length > 0 && <div>{data.word}</div>}
          <div className="text-[#A445ED] font-normal text-lg md:text-2xl pt-2">
            {data.phonetic}
          </div>
        </div>
        <div>
          <img
            onClick={playAudio}
            src="./assets/images/icon-play.svg"
            alt="Play Audio"
            className="flex items-center w-12 h-12 md:w-20 md:h-20 cursor-pointer"
          />
          <audio
            ref={audioRef}
            src={`${
              data.phonetics.length === 0
                ? ""
                : data.phonetics[data.phonetics.length - 1].audio
            }`}
          />
        </div>
      </div>
    </div>
  );
}
