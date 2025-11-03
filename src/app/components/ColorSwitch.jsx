"use client";

import Image from "next/image";
import { useState } from "react";


const ColorSwitch = ({ selectedWatch, setSelectedWatch }) => {
  return (
    <div className="colorswitch">
      <div onClick={() => setSelectedWatch("black")} className={`circle circle-black ${selectedWatch === "black" ? "active" : ""}`}></div>
      <div className="dotted-line"></div>
      <div onClick={() => setSelectedWatch("green")} className={`circle circle-green ${selectedWatch === "green" ? "active" : ""}`}></div>
      <div className="dotted-line"></div>
      <div onClick={() => setSelectedWatch("salmon")} className={`circle circle-salmon ${selectedWatch === "salmon" ? "active" : ""}`}></div>
    </div>
  );
};

export default ColorSwitch;
