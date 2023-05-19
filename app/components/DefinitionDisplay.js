"use client";
import React, { useState, useEffect, useRef } from "react";
import { useWordContext } from "../context/WordContext";
import NotFound from "./NotFound";
import EmptySearch from "./EmptySearch";

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

  if (activeWord === "") {
    return <EmptySearch />;
  }

  if (wordData.title === "No Definitions Found") {
    return <NotFound />;
  }

  const data = wordData[0];

  return (
    <div className="flex flex-col justify-between min-w-[370px] md:min-w-full">
      <div className="flex flex-row justify-between items-center w-full text-3xl md:text-6xl">
        <div className="flex flex-col">
          {wordData.length > 0 && <div>{data.word}</div>}
          <div className="text-[#A445ED] font-normal text-lg md:text-2xl pt-2">
            {data && data.phonetic ? data.phonetic : ""}
          </div>
        </div>
        {activeWord.length > 0 && (
          <div>
            <img
              onClick={playAudio}
              src="./assets/images/icon-play.svg"
              alt="Play Audio"
              className="flex items-center w-12 h-12 md:w-20 md:h-20 cursor-pointer"
            />
            <audio
              ref={audioRef}
              src={
                data && data.phonetics && data.phonetics.length > 0
                  ? data.phonetics[data.phonetics.length - 1].audio
                  : ""
              }
            />
          </div>
        )}
      </div>
      <div className="flex flex-col w-full md:w-[737px]">
        <div className="flex flex-col w-[350px] md:w-full">
          {/* I think this is where i need to add the .map. */}
          {data && data.meanings && data.meanings.length > 0
            ? data.meanings.slice(0, 5).map((speechType, index) => (
                <>
                  <div key={index} className="flex items-center">
                    <div className="py-6 italic text-lg md:text-2xl">
                      {speechType.partOfSpeech}
                    </div>
                    <span className="flex-grow border-b border-[#E9E9E9] dark:border-[#3A3A3A] ml-7"></span>
                  </div>
                  <div className="text-[#757575] font-normal text-base md:text-xl">
                    Meaning
                    {/* might need some checks to make sure data is not null */}
                    {speechType ? (
                      <ul
                        className="list-disc mt-4 md:mt-5 marker:text-[#A445ED] text-[#2D2D2D] dark:text-[#ffffff] text-[0.95rem] md:text-lg pl-4 md:pl-10"
                        style={{ listStylePosition: "outside" }}
                      >
                        {speechType.definitions
                          /* slice returns up to 25 items, but if the index is lower, 
              will return only those (no idx err). Having it here so that i can amend later if needs be */
                          .slice(0, 25)
                          .map((definition, index) => (
                            <li key={index}>
                              <span className="block ml-2 md:ml-5">
                                {definition.definition}
                              </span>
                            </li>
                          ))}
                      </ul>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="flex flex-row">
                    <div className=" text-[#757575] font-normal text-base md:text-xl mt-4 flex items-start">
                      {/* if synonyms are available for this part of speech, display, else ignore */}
                      {speechType &&
                        speechType.synonyms.length > 0 &&
                        "Synonyms"}

                      <span className="ml-6 font-bold text-[#A445ED] text-base md:text-xl">
                        {speechType
                          ? speechType.synonyms.map((synonym, index) => (
                              <span key={index}>{`${synonym} `} </span>
                            ))
                          : ""}
                      </span>
                    </div>
                  </div>
                </>
              ))
            : ""}
        </div>
      </div>
    </div>
  );
}
