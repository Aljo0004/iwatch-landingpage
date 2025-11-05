import Image from "next/image";
import Header from "./components/Header";
import Text from "./components/Text";
import BigImage from "./components/BigImage";
import ColorSwitch from "./components/ColorSwitch";
import BuyButton from "./components/BuyButton";
import Number from "./components/Number";
import Watches from "./components/Watches";


export default function Home() {
  return (
    <div className="grid grid-cols-[1.5fr_1fr_0.1fr] grid-rows-4 h-[95vh]">
        <Header />
      <Text />
      <BigImage />
      <BuyButton />
      <Number />
    </div>
  );
}
