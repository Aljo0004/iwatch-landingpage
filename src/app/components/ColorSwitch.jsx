"use client";

import Image from "next/image";
import { useState } from "react";


const ColorSwitch = ({ selectedWatch, setSelectedWatch }) => {
  return (
    <div className="col-4 flex flex-col items-center gap-[1rem]">
      <div
        onClick={() => setSelectedWatch("black")}
        className={`h-[1.5rem] w-[1.5rem] cursor-pointer rounded-full border-[0.1rem] border-[color:var(--foreground)] bg-[var(--initwatch)] transition-transform duration-200 hover:scale-140 ${selectedWatch === "black" ? "scale-140" : ""}`}
      ></div>
      <div className="h-[1.5rem] w-[1px] border-dotted border-[color:var(--foreground)]"></div>
      <div
        onClick={() => setSelectedWatch("green")}
        className={`h-[1.5rem] w-[1.5rem] cursor-pointer rounded-full border-[0.1rem] border-[color:var(--foreground)] bg-[var(--green)] transition-transform duration-200 hover:scale-140 ${selectedWatch === "green" ? "scale-140" : ""}`}
      ></div>
      <div className="h-[1.5rem] w-[1px] border-dotted border-[color:var(--foreground)]"></div>
      <div
        onClick={() => setSelectedWatch("salmon")}
        className={`h-[1.5rem] w-[1.5rem] cursor-pointer rounded-full border-[0.1rem] border-[color:var(--foreground)] bg-[var(--sal)] transition-transform duration-200 hover:scale-140 ${selectedWatch === "salmon" ? "scale-140" : ""}`}
      ></div>
    </div>
  );
};

export default ColorSwitch;

