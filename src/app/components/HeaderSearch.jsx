import Image from "next/image";

const HeaderSearch = () => {
  return (
    <div className="headersearch">
      <Image src="/search.png" 
      alt="Search Icon" 
      width={30} 
      height={30} />
<div className="line"></div>
      <Image src="/shopping-bag.png" 
      alt="Shopping Bag Icon" 
      width={30}
      height={30}
      />
    </div>
  );
};
export default HeaderSearch;
