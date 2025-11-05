"use client";

import Image from "next/image";
import BlackWatch from "./BlackWatch";
import GreenWatch from "./GreenWatch";
import SalmonWatch from "./SalmonWatch";
import { useState } from "react";

const Watches = ({selectedWatch, setSelectedWatch}) => {
  // const [selectedWatch, setSelectedWatch] = useState("black");
  return (
    <div className="flex gap-[3rem] place-self-center">
      <div
        onClick={() => setSelectedWatch("black")}
        className="before:content.[''] relative cursor-pointer transition-transform duration-200 before:absolute before:right-[-10px] before:bottom-[0rem] before:left-[-10px] before:z-[-1] before:h-[75%] before:rounded-[10px] before:bg-[var(--initwatch)] hover:scale-120"
      >
        {" "}
        {/* Hvis man klikker på det sorte ur, så sæt selectedWatch til "black" */}
        <BlackWatch />
      </div>
      <div
        onClick={() => setSelectedWatch("green")}
        className="before:content.[''] relative cursor-pointer transition-transform duration-200 before:absolute before:right-[-10px] before:bottom-[0rem] before:left-[-10px] before:z-[-1] before:h-[75%] before:rounded-[10px] before:bg-[var(--green)] hover:scale-120"
      >
        {" "}
        {/* osv osv */}
        <GreenWatch />
      </div>
      <div
        onClick={() => setSelectedWatch("salmon")}
        className="before:content.[''] relative cursor-pointer transition-transform duration-200 before:absolute before:right-[-10px] before:bottom-[0rem] before:left-[-10px] before:z-[-1] before:h-[75%] before:rounded-[10px] before:bg-[var(--sal)] hover:scale-120"
      >
        {" "}
        {/* osv osv */}
        <SalmonWatch />
      </div>
    </div>
  );
};

export default Watches;
