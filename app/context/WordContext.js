"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

//create context
const WordContext = createContext();

export const useWordContext = () => {
  return useContext(WordContext);
};

export const WordProvider = ({ children }) => {
  //getting data, depending on the searchword
  const [wordData, setWordData] = useState("null");
  //related to search - searchword itself
  const [activeWord, setActiveWord] = useState("words");
  //note for later: Sans-serif = inter, Serif = lora, Mono = inconsolata
  const [activeFont, setActiveFont] = useState("inter");
  //for themes later on
  const [theme, setTheme] = useState("light");

  const fetchWordData = async (word) => {
    try {
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );
      const data = await response.json();
      setWordData(data);
      console.log(data);
    } catch (error) {
      console.log("An error has occured", error);
    }
  };

  //theme func. may put this in it's own context.
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  useEffect(() => {
    document.documentElement.classList.add(theme);
    return () => {
      document.documentElement.classList.remove(theme);
    };
  }, [theme]);

  return (
    <WordContext.Provider
      value={{
        wordData,
        activeWord,
        setActiveWord,
        activeFont,
        setActiveFont,
        theme,
        setTheme,
        fetchWordData,
        toggleTheme,
      }}
    >
      {children}
    </WordContext.Provider>
  );
};
