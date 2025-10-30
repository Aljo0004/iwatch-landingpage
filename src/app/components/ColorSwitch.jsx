"use client";

import Image from "next/image";
import { useState } from "react";


const ColorSwitch = () => {
  return (
    <div className="colorswitch">
        <div className="circle circle-black"></div>
        <div className="dotted-line"></div>
        <div className="circle circle-green"></div>
        <div className="dotted-line"></div>
        <div className="circle circle-salmon"></div>
    </div>
  );
};

export default ColorSwitch;
