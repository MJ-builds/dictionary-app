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

  if (activeWord.trim() === "") {
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
            <div className="icon-container">
              <svg
                onClick={playAudio}
                className="icon flex items-center w-12 h-12 md:w-20 md:h-20 cursor-pointer text-[#A445ED] "
                xmlns="http://www.w3.org/2000/svg"
                width="75"
                height="75"
                viewBox="0 0 75 75"
              >
                <g fill="currentColor" fillRule="evenodd">
                  <circle
                    className="icon-circle opacity-25"
                    cx="37.5"
                    cy="37.5"
                    r="37.5"
                  />
                  <path className="icon-arrow" d="M29 27v21l21-10.5z" />
                </g>
              </svg>
            </div>
            <audio
              ref={audioRef}
              src={
                data &&
                data.phonetics &&
                data.phonetics.length > 0 &&
                data.phonetics[data.phonetics.length - 1].audio !== ""
                  ? data.phonetics[data.phonetics.length - 1].audio
                  : "./assets/audio/not-available-audio.mp3"
              }
            />
          </div>
        )}
      </div>
      <div className="flex flex-col w-full md:w-[737px]">
        <div className="flex flex-col w-[350px] md:w-full">
          {data && data.meanings && data.meanings.length > 0
            ? data.meanings.slice(0, 5).map((speechType, index) => (
                <React.Fragment key={index}>
                  <div className="flex items-center">
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
                          /* slice returns up to 15 items, but if the index is lower, 
              will return only those (no idx err). Having it here so that i can amend later if needs be */
                          .slice(0, 15)
                          .map((definition, index) => (
                            <li key={index}>
                              <span className="block ml-2 md:ml-5">
                                {definition.definition}
                              </span>
                              {/* may need to add better checking */}
                              {speechType.partOfSpeech === "verb" &&
                                definition?.example && (
                                  <span className="block ml-2 md:ml-5 my-2 text-[#757575]">{`"${definition.example}"`}</span>
                                )}
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
                              <span
                                className="hover:underline cursor-pointer"
                                key={index}
                              >
                                {`${synonym} `}{" "}
                              </span>
                            ))
                          : ""}
                      </span>
                    </div>
                  </div>
                </React.Fragment>
              ))
            : ""}
        </div>
        <span className="flex-grow border-b border-[#E9E9E9] dark:border-[#3A3A3A] mt-4 mb-4"></span>
        <div className="flex flex-col md:flex-row mb-16 md:mb-28 text-sm font-normal">
          <div className="text-[#757575] underline mr-8 mb-2 md:mb-0">
            Source
          </div>
          {data && data.sourceUrls ? (
            <a
              href={`${data.sourceUrls.slice(0, 1)}`}
              alt="Source of searched word"
              target="_blank"
            >
              <button className="flex pr-5 items-center">
                <span className="underline text-[#2D2D2D] dark:text-[#ffffff] mr-4">
                  {data.sourceUrls.slice(0, 1)}
                </span>
                <img
                  className="mb-[0.125rem]"
                  src="./assets/images/icon-new-window.svg"
                />
              </button>
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
}
