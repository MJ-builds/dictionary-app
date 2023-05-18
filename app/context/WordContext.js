"use client";

import React, { createContext, useContext, useState } from "react";

//create context
const WordContext = createContext();

export const useWordContext = () => {
  return useContext(WordContext);
};

export const WordProvider = ({ children }) => {
  //just setting a default word for now
  const [word, setWord] = useState("keyboard");
  //note for later: Sans-serif = inter, Serif = lora, Mono = inconsolata
  const [currentFont, setCurrentFont] = useState("Sans Serif");
  const [theme, setTheme] = useState("light");

  return (
    <WordContext.Provider
      value={{
        word,
        currentFont,
        theme,
      }}
    >
      {children}
    </WordContext.Provider>
  );
};
