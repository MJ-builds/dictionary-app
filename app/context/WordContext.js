"use client";

import React, { createContext, useContext, useState } from "react";

//create context
const WordContext = createContext();

export const useWordContext = () => {
  return useContext(WordContext);
};

export const WordProvider = ({ children }) => {
  //getting data, depending on the searchword
  const [wordData, setWordData] = useState('null');
  //related to search - searchword itself
  const [activeWord, setActiveWord] = useState("keyboard");
  //note for later: Sans-serif = inter, Serif = lora, Mono = inconsolata
  const [currentFont, setCurrentFont] = useState("Sans Serif");
  //for themes later on
  const [theme, setTheme] = useState("light");

    const fetchWordData = async (word) => {
        try {
            const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
            const data = await response.json();
            setWordData(data);
            console.log(data);
        } catch (error) {
            console.log("An error has occured", error)
        }
    }

  return (
    <WordContext.Provider
      value={{
        wordData,
        activeWord,
        setActiveWord,
        currentFont,
        theme,
        fetchWordData
      }}
    >
      {children}
    </WordContext.Provider>
  );
};
