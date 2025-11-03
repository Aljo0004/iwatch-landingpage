import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import { RiShoppingBag4Fill } from "react-icons/ri";

const HeaderSearch = () => {
  return (
    <div className="headersearch">
      <CiSearch size={30} color="white"/>
      <div className="line"></div>
      <RiShoppingBag4Fill size={30} color="white" />
    </div>
  );
};
export default HeaderSearch;
