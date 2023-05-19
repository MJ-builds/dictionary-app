"use client";
//this should most likely go in context?
// import "@fontsource/inconsolata";
// import "@fontsource/inter";
// import "@fontsource/lora";

import Navbar from "./components/Navbar";
import DefinitionDisplay from "./components/DefinitionDisplay";
import SearchBar from "./components/SearchBar";

//importing useWordContext too now for use later
import { WordProvider, useWordContext } from "./context/WordContext";

export default function App() {
  return (
    <WordProvider>
      <Home />
    </WordProvider>
  );
}

function Home() {
  const { activeFont, theme } = useWordContext();
  return (
    //replace font with font-{currentFont} or something like that from state i'll set up in context (currentFont, setCurrentFont)
    //same for when i set up theme - className= {`$theme font-${currentFont}} flex etc etc etc`}
    <main
      className={`${theme} text-[#2D2D2D] dark:text-white bg-[#ffffff] dark:bg-[#050505] font-${activeFont} font-bold text-xl flex flex-col min-h-screen items-center`}
    >
      {/* unsure re this extra div just yet*/}
      <div className="flex flex-col justify-center items-center w-auto min-w-[370px] md:min-w-[737px]">
        <Navbar />
        <SearchBar />
        <DefinitionDisplay />
      </div>
    </main>
  );
}
