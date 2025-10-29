import Image from "next/image";

const ColorSwitch = () => {
    return (
      <div className="colorswitch">
        <Image src="/colorindicator.png" alt="Color Switch" width={40} height={120} />
      </div>
    );
}
 
export default ColorSwitch;