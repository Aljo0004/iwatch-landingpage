import Image from "next/image";


const BigImage = () => {
    return (
      <div className="bigimage">
        <Image src="/navy.png" alt="Black Watch" width={450} height={450} />
      </div>
    );
}
 
export default BigImage;