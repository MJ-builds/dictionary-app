"use client";

import { useWordContext } from "../context/WordContext";

export default function NotFound() {
  const { wordData } = useWordContext();
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
