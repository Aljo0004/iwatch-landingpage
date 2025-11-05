import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import { RiShoppingBag4Fill } from "react-icons/ri";

const HeaderSearch = () => {
  return (
    <div className="flex">
      <CiSearch size={30} color="white" />
      <div className="mr-[1rem] ml-[1rem] border border-solid border-[color:var(--foreground)]"></div>
      <RiShoppingBag4Fill size={30} color="white" />
    </div>
  );
};
export default HeaderSearch;
