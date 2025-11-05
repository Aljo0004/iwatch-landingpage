"use client";

import Image from "next/image";
import Watches from "./Watches";
import { useState } from "react";
import ColorSwitch from "./ColorSwitch";

const BigImage = () => {
  const [selectedWatch, setSelectedWatch] = useState("black"); // Opretter state variabel "selectedWatch" med startværdi "black" (viser det sorte billede som udgangspunkt)
  // selectedWatch = den nuværende valgte ur-type
  // setSelectedWatch = funktionen til at ændre selectedWatch værdien (kig Watches.jsx)
  const getWatchImage = () => {
if (selectedWatch === "black") return "/navy.png";
else if (selectedWatch === "green") return "/mint.png";
else if (selectedWatch === "salmon") return "/ocean.png";
else return "/navy.png";
  };

  return (
    <div className="col-span-2 col-start-2 row-span-3 row-start-2 flex flex-col">
      <div className="grid grid-cols-2 items-center justify-items-center">
        <Image className="justify-self-start ml-[2.5rem] mb-[2rem] mt-[-2rem]"
          src={getWatchImage()}
          alt="Black Watch"
          width={450}
          height={450}
        />
        <ColorSwitch
          selectedWatch={selectedWatch}
          setSelectedWatch={setSelectedWatch}
        />
      </div>
      <Watches
        selectedWatch={selectedWatch}
        setSelectedWatch={setSelectedWatch}
      />
      {/* selectedWatch= er prop navnet (hvad Watches komponenten modtager det som)
{selectedWatch} er værdien (den state variabel du definerede i BigImage) */}
    </div>
  );
}
 
export default BigImage;