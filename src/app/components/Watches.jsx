"use client";

import Image from "next/image";
import BlackWatch from "./BlackWatch";
import GreenWatch from "./GreenWatch";
import SalmonWatch from "./SalmonWatch";
import { useState } from "react";

const Watches = ({selectedWatch, setSelectedWatch}) => {
  // const [selectedWatch, setSelectedWatch] = useState("black");
  return (
    <div className="watches">
      <div onClick={() => setSelectedWatch("black")} className="blackwatch">  {/* Hvis man klikker på det sorte ur, så sæt selectedWatch til "black" */}
        <BlackWatch />
      </div>
      <div onClick={() => setSelectedWatch("green")} className="greenwatch"> {/* osv osv */}
        <GreenWatch />
      </div>
      <div onClick={() => setSelectedWatch("salmon")} className="salmonwatch"> {/* osv osv */}
        <SalmonWatch />
      </div>
    </div>
  );
};

export default Watches;
